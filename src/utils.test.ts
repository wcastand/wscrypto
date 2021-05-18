import { ReadyState } from 'react-use-websocket'
import { getConnectionStatus, parseStock, parseJsonMessage } from './utils'

describe('getConnectionStatus', () => {
  it('should return the right status', () => {
    expect(getConnectionStatus(ReadyState.CLOSED)).toEqual('Closed')
    expect(getConnectionStatus(ReadyState.CLOSING)).toEqual('Closing')
    expect(getConnectionStatus(ReadyState.CONNECTING)).toEqual('Connecting')
    expect(getConnectionStatus(ReadyState.OPEN)).toEqual('Open')
    expect(getConnectionStatus(ReadyState.UNINSTANTIATED)).toEqual('Uninstantiated')
  })
})

describe('parseJsonMessage', () => {
  it('should return the same stock', () => {
    let stocks = {
      asks: new Map([[10000, 10], [12000, 100]]),
      bids: new Map([[10000, 10], [12000, 100]]),
    }
    let jsonmessages = { asks: [], bids: [] }
    expect(parseJsonMessage(stocks, jsonmessages)).toEqual(stocks)
  })

  it('should return the same stock without error', () => {
    let stocks = {
      asks: new Map([[10000, 10], [12000, 100]]),
      bids: new Map([[10000, 10], [12000, 100]]),
    }
    let jsonmessages = { randomKey: 'fake' }
    expect(parseJsonMessage(stocks, jsonmessages)).toEqual(stocks)
  })

  it('should return the asks without error', () => {
    let stocks = {
      asks: new Map([[10000, 10], [12000, 100]]),
      bids: new Map([[10000, 10], [12000, 100]]),
    }
    let jsonmessages = { randomKey: 'fake', asks: [[10000, 100]] }
    let expected = {
      asks: new Map([[10000, 100], [12000, 100]]),
      bids: new Map([[10000, 10], [12000, 100]])
    }

    expect(parseJsonMessage(stocks, jsonmessages)).toEqual(expected)
  })

  it('should return the modified stock', () => {
    let stocks = {
      asks: new Map([[10000, 10], [12000, 100]]),
      bids: new Map([[10000, 10], [12000, 100],])
    }
    let expected = {
      asks: new Map([[10000, 10], [12000, 100], [10001, 10], [14302, 21]]),
      bids: new Map([[10000, 10], [12000, 100], [14021, 211]])
    }

    let jsonmessages = { asks: [[10001, 10], [14302, 21]], bids: [[14021, 211]] }
    expect(parseJsonMessage(stocks, jsonmessages)).toEqual(expected)

    jsonmessages = { asks: [[100231, 123230], [142302, 211], [10000, 0]], bids: [[1402, 11]] }

    expected.asks.set(100231, 123230)
    expected.asks.set(142302, 211)
    expected.asks.delete(10000)

    expected.bids.set(1402, 11)

    expect(parseJsonMessage(stocks, jsonmessages)).toEqual(expected)
  })
})

describe('parseStock', () => {
  it('should return stock grouped properly and sorted', () => {
    let stocks = new Map([[40000, 1000], [40001, 1200], [43001, 123], [43010, 121], [43020, 124], [43030, 125], [43031, 1223]])
    let expected = [[43030, 1348], [43020, 124], [43010, 121], [43000, 123], [40000, 2200]]

    expect(parseStock(stocks, 10)).toEqual(expected)

    stocks = new Map([[40000, 3000], [43000, 30], [43023, 10]])
    expected = [[43000, 40], [40000, 3000]]

    expect(parseStock(stocks, 1000)).toEqual(expected)
  })
})
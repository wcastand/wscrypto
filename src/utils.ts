import { useMemo, useRef } from 'react'
import { ReadyState } from 'react-use-websocket'

type Stocks = {
  asks: Map<number, number>
  bids: Map<number, number>
}

export function parseJsonMessage(stocks: Stocks, jsonMessage: any): Stocks {
  if (jsonMessage === null) return stocks
  const asks: [number, number][] = jsonMessage.asks ?? []
  const bids: [number, number][] = jsonMessage.bids ?? []
  asks.forEach(([price, size]) => {
    if (size > 0) stocks.asks.set(price, size)
    else stocks.asks.delete(price)
  })
  bids.forEach(([price, size]) => {
    if (size > 0) stocks.bids.set(price, size)
    else stocks.bids.delete(price)
  })
  return stocks
}

export function getConnectionStatus(state: ReadyState): string {
  return {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[state]
}

export function parseStock(stocks: Map<number, number>, group: number): [number, number][] {
  const res = new Map<number, number>()
  for (let [price, size] of stocks.entries()) {
    const groupValue = price - ((price + group / 2) % group) + group / 2
    if (res.has(groupValue)) res.set(groupValue, res.get(groupValue)! + size)
    else res.set(groupValue, size)
  }

  return [...res].sort((a, b) => b[0] - a[0])
}

export type useStockResult = {
  askingEntries: [number, number][]
  bidingEntries: [number, number][]
}

export function useStocks(lastJsonMessage: any, group: number): useStockResult {
  const stocksHistory = useRef<Stocks>({
    asks: new Map(),
    bids: new Map(),
  })

  stocksHistory.current = useMemo(() => parseJsonMessage(stocksHistory.current, lastJsonMessage), [lastJsonMessage])
  const askingEntries = useMemo(() => parseStock(stocksHistory.current.asks, group), [lastJsonMessage, group])
  const bidingEntries = useMemo(() => parseStock(stocksHistory.current.bids, group), [lastJsonMessage, group])

  return {
    askingEntries,
    bidingEntries,
  }
}

export default useStocks
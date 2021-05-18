import { getConnectionStatus } from './utils'
import { ReadyState } from 'react-use-websocket'

describe('getConnectionStatus', () => {
  it('should return the right status', () => {
    expect(getConnectionStatus(ReadyState.CLOSED)).toEqual('Closed')
    expect(getConnectionStatus(ReadyState.CLOSING)).toEqual('Closing')
    expect(getConnectionStatus(ReadyState.CONNECTING)).toEqual('Connecting')
    expect(getConnectionStatus(ReadyState.OPEN)).toEqual('Open')
    expect(getConnectionStatus(ReadyState.UNINSTANTIATED)).toEqual('Uninstantiated')
  })
})
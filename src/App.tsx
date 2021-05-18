import { tw } from 'twind'
import cogoToast from 'cogo-toast'
import useWebSocket from 'react-use-websocket'
import React, { useState, useMemo, useEffect } from 'react'

import styles from './styles'
import useStocks, { getConnectionStatus } from './utils'

const groups = [10, 25, 50, 100, 500, 1000, 2500]
const onError = () => cogoToast.error('Error, we are retrying soon...')
const onOpen = () => cogoToast.success('Connection succesful')
const onClose = () => cogoToast.info('Connection closed')
const onReconnectStop = () => cogoToast.error("We couldn't reconnect, please reload or contact us.")

function App() {
	const [isConnected, setIsConnected] = useState(true)
	const [groupIndex, setGroupIndex] = useState(3)
	const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
		'wss://www.cryptofacilities.com/ws/v1',
		{
			reconnectAttempts: 10,
			reconnectInterval: 3000,
			retryOnError: true,
			onError,
			onOpen,
			onClose,
			onReconnectStop,
		},
		isConnected
	)
	const connectionStatus = useMemo(() => getConnectionStatus(readyState), [readyState])
	const { bidingEntries, askingEntries } = useStocks(lastJsonMessage, groups[groupIndex])

	useEffect(() => {
		if (isConnected) sendJsonMessage({ event: 'subscribe', feed: 'book_ui_1', product_ids: ['PI_XBTUSD'] })
	}, [isConnected])

	return (
		<div className={tw(styles.container)}>
			<h1 className={tw([styles.text, 'font-bold text-4xl pb-4'])}>Orderbook</h1>
			<div className={tw(['grid gap-4 grid-cols-2 items-center justify-items-start'])}>
				<div className={tw`flex justify-start items-stretch h-6`}>
					<p className={tw([styles.text, `pr-2`])}>Group:</p>
					<button
						className={tw([styles.button, 'rounded-none py-0 border-r border-gray-400'])}
						onClick={() => setGroupIndex((v) => (v > 0 ? v - 1 : v))}
					>
						-
					</button>
					<button
						className={tw([styles.button, 'rounded-none py-0'])}
						onClick={() => setGroupIndex((v) => (v < groups.length ? v + 1 : v))}
					>
						+
					</button>
					<p className={tw([styles.text, `bg-gray-600 text-white px-2`])}>{groups[groupIndex].toLocaleString()}</p>
				</div>
				<div className={tw(['flex flex-col justify-end items-end justify-self-end'])}>
					<button className={tw([styles.button])} onClick={() => setIsConnected(!isConnected)}>
						{isConnected ? 'Disconnect' : 'Connect'}
					</button>
					<p className={tw(styles.text)}>The WebSocket is currently {connectionStatus}</p>
				</div>
			</div>
			<div className={tw`grid grid-cols-2 gap-8 justify-start items-start`}>
				<h4 className={tw([styles.text, 'font-bold text-lg pb-2'])}>Sell</h4>
				<h4 className={tw([styles.text, 'font-bold text-lg pb-2'])}>Buy</h4>
			</div>

			<div className={tw`grid grid-cols-2 gap-8 justify-start items-start`}>
				<table className={tw([styles.table])}>
					<thead>
						<tr className={tw([styles.row])}>
							<th className={tw([styles.text, 'p-2 font-bold'])}>Price</th>
							<th className={tw([styles.text, 'p-2 font-bold'])}>Size</th>
							<th className={tw([styles.text, 'p-2 font-bold'])}>Total</th>
						</tr>
					</thead>
					<tbody>
						{askingEntries.map(([price, size]) => {
							return (
								<tr key={`ask-entries-${price}`} className={tw([styles.row, 'even:(bg-gray-200)'])}>
									<td className={tw([styles.text, styles.cell, 'text-red-400'])}>{price.toLocaleString()}</td>
									<td className={tw([styles.text, styles.cell, ''])}>{size.toLocaleString()}</td>
									<td className={tw([styles.text, styles.cell, ''])}>{(price * size).toLocaleString()}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<table className={tw([styles.table])}>
					<thead>
						<tr className={tw([styles.row])}>
							<th className={tw([styles.text, 'p-2 font-bold'])}>Price</th>
							<th className={tw([styles.text, 'p-2 font-bold'])}>Size</th>
							<th className={tw([styles.text, 'p-2 font-bold'])}>Total</th>
						</tr>
					</thead>
					<tbody>
						{bidingEntries.map(([price, size]) => {
							return (
								<tr key={`bid-entries-${price}`} className={tw([styles.row, 'even:(bg-gray-200)'])}>
									<td className={tw([styles.text, styles.cell, 'text-red-400'])}>{price.toLocaleString()}</td>
									<td className={tw([styles.text, styles.cell, ''])}>{size.toLocaleString()}</td>
									<td className={tw([styles.text, styles.cell, ''])}>{(price * size).toLocaleString()}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default App

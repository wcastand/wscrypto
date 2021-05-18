import React, { useState } from 'react'
import { tw, apply } from 'twind'
import cogoToast from 'cogo-toast'

import useStocks from './utils'

const container = apply`p-8 min-h-screen bg-gray-100`
const text = apply`text-base`
const table = apply`border rounded`
const row = apply`text-left border-b`
const cell = apply`border-r p-2 last:(border-none)`
const button = apply`
  w(full md:auto)
  text(sm white uppercase)
  px-2
  py-1
  transition-colors
  duration-300
  bg-gray-500
  hover:(bg-gray-300)
  rounded
`
const groups = [10, 25, 50, 100, 500, 1000, 2500]
function onError() {
	cogoToast.error('Error, we are retrying soon...')
}
function onOpen() {
	cogoToast.success('Connection succesful')
}
function onClose() {
	cogoToast.info('Connection closed')
}

function App() {
	const [isConnected, setIsConnected] = useState(true)
	const [groupIndex, setGroupIndex] = useState(3)

	const { connectionStatus, bidingEntries, askingEntries } = useStocks(isConnected, groups[groupIndex], { onError, onOpen, onClose })

	return (
		<div className={tw(container)}>
			<h1 className={tw([text, 'font-bold text-4xl pb-4'])}>Orderbook</h1>
			<div className={tw(['grid gap-4 grid-cols-2 items-center justify-items-start'])}>
				<div className={tw`flex justify-start items-stretch h-6`}>
					<p className={tw([text, `pr-2`])}>Group:</p>
					<button
						className={tw([button, 'rounded-none py-0 border-r border-gray-400'])}
						onClick={() => setGroupIndex((v) => (v > 0 ? v - 1 : v))}
					>
						-
					</button>
					<button className={tw([button, 'rounded-none py-0'])} onClick={() => setGroupIndex((v) => (v < groups.length ? v + 1 : v))}>
						+
					</button>
					<p className={tw([text, `bg-gray-600 text-white px-2`])}>{groups[groupIndex].toLocaleString()}</p>
				</div>
				<div className={tw(['flex flex-col justify-end items-end justify-self-end'])}>
					<button className={tw([button])} onClick={() => setIsConnected(!isConnected)}>
						{isConnected ? 'Disconnect' : 'Connect'}
					</button>
					<p className={tw(text)}>The WebSocket is currently {connectionStatus}</p>
				</div>
			</div>
			<div className={tw`grid grid-cols-2 gap-8 justify-start items-start`}>
				<h4 className={tw([text, 'font-bold text-lg pb-2'])}>Sell</h4>
				<h4 className={tw([text, 'font-bold text-lg pb-2'])}>Buy</h4>
			</div>

			<div className={tw`grid grid-cols-2 gap-8 justify-start items-start`}>
				<table className={tw([table])}>
					<thead>
						<tr className={tw([row])}>
							<th className={tw([text, 'p-2 font-bold'])}>Price</th>
							<th className={tw([text, 'p-2 font-bold'])}>Size</th>
							<th className={tw([text, 'p-2 font-bold'])}>Total</th>
						</tr>
					</thead>
					<tbody>
						{askingEntries.map(([price, size]) => {
							return (
								<tr key={`ask-entries-${price}`} className={tw([row, 'even:(bg-gray-200)'])}>
									<td className={tw([text, cell, 'text-red-400'])}>{price.toLocaleString()}</td>
									<td className={tw([text, cell, ''])}>{size.toLocaleString()}</td>
									<td className={tw([text, cell, ''])}>{(price * size).toLocaleString()}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<table className={tw([table])}>
					<thead>
						<tr className={tw([row])}>
							<th className={tw([text, 'p-2 font-bold'])}>Price</th>
							<th className={tw([text, 'p-2 font-bold'])}>Size</th>
							<th className={tw([text, 'p-2 font-bold'])}>Total</th>
						</tr>
					</thead>
					<tbody>
						{bidingEntries.map(([price, size]) => {
							return (
								<tr key={`bid-entries-${price}`} className={tw([row, 'even:(bg-gray-200)'])}>
									<td className={tw([text, cell, 'text-red-400'])}>{price.toLocaleString()}</td>
									<td className={tw([text, cell, ''])}>{size.toLocaleString()}</td>
									<td className={tw([text, cell, ''])}>{(price * size).toLocaleString()}</td>
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

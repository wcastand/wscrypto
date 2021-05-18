import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { setup, tw } from 'twind'
import { css, theme } from 'twind/css'

// tailwind reset
setup()
tw(
	css({
		':global': {
			body: {
				color: theme('colors.gray.700'),
			},
		},
	})
)

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

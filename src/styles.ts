import { apply } from 'twind'

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

export default {
  container,
  text,
  table,
  row,
  cell,
  button,
}
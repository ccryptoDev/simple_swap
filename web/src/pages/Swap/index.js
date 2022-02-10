import React from 'react'
import ExchangePage from '../../components/ExchangePage'

export default function Swap({ initialCurrency }) {
  console.log('initialCurrency - : ', initialCurrency)
  return <ExchangePage initialCurrency={initialCurrency} />
}

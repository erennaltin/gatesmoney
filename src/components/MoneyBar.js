import React from 'react'
import {useSelector} from 'react-redux'

export default function MoneyBar() {
  const cart = useSelector((state) => state.cart.items)

  return (
    <div>
      MoneyBar
    </div>
  )
}

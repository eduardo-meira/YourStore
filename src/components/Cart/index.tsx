import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { getTotalPrice, ParsetoBRL } from '../../utils/index'
import {
  CartCotnainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const hasItemOnCart = () => {
    if (items.length === 0) {
      return false
    }
    return true
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartCotnainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <button className="closer" onClick={closeCart} type="button" />
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt="" />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{ParsetoBRL(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {ParsetoBRL(getTotalPrice(items))}
          <span>em até 6x sem juros</span>
        </Prices>
        <Button
          onClick={goToCheckout}
          type="button"
          title="Clique para p  rosseguir"
        >
          {hasItemOnCart() ? 'Finalizar compra' : 'adicione itens no carrinho'}
        </Button>
      </SideBar>
    </CartCotnainer>
  )
}

export default Cart

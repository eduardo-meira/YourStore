import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import {} from '../ProductList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { ParsetoBRL } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>de {ParsetoBRL(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por apenas: {ParsetoBRL(game.prices.old)}</>
            )}
          </p>
          {game.prices.discount && (
            <Button
              type="button"
              title="Click to add the game in the cart"
              variant="primary"
              onClick={addToCart}
            >
              Adiconar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

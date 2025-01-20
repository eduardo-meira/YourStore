import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { ParsetoBRL } from '../../utils/index'
import { useGetFeaturedGameQuery } from '../../services/api'

import { Imagem, Precos, Titulo } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaques do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            de <span> {ParsetoBRL(game.prices.old)} </span>
            <br />
            por apenas {ParsetoBRL(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click here to enjoy the offer"
        >
          Acesse
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner

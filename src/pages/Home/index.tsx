import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        games={onSaleGames}
        title="Pomoções"
        background="grey"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
export default Home

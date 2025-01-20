import { PacmanLoader } from 'react-spinners'
import { colors } from '../../globalStyles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white} />
  </Container>
)

export default Loader

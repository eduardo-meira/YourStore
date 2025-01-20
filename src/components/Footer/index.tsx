import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqiu para acessar os jogos de RPG "
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqiu para acessar os jogos de ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqiu para acessar os jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqiu para acessar os jogos de simulação"
              to="/categories#simmulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqiu para acessar os jogos de luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqiu para acessar a seção depromoções"
              to="/#on-sale"
            >
              Promoção
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqiu para acessar seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy;-Sua empresa- todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer

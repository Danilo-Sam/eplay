import { HeaderBar, Links, LinkItem, LinkCart } from './styled'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
    <div>
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <div>
      <LinkCart>
        0 - produto(s)
        <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </div>
  </HeaderBar>
)

export default Header

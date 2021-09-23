import './Header.css';
import logo from './logoMarca.svg';
import carrinho from './carrinho.svg';

function Header() {
    return (
        <header className="Header">
            <div>
                <img src={logo} className="logoMarca" alt="logo"></img>            
                <input></input>
                <div>
                    <span>
                        <a>Olá, </a>
                        <b>Carlos. </b>
                        <img src={carrinho} className="carrinho" alt="carrinho"></img>
                    </span>
                </div>
            </div>          
            <div>
                <div className="menu">
                    <div id="menuHamburguer">
                        <span class="trace"></span>
                        <span class="trace"></span>
                        <span class="trace"></span>
                    </div>
                    <span>Todas as categorias</span>
                </div>
                <div id="opcoes">
                    <a href="">Mais vendidas</a>
                    <a href="">Ofertas do dia</a>
                    <a href=""> Atendimento ao Cliente</a>
                </div>
            </div> 
            
      </header>
    );
  }
  
  export default Header;
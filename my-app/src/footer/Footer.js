import './footer.css';
import footerImg from './footer.svg';

function Footer() {
  return (
    <footer className="Footer">
        <div className="footerImg"><img src={footerImg} alt="footerImg"></img></div>
        <div>
            <img></img>
            <div>
                <span>
                    <h5>Departamento</h5>
                    <span>
                        <a>Bleza e perfumaria</a>
                        <a>Kit mãe&filha</a>
                        <a>moda</a>
                        <a>Saúde</a>
                        <a>Suplementos e vitaminas</a>
                        <a>T-shirts</a>
                    </span>
                </span>
                <span>
                    <h5>Institucional</h5>
                    <span>
                        <a>Quem somos</a>
                        <a>Contato</a>
                        <a>Meus Pedidos</a>
                        <a>Políticas de privacidade</a>
                    </span>
                </span>
                <span>
                    <h5>Redes sociais</h5>
                    <a><img></img> bem.menininhaoficial</a>
                    <a><img></img> bem.menininhaoficial</a>
                </span>
                <span>
                    <h5>Central de Ajuda</h5>
                    <p>Praia grande - SP
                       <b> (13)98882-9281</b>
                       Segunda a sexta: 8h30 às 22h
                       Sábado: Fechado
                       Domingo: Fechado 
                    </p>
                </span>
            </div>
        </div>
        <p>2020 Bemmenininha Todos os direitos reservados.Avenida Presidente Kennedy, 3106, Aviação Praia Grande, Sao Paulo, Br</p>
    </footer>
  );
}

export default Footer;
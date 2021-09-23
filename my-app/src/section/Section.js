import './Section.css';
import camiseta from './camiseta.svg';

function Section() {
  return (
    <section className="Section">
        <div>
          <button>Voltar a lista</button>
        </div>
        <div id="infoProduto">
          <img src={camiseta}></img>
          <span>
            <h3>Neque porro quisquam est qui</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ipsum vehicula, faucibus purus placerat, suscipit nunc. Mauris porttitor purus a ullamcorper accumsan. Sed cursus dapibus nisl at tristique. Ut lacinia odio sed purus facilisis, a pulvinar dui laoreet. Maecenas vel euismod massa. Ut feugiat, elit nec imperdiet aliquam, velit lectus tristique mauris, nec dapibus nisl mi placerat nisl. Aliquam luctus aliquam lectus. Nullam rutrum lacinia dui. Nunc gravida luctus mauris a laoreet. Nunc finibus iaculis magna.</p>
          </span>
          <span>
            <b>Compartilhar</b>
            <div>
              <img src="./facebook.png"></img>
              <img src="./facebook.png"></img>
              <img src="./facebook.png"></img>
              <img src="./facebook.png"></img>
              <img src="./facebook.png"></img>
            </div>
          </span>
        </div>
        <aside></aside>
        <div id="descricaoProduto">
          <h2>DESCRIÇÃO DO PRODUTO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique erat eu ligula vestibulum luctus. Duis gravida sed odio et rutrum. Cras sit amet ligula elit. Nullam finibus elit eget ultricies vehicula. Ut accumsan vehicula tellus, vel luctus justo. Integer interdum nulla orci, sit amet molestie nunc commodo eget. Fusce eget interdum est, non lobortis metus. Ut tristique eros id enim commodo congue. In hac habitasse platea dictumst. Duis ut bibendum arcu. Nunc id pellentesque urna. Sed scelerisque tortor lacus, vulputate feugiat magna imperdiet at. Ut iaculis tellus at libero tempus dignissim. Ut condimentum semper diam, quis egestas purus ultricies eu.</p>
        </div>
        <h4>Quem viu este produto comprou</h4>
        <div></div>
    </section>
  );
}

export default Section;
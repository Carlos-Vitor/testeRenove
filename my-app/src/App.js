import logo from './logo.svg';
import './App.css';
import Nav from './navbar/Nav';
import Header from './header/Header';
import Section from './section/Section';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Section/>
      <Footer />
    </div>
  );
}

export default App;
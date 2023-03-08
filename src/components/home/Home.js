import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';



function Home() {
    return (
      <body>
        <header><Header/></header>
        <main><Tours/></main>
        <footer><Footer/></footer>
      </body>
    );
  }
  
  export default Home;
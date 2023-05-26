import Header from './components/Header'
import Main from './components/Main'
import ProdutosRelacionados from './components/ProdutosRelacionados'
import Parceiros from './components/Parceiros'
import Marcas from './components/Marcas'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <ProdutosRelacionados
        sub1="celular"
        sub2="acessórios"
        sub3="tablets"
        sub4="notbooks"
        sub5="tvs"
        sub6="ver todos"
      />
      <Parceiros />
      <ProdutosRelacionados />
      <Parceiros />
      <Marcas />
      <ProdutosRelacionados />
      <Footer />
    </div>
  );
}

export default App;

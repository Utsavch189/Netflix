import logo from './logo.svg';
import './App.css';
import { req } from './Movieapi/urls';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Header from './Components/Header';

function App() {






  return (
      <>
        <Header/>
        <Banner title={req.NetflixOriginals}/>
        <Row title={req.NetflixOriginals} isLarge={true} name="Netflix Originals"/>
        <Row title={req.Trending}  name="Trendings"/>
        <Row title={req.TopRated}  name="Top-Rated"/>
        <Row title={req.Action}  name="Action"/>
        <Row title={req.Comedy}  name="Comedy"/>
        <Row title={req.Horror}  name="Horror"/>
        <Row title={req.Romantic}  name="Romantic"/>
        <Row title={req.Documentory}  name="Documentory"/>
        
      </>
  );
}

export default App;

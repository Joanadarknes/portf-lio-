import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills"; 
import { Footer } from "./components/Footer";
import { QuemSou } from "./components/quemSou";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <QuemSou />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import Add from "./containers/Add/Add";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";

const App = () => (
  <>
    <header>
      <NavBar/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={(
          <Home/>
        )}/>
        <Route path="/add" element={(
          <Add/>
        )}/>
        <Route path="/about" element={(
          <About/>
        )}/>
        <Route path="/contacts" element={(
          <Contacts/>
        )}/>
        <Route path="*" element={<h1>Not Found!</h1>}/>
      </Routes>
    </main>
  </>
);

export default App;

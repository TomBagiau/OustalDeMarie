import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activites from "./components/Activites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Maison from "./components/Maison";
import NavBar from "./components/NavBar";
import MentionsLegales from "./components/MentionsLegales";
import Confidentialite from "./components/Confidentialite";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='la-maison' element={<Maison />} />
          <Route path='activites' element={<Activites />} />
          <Route path='contact' element={<Contact />} />
          <Route path='mentions-legales' element={<MentionsLegales />} />
          <Route path='confidentialite' element={<Confidentialite />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;

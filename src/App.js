import './App.css';
import About from "./Components/About";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />}/>
          <Route path="/shop" element = {<Shop />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


function Home(){
  return (
    <h1>Home Page</h1>
  )
}
export default App;

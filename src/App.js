/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Service from "./Service"
import Effect from "./Effect"
 export default function App() {
     return(
      <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path ="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="Service" element = {<Service/>}/>
  </Route>
       </Routes>
       </BrowserRouter>
       <Effect/>
</>
     )
 }


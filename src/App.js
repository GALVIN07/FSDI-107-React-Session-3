import NavBar from "./components/navBar";
import Footer from "./components/footer";
// import Item from "./components/item";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Welcome Karens of the World </h1>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;

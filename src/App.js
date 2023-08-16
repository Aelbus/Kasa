//import "./styles/App.css";
import Header from "./components/header";
import Router from "./router.js";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;

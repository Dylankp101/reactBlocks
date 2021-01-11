import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Sub from "./components/Sub"
import Add from "./components/Add"


function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <Main>
          <Sub/>
          <Sub/>
          <Sub/>
          <Add/>
        </Main> 
    </div>
  );
}

export default App;

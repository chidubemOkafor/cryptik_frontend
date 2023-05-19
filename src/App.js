import './App.css';
import Navbar from "./components/navbar/Navbar"
import Main from "./components/body/Main"
function App() {
  return (
    <div className='overflow-y-hidden overflow-x-hidden'>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;

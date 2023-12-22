// import logo from './logo.svg';
import Home from './pages/Home';
import Menu from './components/Menu';
import Projets from './pages/Projets';
import './css/app.css';
import './App.css';


function App() {
  return (
    <>
      <Menu />
      <Home />
      <Projets />
    </>
  );
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className='bg-danger'>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

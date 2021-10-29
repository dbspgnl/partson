import logo from './static/image/logo512.png';
import './static/css/App.css';
import './static/css/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import sidebar from './components/layout/SideNav'

function App() {
  return (
    <div className="App">
      <div className="sidebar pt-3">
        <FontAwesomeIcon icon={faBars} color="#e5e5e5" size="lg" transform="bottom-4" className="side-icon"/>
        <div className="text-white side-menu">메뉴1</div>
      </div>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          select button
        </a> */}
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Users from "./components/Users";
import Constituencies from "./components/Constituencies";
import Home from './components/Home';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Profile from './components/Profile/profile';


function App() {
  return (
    <div className="Background-set">
      <div className="container text-white mt-5 mb-5 App">
        <header className="App-header">
        <h3 className="mb-5 text-black">
          <strong> Voting Machine </strong>{" "}
          <small>
            <em>React</em>
          </small>
        </h3>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/constituencies" element={<Constituencies />} />
            <Route exact path="/users/:id" element={<Profile />} />
          </Routes>
        </Router>
        </header>
      </div>
    </div>
  );
}

export default App;

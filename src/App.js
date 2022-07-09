import Nav from "./components/Nav";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route} from  'react-router-dom'
import PostPage from "./components/PostPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />      
        <Route path="/" exact component={Home} />
        <Route path='/post/:id' component={PostPage} />
      </div>
    </Router>
  );
}

export default App;

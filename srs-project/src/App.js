import { BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Provider } from 'react-redux';
import myStore from './redux/store';
import Routing from "./routing";

function App() {

  return (
    <Provider store={myStore}>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </Provider>
  );
}
export default App;

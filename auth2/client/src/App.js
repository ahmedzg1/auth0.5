
import Signup from "./Components/Signup";
import { Switch ,Route} from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";

function App() {
  return (
    
    <div className="App">
   
     <Route exact path="/" component={Signup}            />
     <Route exact path="/" component={Dashbord}     />
    
   
    </div>
  );
}

export default App;

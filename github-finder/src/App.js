import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './commponents/layout/Navbar'


function App() {
  return (
    <Router>
      <div className='.fex-col.justify-between.h-screen'>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
 
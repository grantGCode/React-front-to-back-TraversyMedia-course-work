import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Alert from './commponents/layout/Alert';
import NotFound from './pages/NotFound';
import Navbar from './commponents/layout/Navbar'
import Footer from './commponents/layout/Footer';
import { GithubProvider } from './Context/GithubContext/GithubContext';
import { AlertProvider} from './Context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/user/:login' element={<User />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
            </main>

            <Footer />

          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
 
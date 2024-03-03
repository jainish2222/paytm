import {Routes, Route,BrowserRouter} from 'react-router-dom'
import { Signin } from './pages/Signin ';
import { Signup } from './pages/Signup ';
import { SendMoney } from './pages/SendMoney ';
import { Dashboard } from './pages/Dashboard';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
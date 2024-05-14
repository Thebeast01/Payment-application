import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
function App() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'>{isAuthenticated ? navigate("/dashboard") : navigate('/signup')}</Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

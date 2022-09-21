import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Missing from './pages/Missing';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/offers' element={<Offers />} />
      <Route path='*' element={<Missing />} />
    </Routes>
    </>
  );
}

export default App;

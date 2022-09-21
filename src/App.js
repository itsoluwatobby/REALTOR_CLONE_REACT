import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
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
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

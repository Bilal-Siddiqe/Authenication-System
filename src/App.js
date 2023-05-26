import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import UnAuthrized from './components/UnAuthrized';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/' element={<SignIn />} />

      </Routes>
    </>
  );
}

export default App;

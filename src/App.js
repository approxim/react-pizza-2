import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;

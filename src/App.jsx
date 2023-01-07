import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DrawerMenu } from './components/DrawerMenu';
import { GlobalContextProvider } from './context/GlobalContextProvider';
import { Movie } from './pages/Movie';
import { Search } from './pages/Search';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;

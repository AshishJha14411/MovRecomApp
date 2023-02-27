import './App.css';
import Home from './components/Home';
import { GenreListProvider } from './context/GenreContext';
import { MovieListProvider } from './context/MovieContext';
import { VideoProvider } from './context/VideoContext';

function App() {

  return (
    <GenreListProvider>
      <MovieListProvider>
      <VideoProvider>
        <Home />
      </VideoProvider>
      </MovieListProvider>
    </GenreListProvider>
    );
}

export default App;

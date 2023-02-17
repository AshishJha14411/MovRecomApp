import './App.css';
import GenreCard from './components/GenreCard';
import { GenreListProvider } from './context/GenreContext';

function App() {
  return (
    <GenreListProvider>
      <GenreCard />
    </GenreListProvider>
    );
}

export default App;

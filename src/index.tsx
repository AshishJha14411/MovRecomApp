import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GenreListProvider } from './context/GenreContext';
import { MovieListProvider } from './context/MovieContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /* Wrapping the App component with Context and root router */
  <BrowserRouter>
    <GenreListProvider>
      <MovieListProvider>
        <App />
      </MovieListProvider>
    </GenreListProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

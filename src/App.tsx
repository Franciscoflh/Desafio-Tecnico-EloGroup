import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Routes } from './rotas';
import { GlobalStyle } from './styles/global_styles';

export function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
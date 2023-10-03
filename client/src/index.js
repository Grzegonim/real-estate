import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Container>
          <NavBar />
          <App />
          <Footer />
        </Container>
      </BrowserRouter>
  </React.StrictMode>
);

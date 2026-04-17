import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WaitlistProvider } from './context/WaitlistContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WaitlistProvider>
      <App />
    </WaitlistProvider>
  </StrictMode>,
);

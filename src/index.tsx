// import React from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import StoreProvider from './store/index.tsx';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

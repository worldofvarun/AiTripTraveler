import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AppProvider from "./context-api/AppContext.jsx";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
    queryCache: 0,
    
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AppProvider>
              <App />
          </AppProvider>
      </QueryClientProvider>

  </React.StrictMode>,
)

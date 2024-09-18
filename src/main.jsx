import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecipeProvider } from './Context/RecipeContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<RecipeProvider>
    <App />
    </RecipeProvider>
  </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import routes from "./routes/Route.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

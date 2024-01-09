import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import store from './store.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import MeditationApp from './Pages/App/MeditationApp.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/meditation",
    element: <MeditationApp></MeditationApp>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CategoriesPage from './components/CategoriesPage'
import NotFoundPage from './components/NotFoundPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/categories',
        element: <CategoriesPage />,
        errorElement: <NotFoundPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

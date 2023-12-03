import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Dashboard from './dashboard'
import ProductListContainer from './product-list/container'
import Layout from './layout'
import ProductGalleryContainer from './product-gallery/container'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: '/product-list',
    element: (
      <Layout>
        <ProductListContainer />
      </Layout>
    ),
  },
  {
    path: '/product-gallery',
    element: (
      <Layout>
        <ProductGalleryContainer />
      </Layout>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

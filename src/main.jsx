import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import './index.css'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root'
import ErrorPage from './error-page'
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact'
import EditContact, {
  action as editAction,
} from './routes/edit'
import DeleteContact, {
  action as deleteAction,
} from './routes/delete'
import Index from './routes/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route
        errorElement={<ErrorPage />}
      >
        <Route
          index={true}
          element={<Index />}
        ></Route>
        <Route
          path="/contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        ></Route>
        <Route
          path="/contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        ></Route>
        <Route
          path="/contacts/:contactId/delete"
          element={<DeleteContact />}
          action={deleteAction}
          errorElement={<div>Oops! There was an error.</div>}
        ></Route>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

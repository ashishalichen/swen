import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TopHeadlines from './components/TopHeadlines'
import Business from './components/Business'
import Entertainment from './components/Entertainment'
import Health from './components/Health'
import Science from './components/Science'
import Sports from './components/Sports'
import Technology from './components/Technology'
import Header from './components/Header'
import SearchResult from './components/SearchResult'


const appRouter = createBrowserRouter([{
  path: '/',
  element: (
    <>
      <Header />
      <Body />
    </>

  ),
  children: [
    {
      path: '/',
      element: <TopHeadlines />
    },
    {
      path: '/business',
      element: <Business />
    },
    {
      path: '/entertainment',
      element: <Entertainment />
    },
    {
      path: '/health',
      element: <Health />
    },
    {
      path: '/science',
      element: <Science />
    },
    {
      path: '/sports',
      element: <Sports />
    },
    {
      path: '/technology',
      element: <Technology />
    },
    {
      path: '/search',
      element: <SearchResult />
    }
  ]



}])


function App() {

  return (
    <Provider store={store}>

      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App

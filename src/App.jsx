import React from 'react'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import { NewsProvider } from './Context/News/NewsContext'
import { QuotesProvider } from './Context/Quotes/QuotesContext'


const App = () => {
  return (
   <NewsProvider>
   <Navbar />
   <QuotesProvider>
   <Home />
   </QuotesProvider>

   </NewsProvider>
  )
}

export default App

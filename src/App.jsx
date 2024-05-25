import { Card } from '@mui/material'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import CardSection from './components/CardSection/CardSection'
import CardTwo from './components/CardSection/CardTwo'
import RecipeSection from './components/RecipeSection/RecipeSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <CardSection />
      <CardTwo />
      <RecipeSection />
      <Footer />
    </>
  )
}

export default App

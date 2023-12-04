import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screen/Home'
import Service from './screen/Service'
import BuyPlan from './screen/BuyPlan'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/buyplan' element={<BuyPlan />} />

      </Routes>
    </Router>
  )
}

export default App

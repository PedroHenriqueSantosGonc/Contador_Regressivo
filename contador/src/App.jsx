import Title from './components/Title'
import Counter from './components/Counter'
import { Outlet } from 'react-router-dom'

import NewYear from './assets/newyear.jpg'

import useCountdown from './hooks/useCountDown'

import './App.css'

function App() {

  const [day, hour, min, sec] = useCountdown("Jan 1, 2027 00:00:00")


  return (
   <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Outlet  />
      </div>
   </div>
  )
}

export default App

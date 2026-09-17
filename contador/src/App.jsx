import { Outlet } from 'react-router-dom'

import { useContext } from 'react'

import { CountdownContext } from './context/CountdownContext'

import NewYear from './assets/newyear.jpg'

import useCountdown from './hooks/useCountDown'

import './App.css'

function App() {

  const {event} = useContext(CountdownContext)

  let eventImage = null

  if(event) eventImage = event.image

  const [day, hour, min, sec] = useCountdown("Jan 1, 2027 00:00:00")


  return (
   <div className="App" style={eventImage ? {backgroundImage: `url(${eventImage})`} : {backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Outlet  />
      </div>
   </div>
  )
}

export default App

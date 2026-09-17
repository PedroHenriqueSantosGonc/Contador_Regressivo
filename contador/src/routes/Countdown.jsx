import Title from '../components/Title'
import Counter from '../components/Counter'
import { Navigate } from 'react-router-dom'

import { useContext } from 'react'

import useCountdown from '../hooks/useCountDown'

import { CountdownContext } from '../context/CountdownContext'


const Countdown = () => {
    const {event} = useContext(CountdownContext)

    if(!event) return <Navigate to={'/'} />

    const eventTitle = event.title

    const eventColor = event.color

    const [day, hour, min, sec] = useCountdown(event.date)
    return (
        <>
            <Title title={eventTitle} eventColor={eventColor} />
            <div className="countdown-container">
                <Counter title='Dias' number={day} eventColor={eventColor} />
                <Counter title='Horas' number={hour} eventColor={eventColor} />
                <Counter title='Minutos' number={min} eventColor={eventColor} />
                <Counter title='Segundos' number={sec} eventColor={eventColor} />
            </div>
        </>
    )
}

export default Countdown
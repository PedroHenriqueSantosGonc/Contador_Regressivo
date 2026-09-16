import Title from '../components/Title'
import Counter from '../components/Counter'

import useCountdown from '../hooks/useCountDown'

const Countdown = () => {
    const [day, hour, min, sec] = useCountdown("Jan 1, 2027 00:00:00")
    return (
        <>
            <Title title='Contagem regressiva para 2027' />
            <div className="countdown-container">
                <Counter title='Dias' number={day} />
                <Counter title='Horas' number={hour} />
                <Counter title='Minutos' number={min} />
                <Counter title='Segundos' number={sec} />
            </div>
        </>
    )
}

export default Countdown
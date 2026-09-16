import { useEffect, useState } from "react"

const useCountdown = (date) => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [min, setMin] = useState()
    const [sec, setSec] = useState()

    useEffect(() => {

        const countdown = () => {

            const countDate = new Date(date).getTime()
            const nowDate = new Date().getTime()

            const interval = countDate - nowDate

            const second = 1000
            const minutes = second * 60
            const hour = minutes * 60
            const day = hour * 24

            const dayNumber = Math.floor(interval / day)
            const hourNumber = Math.floor((interval % day) / hour)
            const minuteNumber = Math.floor((interval % hour) / minutes)
            const secondNumber = Math.floor((interval % minutes) / second)

            setDay(dayNumber)
            setHour(hourNumber)
            setMin(minuteNumber)
            setSec(secondNumber)
        }

        countdown()

        const interval = setInterval(countdown, 1000)

        return () => clearInterval(interval)

    }, [date])

    return [day, hour, min, sec]
}

export default useCountdown
import React, {useEffect, useState} from 'react';

let Timer = () => {


    let [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    let hours: string| number = time.getHours()
    let minutes: string| number = time.getMinutes()
    let seconds: string| number = time.getSeconds()

    if (seconds<10){
        seconds = '0' + seconds
    }
    if (minutes<10){
        minutes = '0' + minutes
    }
    if (hours<10){
        hours = '0' + hours
    }

    return (
        <div>
            {hours}:
            {minutes}:
            {seconds}
        </div>
    )

}
export default Timer

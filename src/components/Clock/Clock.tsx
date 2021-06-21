import React, {useEffect, useState} from 'react';
import './Clock.css';

type ClockProps = {
    mode: 'analog' | 'digital'
}

let Clock = (props: ClockProps) => {

    let [time, setTime] = useState(new Date())

    const getTimeAsString = (num: number) => num < 10 ? '0' + num : num

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let hours: number = time.getHours()
    let minutes: number = time.getMinutes()
    let seconds: number = time.getSeconds()

    let view;

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    switch (props.mode) {
        case "analog":
            view = <div className={'clock'}>
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />
                </div>
            </div>
            break
        case "digital":
        default:
            view =
                <>
                    {getTimeAsString(hours)} :
                    {getTimeAsString(minutes)}:
                    {getTimeAsString(seconds)}
                </>
    }

    return <div>
        {view}
    </div>
}
export default Clock

import React, {useState} from 'react';


export function UncontrolledOnOff() {

    let [unOn, setUnOn] = useState(false)
    const onStyle = {
        cursor : "pointer",
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '3px',
        padding: '1px',
        backgroundColor: unOn ? 'green' : 'white'
    }
    const offStyle = {
        cursor : "pointer",
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '3px',
        padding: '1px',
        backgroundColor: unOn ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: unOn ? 'green' : 'red'
    }

    return (
        <div>
            <div
                onClick={()=> setUnOn(true) }
                 style={onStyle}>ON
            </div>
            <div
                onClick={()=> setUnOn(false) }
                style={offStyle}>OFF
            </div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}

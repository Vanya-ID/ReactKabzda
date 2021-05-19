import React, {useState} from "react";
import s from './UncontrolledRating.module.css'

export const UncontrolledRatingMemo = React.memo(UncontrolledRating)

 function UncontrolledRating() {
    let [value, setValue] = useState(0)
    return (
        <div className={s.rating}>
            <Star selected={value > 0} setValue={() => {
                setValue(1)
            }}/>
            <Star selected={value > 1} setValue={() => {
                setValue(2)
            }}/>
            <Star selected={value > 2} setValue={() => {
                setValue(3)
            }}/>
            <Star selected={value > 3} setValue={() => {
                setValue(4)
            }}/>
            <Star selected={value > 4} setValue={() => {
                setValue(5)
            }}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <div onClick={() => {
        props.setValue()
    }} className={props.selected ? s.starSelected : s.starUnSelected}/>

}

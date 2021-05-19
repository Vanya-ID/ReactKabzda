import React from "react";
import s from './Rating.module.css'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export const RatingMemo = React.memo(Rating)
export const StarMemo = React.memo(Star)

 function Rating(props: RatingPropsType) {


    return (
        <div className={s.rating2}>
            <StarMemo selected={props.value > 0} onClick={props.onClick} value={1}/>
            <StarMemo selected={props.value > 1} onClick={props.onClick} value={2}/>
            <StarMemo selected={props.value > 2} onClick={props.onClick} value={3}/>
            <StarMemo selected={props.value > 3} onClick={props.onClick} value={4}/>
            <StarMemo selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <div onClick={() => {
        props.onClick(props.value)
    }} className={props.selected ? s.starSelected : s.starUnSelected}/>

}







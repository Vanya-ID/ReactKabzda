import React, {useState} from "react";
import s from './UncontrolledAccordion.module.css'

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean

}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [toggle, setToggle] = useState(false)
    return (
        <div>
            <AccordionTitle onClick={() => setToggle(!toggle)} title={props.titleValue}/>
            {toggle && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() =>  props.onClick()}
            className={s.titleStyle}>{props.title}</h3>
    )

}

function AccordionBody() {
    return (
        <ul className={s.menuStyle}>
            <li>Menu1</li>
            <li>Menu2</li>
            <li>Menu3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
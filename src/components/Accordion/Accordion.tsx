import React from "react";
import s from "./Accordion.module.css";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
    accordionCollapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} accordionCollapsed={props.accordionCollapsed}
                            setAccordionCollapsed={props.setAccordionCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: (value: boolean) => void
    accordionCollapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }} className={s.titleStyle}>{props.title}</h3>
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

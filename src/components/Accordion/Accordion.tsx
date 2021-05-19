import React from "react";
import s from "./Accordion.module.css";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
    accordionCollapsed: boolean
    items: Array<ItemType>
    onClick: (value: any) => void
}

 function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitleMemo title={props.titleValue} accordionCollapsed={props.accordionCollapsed}
                            setAccordionCollapsed={props.setAccordionCollapsed}/>
            {!props.collapsed && <AccordionBodyMemo items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

export const AccordionMemo = React.memo(Accordion)
const AccordionTitleMemo = React.memo(AccordionTitle)
const AccordionBodyMemo = React.memo(AccordionBody)


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

export type AccordionBodyType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul className={s.menuStyle}>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    )
}

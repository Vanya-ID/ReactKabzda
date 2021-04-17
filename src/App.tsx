import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <UncontrolledOnOff />
            <OnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={'MENU'}/>
            <UncontrolledRating/>
        </div>
    )
}


export default App;
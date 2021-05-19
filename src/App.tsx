import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOffMemo} from "./components/OnOff/UncontrolledOnOff";
import {OnOffMemo} from './components/OnOff/OnOff';
import {RatingMemo, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRatingMemo} from "./components/Rating/UncontrolledRating";
import {AccordionMemo} from "./components/Accordion/Accordion";
import UncontrolledAccordionMemo from "./components/Accordion/UncontrolledAccordion";
import {SelectMemo} from "./components/Select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    const [value, setValue]= useState(2)

    return (
        <div className={'App'}>
            <UncontrolledOnOffMemo/>
            <OnOffMemo on={on} setOn={setOn}/>
            <RatingMemo value={ratingValue} onClick={setRatingValue}/>
            <AccordionMemo titleValue={'Menu'} collapsed={accordionCollapsed}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}
                       items={[
                           {title: "Andrey", value: 1},
                           {title: "Sasha", value: 2}
                       ]}
                       onClick={() => {
                           console.log("Click")
                       }}
            />
            <UncontrolledAccordionMemo titleValue={'MENU'}/>
            <UncontrolledRatingMemo/>
            <SelectMemo value={value}
                    onChange={setValue}
                    items={[
                {value: 1, title: "Minsk"},
                {value: 2, title: "Borisov"},
                {value: 3, title: "Piter"}
            ]}/>
        </div>
    )
}


export default App;
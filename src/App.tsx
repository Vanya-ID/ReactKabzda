import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {Select} from "./components/Select/Select";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(true)

    const [value, setValue]= useState(2)

    return (
        <div className={'App'}>
            <UncontrolledOnOff/>
            <OnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
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
            <UncontrolledAccordion titleValue={'MENU'}/>
            <UncontrolledRating/>
            <Select value={value}
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
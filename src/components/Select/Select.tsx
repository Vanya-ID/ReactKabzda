import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string
    value: any
}

type SelectPropstype = {
    value: number
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropstype) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentElement = e.key === 'ArrowDown' ?
                        props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
        setActive(false)
        }
    }

    return (
        <div
            tabIndex={0}
            className={s.select + ' ' + (active ? s.active : '')}
            onKeyDown={onKeyPress}
        >
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredItemValue(i.value)}
                        className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                        key={i.value}
                        onClick={() => onItemClick((i.value))}
                    >
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    )
}

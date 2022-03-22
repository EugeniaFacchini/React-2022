import { useState } from "react";

export interface CounterProps {
    readonly initialValue: number;
    readonly name: string;
    readonly callback: (value: number) => void;
}

export const CounterComponent: React.FunctionComponent<CounterProps> = (props) => {
    const { initialValue, name, callback } = props;
    //Stato
    const [value, setValue] = useState(initialValue);
    const clickHandler = (newValue: number) => {
        setValue(newValue);
        callback(newValue);
    };
    return <div className="counter">
        <div className="title">{name}</div>
        <div className="value">Value: {value}</div>
        <div className="wrapper">
            <button onClick={() => { clickHandler(value - 1); }} className="Button">DEC</button>

            <button onClick={() => { clickHandler(initialValue); }} className="Button">RESET</button>

            <button onClick={() => { clickHandler(value + 1); }} className="Button">INC</button>
        </div>
    </div>

}
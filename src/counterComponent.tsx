import { useState } from "react";
import { ButtonComponent } from "./buttonComponent";

export interface CounterProps {
    readonly initialValue: number;
    readonly name: string;
    readonly callback: (value: number) => void;
    readonly resetDisabled?: boolean;
}

export const CounterComponent: React.FunctionComponent<CounterProps> = (props) => {
    const { initialValue, name, callback, resetDisabled } = props;
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
            <ButtonComponent text="DEC" callback={() => clickHandler(value - 1)} >DEC</ButtonComponent>

            <ButtonComponent text="RESET" callback={() => clickHandler(initialValue)} disabled={resetDisabled} >RESET</ButtonComponent>

            <ButtonComponent text="INC" callback={() => clickHandler(value + 1)}> INC </ButtonComponent>
        </div>
    </div>

}
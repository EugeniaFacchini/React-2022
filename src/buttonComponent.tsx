import { text } from "stream/consumers";

export interface ButtonProps{
    readonly text?: string;
    readonly callback:()=>void;
    readonly disabled?:boolean;
}


export const ButtonComponent: React.FunctionComponent<ButtonProps>= (props) => {
    const {text, callback, disabled,children}=props;
    return<button className="coolButton" onClick={callback} disabled={disabled}>
        {children}
    </button>

}
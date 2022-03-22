import { text } from "stream/consumers";

export interface ButtonProps{
    readonly text: string;
    readonly callback:()=>void;
}


export const ButtonComponent: React.FunctionComponent<ButtonProps>= (props) => {
    const {text, callback}=props;
    return<button className="coolButton" onClick={callback}>
        {text}
    </button>

}
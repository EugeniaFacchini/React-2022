import React from "react";


/**
 * Interfaccia di tipo 3 (struttura dati)
 * che rappresenta le props del componente
 */
interface TestComponentProps {
    readonly messaggio: string;
    readonly numero?: number;
}

/**
 * Specifico l'interfaccia delle props nel generic del tipo del componente
 *                                                            |
 *                                                            v     */
export const TestComponent: React.FunctionComponent<TestComponentProps> = (props) => {
    const { messaggio, numero } = props;
    return <div className='testComponent'>
        Sono il testComponent!
        <div>Messaggio in input: {messaggio}, {numero}</div>
        <TestComponentSenzaTag />
    </div>;
};


export const TestComponentSenzaTag = () => {
    // return <React.Fragment>
    //     <div>div1</div>
    //     <div>div2</div>
    // </React.Fragment>;
    // Le due scritture sono equivalenti
    return <>
        <div>div1</div>
        <div>div2</div>
    </>;
};
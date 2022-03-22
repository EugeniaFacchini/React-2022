import './index.scss';
import _ from "lodash";

import ReactDOM from 'react-dom';
import { PostComponent, PostComponentProps, Post, PostStatsComponent, DateComponent } from './postComponents';
import { useState } from 'react';
import { CounterComponent } from './counterComponent';
import { ButtonComponent } from './buttonComponent';


const App: React.FunctionComponent = () => {

    const Post1: Post = { author: "Eugenia", content: "Questo è il primo post", title: "Post 1" };
    const Post2: Post = { author: "Eugenia", content: "Questo è il secondo post", title: "Post 2" };
    const Post3: Post = { author: "Eugenia", content: "Questo è il terzo post", title: "Post 3" };
    const Posts: Post[] = [Post1, Post2, Post3];

    const [date, setDate] = useState(new Date())

    const initialValue1 = 0;
    const initialValue2 = 100;

    const [temporalValue1, setTemporalValue1] = useState(initialValue1);
    const [temporalValue2, setTemporalValue2] = useState(initialValue2);

    return <div className='app'>
        <div className='wrapper'>
            <ButtonComponent text='Primo Bottone' callback={() => { console.log("OnClick primo bottone") }}></ButtonComponent>
            <ButtonComponent text='Secondo Bottone' callback={() => { alert("OnClick secondo bottone") }}></ButtonComponent>
        </div>

        <div>
            {

                _.map(Posts, (Post) => {
                    return <PostComponent post={Post} ></PostComponent>
                })
            }
        </div>
        <PostStatsComponent PostList={Posts}></PostStatsComponent>
        <div className='wrapper'>
            <CounterComponent
                name="Contatore 1"
                initialValue={initialValue1}
                callback={(value) => { console.log(value); setTemporalValue1(value); }}
            />

            <CounterComponent
                name="Contatore 2"
                initialValue={initialValue2}
                callback={(value) => { console.log(value); setTemporalValue2(value); }}
            />
        </div>
        <div className='wrapper'>
            <div className='showInfo'>Il valore del Contatore 1 è : {temporalValue1}</div>
            <div className='showInfo'>Il valore del Contatore 2 è : {temporalValue2}</div>
        </div>
        <div className='wrapper counter'>
            <DateComponent date={date}></DateComponent>
            <button onClick={() => {
                console.log("OnClick del Bottone");
                setDate(new Date());
            }} className="Button">Aggiorna Data</button>
        </div>
    </div>

};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


import './index.scss';
import _ from "lodash";

import ReactDOM from 'react-dom';
import { PostComponent, PostComponentProps, Post, PostStatsComponent, DateComponent } from './postComponents';
import { useState } from 'react';
import { CounterComponent } from './counterComponent';
import { ButtonComponent } from './buttonComponent';
import { Value } from 'sass';
import { FormComponent } from './postForm';


const App: React.FunctionComponent = () => {

    return <div className='app'>
        <FormComponent formCallback={()=>{}}></FormComponent>
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
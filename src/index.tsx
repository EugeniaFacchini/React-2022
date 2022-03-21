import './index.scss';
import _ from "lodash";

import ReactDOM from 'react-dom';
import { PostComponent, PostComponentProps} from './postComponents';


const App: React.FunctionComponent = () => {
    const Post1:PostComponentProps={author:"Eugenia", content:"Questo è il primo post", title: "Post 1"};
    const Post2:PostComponentProps={author:"Eugenia", content:"Questo è il secondo post", title: "Post 2"};
    const Post3:PostComponentProps={author:"Eugenia", content:"Questo è il terzo post", title: "Post 3"};
    const Posts: PostComponentProps[]= [Post1, Post2, Post3];
    return <div className='app'>
        {
            
            _.map(Posts, (value, index) => {
                return <PostComponent author={value.author} content={value.content} title= {value.title} key={index} ></PostComponent>
            })
            }

        </div>
        };

        ReactDOM.render(
        <App />,
        document.getElementById('root')
        );
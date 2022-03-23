import { useState } from "react";
import { ButtonComponent } from "./buttonComponent";
import { Post } from "./postComponents";

export interface formInterface {
    readonly formCallback: (post: Post) => void;
}

export const FormComponent: React.FunctionComponent<formInterface> = (props) => {
    const { formCallback } = props;
    const [post, setPost] = useState<Post>({ author: "", title: "", content: "" });

    return <div className="form">
        <div>
            <label className="label wrapper">Titolo
                <input type="text" className="input" onChange={(event) => {
                    setPost({
                        ...post,
                        title: event.target.value
                    });
                }}></input></label>
        </div>
        <div>
            <label className="label wrapper">Contenuto
                <textarea className="textarea" onChange={(event) => {
                    setPost({
                        ...post,
                        content: event.target.value
                    });
                }}></textarea></label>
        </div>
        <div>
            <label className="label wrapper">Autore
                <input type="text" className="input" onChange={(event) => {
                    setPost({
                        ...post,
                        author: event.target.value
                    });
                }}></input></label>
        </div>
        <div className="center">
            <ButtonComponent callback={() => {
                const newPost = { ...post };
                formCallback(newPost)
            }}>CREA POST</ButtonComponent>
        </div>
    </div>
}
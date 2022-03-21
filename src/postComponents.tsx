export interface PostComponentProps{
    readonly author:string;
    readonly title: string;
    readonly content: string;
}
 export const PostComponent: React.FunctionComponent<PostComponentProps> = (props) =>{
     const{author,title,content}= props;
     return <div className="post">
         <div className="title">Titolo: {title}</div>
         <div className="content">Contenuto: {content}</div>
         <div className="author">Autore: {author}</div>
     </div>
 }
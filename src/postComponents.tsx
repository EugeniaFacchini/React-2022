export interface Post{
    readonly author:string;
    readonly title: string;
    readonly content: string;
}

export interface PostComponentProps{

    readonly post:Post;
}

interface PostStatsProps{
    PostList: Post[];
}

export interface DateProps{
    readonly date: Date;
}

export const PostStatsComponent: React.FunctionComponent<PostStatsProps>= (props) =>{
    const {PostList}=props;
    return <div className="showInfo">Numero di Post Presenti: {PostList.length}</div>
}

 export const PostComponent: React.FunctionComponent<PostComponentProps> = (props) =>{
     const{author,title,content}= props.post;
     return <div className="post">
         <div className="title">Titolo: {title}</div>
         <div className="content">Contenuto: {content}</div>
         <div className="author">Autore: {author}</div>
     </div>
 }


 export const DateComponent: React.FunctionComponent <DateProps> = (props) =>{
     const currentDate= props.date.toString();
     console.log("[Date Component] execution()")
     return <div className="date">
         Data e ora Attuali: {currentDate}
     </div>
 }
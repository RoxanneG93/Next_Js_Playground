import { withRouter } from "next/router";
import axios from "axios";


// or you can extract any of the props that you need if you dont want the whole query
//({ id, comments})
const Post = (props) => (
    // console.log(props);
    <div>
        <h1>Comments for post number  #{props.id}</h1>
        {props.comments.map(comment => (
            <Comment {...comment} key={comment.id} />
        ))}
    </div>

);


const Comment = ({ email, body }) => (
    <div>
        <h5>{email}</h5>
        <p>{body}</p>
    </div>
);



// this passes the query to the post func component as props to display post data
Post.getInitialProps = async ({ query }) => {
    //console.log(query);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId${query.id}`);
    const { data } = res;
    //console.log(data[0]);
    return { ...query, comments: data };
}
export default withRouter(Post);
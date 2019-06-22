import { withRouter } from "next/router";

const Post = (props) => {
    console.log(props);
    //return <h1>Post page {props.id}</h1>
}


// this passes the query to the post func component as props to display post data
// Post.getInitialProps = async ({ query }) => {
//     //console.log(query);
//     return query;
// }
export default withRouter(Post);
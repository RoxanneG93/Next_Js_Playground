

import React, { Component } from 'react';
import Link from "next/Link";

import axios from 'axios';


// ===== Class based option =======
// export default class index extends Component {
//     constructor(props) {
//         super(props);
//     }


//     // componentDidMount() {
//     //     console.log("Fetching data");
//     // }
//     static async getInitialProps() {
//         console.log("Fetching data");
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Our Index Page!!!</h1>
//             </div>
//         )
//     }
// }


// ======= Functional Basesd Option ======
const Hello = ({ posts }) => (

    <div>

        <h1>Our Index Page!!!</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
                </li>
            ))}
        </ul>

    </div>
)

Hello.getInitialProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = res;
    console.log(data[0]);
    return { posts: data };
    //console.log("Fetching data 2.0");
}

export default Hello;
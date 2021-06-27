import React, { Component } from 'react'
import './Final_space.css';
class Final_space extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        const url = 'https://finalspaceapi.com/api/v0/character/';
        const res = await fetch(url);
        const posts = await res.json();
        this.setState({posts: posts})


    }

    render() {
        const {posts}=this.state;
        return (
            <div class="charcters">
                <h1>Final-Space characters</h1>
                {posts &&posts.length&& posts.map(post => <><div id={post.id}>{post.name}</div>
                <div id={post.id}>{post.gender}</div>
                <img src={post.img_url} alt={post.name}></img>
                </>)}
            </div>
        )
    }
}
export default Final_space
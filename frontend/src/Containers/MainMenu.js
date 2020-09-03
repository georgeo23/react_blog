import React, { Component } from 'react'
import SinglePost from '../Components/SinglePost'

class MainMenu extends React.Component {
    state = {posts:[{title:"Loading...",alias:""}]}
    componentDidMount() { 
        
    fetch("http://localhost:3000/posts").then(r=>r.json())
        .then((data) => this.setState({ posts: data }))
      .catch(console.warn);
    console.log(this.state.posts)
    }            
         

    render() {
        const allPosts = this.state.posts  
        return (
            <main>
                <h1>Welcome to the Anonymous Blog</h1>
                <h2>Post Previews</h2>
                {allPosts.map((post,idx)=><SinglePost key={idx} showBody={false} id={post.id} title={post.title} alias={post.alias}/>)}
            </main>
        )
    }
}
export default MainMenu;
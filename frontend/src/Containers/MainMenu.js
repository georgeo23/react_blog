import React, { Component } from 'react'
import SinglePost from '../Components/SinglePost'
import { NavLink } from "react-router-dom";

class MainMenu extends Component {
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

            <div className="gridContainer">
              {allPosts.map((post, idx) => (
                <NavLink key={idx}  to={`/posts/${post.id}`}>
                  <div className="gridItem">
                    <SinglePost
                      showBody={false}
                      title={post.title}
                      alias={post.alias}
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          </main>
        );
    }
}
export default MainMenu;
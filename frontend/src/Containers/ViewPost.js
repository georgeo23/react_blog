import React, { Component } from 'react';
import SinglePost from '../Components/SinglePost'
import { render } from 'react-dom';

class ViewPost extends React.Component{
    state = { post: [{ title: "Loading...", alias: "", body: "" }] }
    
    componentDidMount(id) {
        fetch(`http://localhost:3000/posts/${this.props.match.params.id}`).then(r=>r.json())
            .then(data => this.setState({ post: data }))
            .catch(console.warn)
    }


    render() {
        return (
          <main>
            <SinglePost
              showBody={true}
              title={this.state.post[0].title}
              alias={this.state.post[0].alias}
              body={this.state.post[0].body}
            />
          </main>
        );
    }
}
export default ViewPost
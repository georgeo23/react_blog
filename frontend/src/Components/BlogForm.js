import React, {Component} from 'react'


class BlogForm extends Component {

    state = {title:"",alias:"",body:""}
    
    submitForm = (e) => {
        e.preventDefault()
        const newPost = {
                title: this.state.title,
                alias: this.state.alias,
                body: this.state.body
            }
        const options = {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: { "Content-Type": "application/json" }
        }
        fetch('https://localhost:3000/posts/new', options)
        .then(r => r.json())
        .catch(console.warn)
        
    }
    
    handleChange = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    } 
 
    render(){
        return (
          <main>
            <form onSubmit={this.submitForm}>
              <input
                onChange={this.handleChange}
                required
                name="title"
                type="text"
                placeholder="Title"
                maxLength="30"
              ></input>

              <br />

              <input
                onChange={this.handleChange}
                required
                name="alias"
                type="text"
                placeholder="Alias"
                maxLength="30"
              ></input>

              <br />

              <input
                onChange={this.handleChange}
                required
                name="body"
                type="text"
                placeholder="Blog Text"
                maxLength="500"
              ></input>
              <br />
              <input type="submit" value="submit" />
            </form>
          </main>
        );
    }
}

export default BlogForm;
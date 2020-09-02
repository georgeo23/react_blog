import React from "react";
import "./styles/App.css";
import BlogForm from "./Components/BlogForm";
class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h1>Anonyous Blog</h1>
        <BlogForm />
      </>
    );
  }
}
export default App;

import React from "react";
import "./styles/App.css";
import BlogForm from "./Components/BlogForm";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import MainMenu from './Containers/MainMenu'
import SinglePost from './Components/SinglePost'
import ViewPost from "./Containers/ViewPost";
class App extends React.Component {
  state = {};
  render() {
    return (
      <>
      <NavBar />
        <Switch>
          <Route exact path='/' component={MainMenu} />
          <Route path='/newpost' component={BlogForm} />
          <Route path='/posts/:id' component={ViewPost} />
        </Switch>
        
      </>
    );
  }
}
export default App;

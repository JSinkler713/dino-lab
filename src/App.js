import './App.css';
import { Component } from 'react';
import Comment from './Comment';

class App extends Component {
  state = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Checkout out this body property",
    comments: ['First!', 'Great post', 'Hire this author now!'] 
  }

  render() {
    const post = {
      title: "Dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Checkout out this body property",
      comments: ['First!', 'Great post', 'Hire this author now!']
    }
    // map returns an array 
    const comments = post.comments.map((comment, index)=> (<Comment text={comment} key={index}/>))
 
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>by {post.author}</p>
        <p>{post.body}</p>
        <h3>Comments:</h3>
        <p>{post.comments[0]}</p>
        { comments }
      </div>
    );
  }
}

export default App;

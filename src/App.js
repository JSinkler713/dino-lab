import './App.css';
import { Component } from 'react';
import Comment from './Comment';

class App extends Component {
  state = {
    title: "Dinosaurs are awesome",
    author: "Stelthy Stegosaurus",
    body: "Checkout out this body property",
    comments: ['First!', 'Great post', 'Hire this author now!'] 
  }

  //method that will update 'body' state
  changeBody = ()=> {
    const userInput = prompt('give a new body')
    console.log(userInput)
    // update body state
    this.setState({ body: userInput })
  }
  addComment = ()=> {
    const newComment = prompt('give a new comment')
    console.log(newComment)
    
    // update body state
    this.setState({ comments: [...this.state.comments, newComment] })
  }

  render() {
    // map returns an array 
    const comments = this.state.comments.map((comment, index)=> (<Comment text={comment} key={index}/>))
 
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>by {this.state.author}</p>
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
        { comments }
        <button onClick={this.changeBody}>Change body</button>
        <button onClick={this.addComment}>Add Comment</button>

      </div>
    );
  }
}

export default App;

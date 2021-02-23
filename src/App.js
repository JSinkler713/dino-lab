import './App.css';
import Comment from './Comment';

function App() {
  // name and sotre variables before return statement
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Checkout out this body property",
    comments: ['First!', 'Great post', 'Hire this author now!']
  }
  // map returns an array 
  const comments = post.comments.map((comment, index)=> (<Comment text={comment} key={index}/>))
  // comments = [ <Comment text={post.comments[0]} />, <Comment text={post.comments[1]} />, <Comment text={post.comments[1]} />]

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <p>{post.comments[0]}</p>
      { comments }
    </div>
  );
}

export default App;

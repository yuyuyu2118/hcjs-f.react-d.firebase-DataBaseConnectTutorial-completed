import { useState, useEffect } from 'react';
import './App.css';
import { db } from "./firebase";
import { collection, getDocs, onSnapshot,addDoc } from "firebase/firestore";

function App() {
  const [posts,setPosts] = useState([]);
  const [input,setInput] = useState([]);

  useEffect(() => {
  //データ取得する
  const postData = collection(db, "posts");
  getDocs(postData).then((snapShot) => {
    setPosts(snapShot.docs.map((doc) => ({...doc.data()})))
  })
  onSnapshot(postData,(post) => {
    setPosts(post.docs.map((doc) => ({...doc.data()})))
  });
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(input.trim()){
      const myCollectionRef = collection(db, 'yourData');
      addDoc(myCollectionRef, { // addDocを使ってドキュメントを追加
        text: input,
      }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      }).catch((error) => {
        console.error("Error adding document: ", error);
      })

      setInput('');
    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter data"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {posts.map((post) => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

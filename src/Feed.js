import React,{useEffect, useState} from 'react';
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from './InputOptions';
import {Subscriptions,CalendarViewDay,EventNote} from "@mui/icons-material";
import Post from './Post';
import { db } from "./firebase";

import { collection, getDocs, setDoc, doc,serverTimestamp,query} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";


function Feed() {
  const user = useSelector(selectUser);
    const [input,setinput] = useState('');
    const [posts,setPosts] = useState([]);
    // const [postReverse,setPostReverse] = useState([]);
    const addPost = async (e) => {
        e.preventDefault();
        await setDoc(doc(db, "post", posts.length.toString()), {
          id:posts.length.toString(),
          name: user.displayName,
          description: user.email,
          message: input,
          photoURl:user.photoURL || "",
          timestamp:serverTimestamp(),
        });
        fetchPost()
    } 

    // collection(db, "post")
    const fetchPost = async () => {
       
      await getDocs(query(collection(db, "post")))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id, }));
                  var array = [];
                  array =newData.reverse();
                  
              setPosts(array);               
          });
     
  }

  useEffect(()=>{
    fetchPost()
  },[]);

 
  // useEffect(()=>{
  //   console.log("post", posts)
  //   var array = [];
  //   array = posts;

  // },[posts])


  
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon  />
                <form>
                    <input value={input} onChange={e => setinput(e.target.value)} type="text" />
                    <button onClick={addPost} type='submit'>Send</button> 
                </form>
            </div>
           <div className="feed_inputOptions">
            <InputOptions Icon ={ImageIcon} title='Photo' color="#70B5F9"/>
            <InputOptions Icon ={Subscriptions} title='Video' color="#E7A33E"/>
            <InputOptions Icon ={EventNote} title='Event' color="#C0CBCD"/>
            <InputOptions Icon ={CalendarViewDay} title='Write article' color="#7FC15E"/>
           </div>
        </div>
      {/* Posts */}
      <FlipMove>
      { posts.length>0 && posts.map((post, i) => (
        <Post 
        key={i}
        description={post.description}
        name={post.name}
        message={post.message}
        photoURL={post.photoURL}/>
      ))}
      </FlipMove>

      
    </div>
  );
}

export default Feed

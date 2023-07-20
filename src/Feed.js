import React,{useEffect, useState} from 'react';
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from './InputOptions';
import {Subscriptions,CalendarViewDay,EventNote} from "@mui/icons-material";
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import { collection, addDoc, getDocs } from "firebase/firestore";


function Feed() {
    const [input,setinput] = useState('');
    const [posts,setPosts] = useState([]);
     
    // useEffect(()  => {
    //  db.collection("post").onSnapshot(snapshot =>{
    //     setPosts(snapshot.docs.map(doc => (
    //         {
    //             id:doc.id,
    //             data:doc.data(),
    //         }
    //     )))
    //  });
    // },[]);

    // useEffect(() => {
    //   console.log(posts,"avinash");
    // },[posts]);


    // const sendPost = (e) => {
    //     e.preventDefault();

    //    db.collection('post').add({
    //     name:'Avinash Kumar',
    //     description:"hey there",
    //     message: input,
    //     photoUrl: "",
    //     //time according to location...we are using the server timestamp
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    //    });

        
    // };
    // Demo

    const fetchPost = async () => {
       
      await getDocs(collection(db, "post"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setPosts(newData);                
              // console.log(todos, newData);
          })
     
  }
  //demo2
  useEffect(()=>{
    fetchPost()
  },[])
    useEffect(()=>{
      console.log(posts)
    },[posts])

  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon  />
                <form>
                    <input value={input} onChange={e => setinput(e.target.value)} type="text" />
                    {/* <button onClick={sendPost} type='submit'>Send</button>  */}
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
      {posts.map(({id,data:{name,description,message,photoUrl}}) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}/>
      ))}

      
    </div>
  );
}

export default Feed

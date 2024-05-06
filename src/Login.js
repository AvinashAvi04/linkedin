import React, { useEffect, useState } from 'react'
import './Login.css';
import linkedinCover from "./linkedincover.jpg";
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfilePic] = useState("");
    //Using the dispatch hook
    const dispatch = useDispatch();
     useEffect(()=>{
        console.log(auth);
     },[])
    // const loginToApp = (e) => {
    //     e.preventDefault();

    //     auth.signInWithEmailAndPassword(email,password)
    //     .then(userAuth =>{
    //         dispatch(login({
    //             email: userAuth.user.email,
    //             uid:userAuth.user.uid,
    //             displayName:userAuth.user.displayName,
    //             photUrl:userAuth.user.photoURL,
    //         }))
            
    //     })
    // };
    const Register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth)=>{
                        updateProfile(auth.currentUser,{

                            displayName:name,
                            photoURL:profilePic,

                        })
                        .then(()=> {
                                        dispatch(login({
                                         email: userAuth.user.email,
                                         uid:userAuth.user.uid,
                                         displayName:name,
                                         photUrl:profilePic,
                                        })) ;
                                    });
                                })
                                .catch((error) => alert(error.message));
        }
        catch (error) {
            console.log(error.message);
            window.alert(error.message);
        }

    }
    
    const Login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            .then(userAuth =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photUrl:userAuth.user.photoURL,
                }))
                
            })
            .catch((error) => alert(error.message));
            // props.setUser(user);
            console.log(user);
            window.alert(user.user.email + "  Successfully logged in");
        }
        catch (error) {
            console.log(error.message);
            window.alert(error.message);
        }

    }
    

    // const register = async() => {
    //     if(!name){
    //         return alert('Please enter a full name');
    //     }
    //      const user= await createUserWithEmailAndPassword(email,password).then((userAuth)=>{
    //         userAuth.user.updateProfile({
    //             displayName:name,
    //             photoUrl:profilePic,
    //         })
    //         .then(()=> {
    //             dispatch(login({
    //              email: userAuth.user.email,
    //              uid:userAuth.user.uid,
    //              displayName:name,
    //              photUrl:profilePic,
    //             })) ;
    //         });
    //     }).catch((error) => alert(error.message));
    // };
  return (
    <div className="login">
        <img src={linkedinCover} alt="" />
      <form>
        <input  value={name} onChange={(e)=> setName(e.target.value)} placeholder="Full name(required if registering)" type="text" />
        <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder="profile pic URl(optional)" type="text" />
        <input value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="Email" type="email" />
        <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password"/>
        <button type="button" onClick={Login}>Sign In</button>
      </form>
      <p>Not a member?{" "}
        <span className="login_register" onClick={Register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login;

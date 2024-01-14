
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged,  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {  getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {getDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCM_YnOmfpUeMuxqhEROOVHmL57VKxl1HQ",
   authDomain: "mockproject-e167e.firebaseapp.com",
   projectId: "mockproject-e167e",
   storageBucket: "mockproject-e167e.appspot.com",
   messagingSenderId: "1048857444347",
   appId: "1:1048857444347:web:804627484e45401dc3955e",
   measurementId: "G-2G1Y735GPS"
 };

 
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

const auth = getAuth();
 const db= getFirestore(app);

const signOutElement=document.getElementById("signout");
signOutElement.addEventListener("click",()=>{
    signOut(auth)
    .then(()=>{
        console.log("Sign Out Successful.")
        location.reload();
    }).catch(error=>{
        console.log(error);
    })
})

 const signInForm=document.getElementById("signInForm");
 signInForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email= signInForm["emailwalain"].value;
    const password= signInForm["passwordwalain"].value;

    signInWithEmailAndPassword(auth, email, password)
    .then(cred=>{
        const modal=document.getElementById("staticBackdrop");
        signInForm.reset();
        const userId=cred.user;
        getDoc(doc(db,"users",userId.uid))
        .then(doc=>{
            if(doc.exists()){
                console.log(doc)
            }
            else{
                console.log("Error no doc exists for users collection")
            }
        })
        .catch(err=>{
            console.log(err);
        })
        
    .catch(error=>{
        console.log(error)
    })
       
       // console.log("User Signed In", cred);
    }).catch(error=>{
        console.log(error);
    })
 });
 


 onAuthStateChanged(auth,(user)=>{
    console.log("User State: ",user);
    
    if(user!==null){
   // window.location.replace(`../index.html?id=${user.uid}`);
    const name=document.getElementById("username");
    name.innerText=user.email.split("@",2)[0];
    }
    
 })

//const reactionPage=document.getElementsByClassName("reaction-here")
const reactionPage=document.getElementsByClassName("reaction-here")
 let currentUserUid = null;

 // Listen for authentication state changes
 const  unsubscribe =  onAuthStateChanged(auth, (user) => {
   if (user) {
     // User is signed in
     currentUserUid = user.uid;
      reactionPage.addEventListener("click",window.location.href=`../movie-review.html?id=${currentUserUid}`)
     
   } else {
     // User is signed out
     currentUserUid = null;
   }
 });


 

 // Function to get the current user's UID
 const getCurrentUserUid = () => {
   return  currentUserUid;
 };
 



//const docRef= collection(db,"ToWatchList");
//getDocs(docRef)
//.then(snapshot=>{
   // let movies=[];
    //snapshot.forEach(snap=>{
      //  movies.push({...snap.data(),id:snap.id})
    //})
    //console.log(movies);
//})
//.catch(error=>{
  //  console.log(error);
//})
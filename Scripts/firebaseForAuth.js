import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {  getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
 const db=getFirestore();
const auth = getAuth();


const signUpForm=document.getElementById("signUpForm");

  const email=signUpForm["emailwala"].value;
  const password=signUpForm["passwordwala"].value;

const buttonSubmit=document.querySelector(".go-on");


export async function userCreater(){

try{
  const email=signUpForm["emailwala"].value;
  const password=signUpForm["passwordwala"].value;
  
  const userCredential=await createUserWithEmailAndPassword(auth,email,password);
 
  const userInfo=userCredential.user;
  const user_Id=userInfo.uid;

  


  await setDoc(doc(db,"users",user_Id),{
    userId:user_Id,
    email:email,
    password:password
  })

  
}
catch(error){
  console.log(error)
}}
if(signUpForm!==null){
signUpForm.addEventListener("submit",(e)=>{
  e.preventDefault();
 
})

signUpForm.addEventListener("submit",userCreater)
}



 

  
  
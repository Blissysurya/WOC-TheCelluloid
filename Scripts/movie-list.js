  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import {getFirestore,collection, getDocs,onSnapshot, addDoc, doc, setDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function URL(){
    const urlquery=new URLSearchParams(window.location.search);
    const Id =urlquery.get("Id");
    return Id;
}






const searchBar=document.getElementById("colFormLabel");
searchBar.addEventListener("keyup", function search_results(){
    const searchValue=searchBar.value;
    fetch("https://api.themoviedb.org/3/search/movie?"+"query="+searchValue+"&api_key=5013eb84105d14670f2ab2198877f9a3" || "https://api.themoviedb.org/3/search/tv?"+"query="+searchValue+"&api_key=5013eb84105d14670f2ab2198877f9a3" )
    .then(input=>{
        return input.json();
    })
    .then(data=>{
        searchAnswer(data.results)
    })
    .catch(error=>{
        console.log(error);
    })
})
 const myBoxDiv=document.querySelector(".search_box");
const myListDiv=document.getElementById("list");
 function searchAnswer(data){
   /*myReqDiv.innerHTML="";*/
   myBoxDiv.innerHTML="";
   data.forEach(dataunit=>{
       
       const smallAnch=document.createElement("a");
       const smallImage=document.createElement("img");
       const smallDiv=document.createElement("div");
       smallDiv.innerHTML=`
       <h6>${dataunit.original_title}</h6>
       `;
       
       
       
       
       smallImage.classList.add("small-image");
       smallAnch.classList.add("clickable");
       
       smallImage.src="https://image.tmdb.org/t/p/original/"+dataunit.poster_path;
       smallAnch.addEventListener("click",function(){
         //   const myDiv2=document.createElement("div");
		   // const myImage2=document.createElement("img");
		    //const myTitle2=document.createElement("h3");

		  //  myImage2.classList="card-image2";
            //myDiv2.classList="list-element";
		    //myImage2.src="https://image.tmdb.org/t/p/original/"+dataunit.poster_path;
		    //myTitle2.innerText=dataunit.original_name || dataunit.original_title;


            //Firebase
            let movieId=dataunit.id;
            
            myList=[]
            addDoc(collection(db,URL()),{
                name : dataunit.original_title ||  dataunit.original_name
            })
            .then(snap=>{
                console.log(snap);
            })
            .catch(error=>{
                console.log(error);
            })
            
            
        })


		   // myDiv2.appendChild(myImage2);
		    //myDiv2.appendChild(myTitle2);

		    //myListDiv.appendChild(myDiv2);
       
       
       
       smallAnch.appendChild(smallDiv);
       smallAnch.appendChild(smallImage);

       myBoxDiv.appendChild(smallAnch);
        })}

       function hideSearch(){
           if (document.querySelector("#colFormLabel").value == 0) {
               document.querySelector(".search_box").style.visibility = "hidden";
           }

       }
hideSearch();
document.querySelector("#colFormLabel").addEventListener("keyup",function(){
    if(document.querySelector("#colFormLabel").value!=0){
        document.querySelector(".search_box").style.visibility="visible";
    }
    else{
        document.querySelector(".search_box").style.visibility="hidden"
    }
})
let myList=[];
/*
try {
    const docSnap = await getDoc(doc(db,"users",URL()));
    if(docSnap.exists()) {
        myList=[];
        docSnap.data().forEach(doc=>{
        const docSnap= doc.data();
                        
        myList.push(docSnap)
        console.log(docSnap.data());
        console.log(myList);
        showList(myList);})
        
    } else {
        console.log("Document does not exist")
    }

} catch(error) {
    console.log(error)
}


    




const getMovieList =async()=>{
    try{
        
        //const docSnaps=await getDocs(collection(db,"ToWatchList"));
        await onSnapshot(doc(db,"users",URL()),docSnaps=>{
            
            docSnaps.forEach(doc=>{
                const docSnap= doc.data();
                            
                            myList.push(docSnap)
            })
            console.log(myList);
            showList(myList); 
        })
        
    }
    catch(error){
        console.log(error)
    }
}
getMovieList();
function showList(items){
    const movieList=document.getElementById("movie-list-items");
    movieList.innerHTML="";
    items.forEach(item=>{
       
        const movie=`
        <li class="list-item">
            <div class=title>
            ${item.user}
            </div>
        </li>
        `;
        movieList.innerHTML+=movie;

    }
    )
}*/
const MovieList =async()=>{
    try{
        
        //const docSnaps=await getDocs(collection(db,"ToWatchList"));
        await onSnapshot(collection(db,URL()),docSnaps=>{
            
            docSnaps.forEach(doc=>{
                const docSnap= doc.data();
                            
                 myList.push(docSnap)
            })
            console.log(myList);
            showMovies(myList); 
        })
        
    }
    catch(error){
        console.log(error)
    }
}
MovieList();
const showMovies= function(movieList){
    
    const listBox=document.getElementById("list");
    listBox.innerHTML="";
    movieList.forEach(movie=>{
        const listItem=document.createElement("li");
        listItem.innerHTML=`<h6>${movie.name}</h6>`
        listBox.append(listItem);
    }

    )
}
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
 const myBoxDiv=document.querySelector(".search_box2");
const myListDiv=document.getElementById("list2");
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
       //smallAnch.addEventListener("click",function(){
         //   const myDiv2=document.createElement("div");
		   // const myImage2=document.createElement("img");
		    //const myTitle2=document.createElement("h3");

		  //  myImage2.classList="card-image2";
            //myDiv2.classList="list-element";
		    //myImage2.src="https://image.tmdb.org/t/p/original/"+dataunit.poster_path;
		    //myTitle2.innerText=dataunit.original_name || dataunit.original_title;


            //Firebase
          
          
            
        //})


		   // myDiv2.appendChild(myImage2);
		    //myDiv2.appendChild(myTitle2);

		    //myListDiv.appendChild(myDiv2);
       
       
       
       smallAnch.appendChild(smallDiv);
       smallAnch.appendChild(smallImage);

       myBoxDiv.appendChild(smallAnch);
        })}

       function hideSearch(){
           if (document.querySelector("#colFormLabel").value == 0) {
               document.querySelector(".search_box2").style.visibility = "hidden";
           }

       }
hideSearch();
document.querySelector("#colFormLabel").addEventListener("keyup",function(){
    if(document.querySelector("#colFormLabel").value!=0){
        document.querySelector(".search_box2").style.visibility="visible";
    }
    else{
        document.querySelector(".search_box2").style.visibility="hidden"
    }
})
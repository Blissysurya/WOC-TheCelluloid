
let mydata=fetch("https://api.themoviedb.org/3/trending/all/day?api_key=5013eb84105d14670f2ab2198877f9a3")
.then(function(input){
    return input.json();
}).then(function(data){
	renderCards(data.results);
}).catch(function(error){
    console.log(error);
});
const myCards=document.querySelector("#cards-container");
;


//Star wala function
let stars = 
	document.getElementsByClassName("star-card");
let output = 
	document.getElementById("output");


function gfg(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}


function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}
function renderCards(data){
    data.forEach(dataunit=>{
        const myDiv=document.createElement("div");
        const myImage=document.createElement("img");
        const myTitle=document.createElement("h3");
		/*const ratingStars=document.createElement("div");*/
        

        myDiv.classList="card";
        myImage.classList="card-image";
		/*ratingStars.classList="star-card";*/
        

        myImage.src="https://image.tmdb.org/t/p/original/"+dataunit.poster_path;
        myTitle.innerText=dataunit.original_title || dataunit.original_name;
		/*ratingStars.innerHTML=
			<div>
				<span onclick="gfg(1)"
					class="star">★
				</span><span onclick="gfg(2)"
					class="star">★
				</span><span onclick="gfg(3)"
					class="star">★
				</span><span onclick="gfg(4)"
					class="star">★
				</span><span onclick="gfg(5)"
					class="star">★
				</span><h4 id="output">
					Rating is: 0/5
				</h4>
			</div>*/
        
        myDiv.appendChild(myImage);
        myDiv.appendChild(myTitle);
		/*myDiv.appendChild(ratingStars);*/
        
        myCards.appendChild(myDiv);
		
	});
};
const myTVCards=document.querySelector(".tv-cards");
function renderTVShows(data){
	data.forEach(dataunit=>{
		const myDiv2=document.createElement("div");
		const myImage2=document.createElement("img");
		const myTitle2=document.createElement("h3");

		myImage2.classList="card-image2";

		myImage2.src="https://image.tmdb.org/t/p/original/"+dataunit.poster_path;
		myTitle2.innerText=dataunit.original_name || dataunit.original_title;

		myDiv2.appendChild(myImage2);
		myDiv2.appendChild(myTitle2);

		myTVCards.appendChild(myDiv2);

	})
};

fetch("https://api.themoviedb.org/3/tv/popular?api_key=5013eb84105d14670f2ab2198877f9a3")
.then(function(input){
    return input.json();
}).then(function(data){
    renderTVShows(data.results);
}).catch(function(error){
    console.log(error);
});
const myTopMovies=document.querySelector(".movie-cards");
function renderTopRatedMovies(data){
	data.forEach(dataunit=>{
		const myDiv3=document.createElement("div");
		const myImage3=document.createElement("img");
		const myTitle3=document.createElement("h3");

		myImage3.classList="card-image3";

		myImage3.src="https://image.tmdb.org/t/p/original/"+dataunit.poster_path;
		myTitle3.innerText=dataunit.original_title || dataunit.original_name;

		myDiv3.appendChild(myImage3);
		myDiv3.appendChild(myTitle3);

		myTopMovies.appendChild(myDiv3);

	})
};

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5013eb84105d14670f2ab2198877f9a3")
.then(function(input){
    return input.json();
}).then(function(data){
    renderTopRatedMovies(data.results);
}).catch(function(error){
    console.log(error);
});


document.getElementById("search_here").addEventListener("click",function search_results(){
	
let imp=document.querySelector("#type_something").value;
fetch("https://api.themoviedb.org/3/search/movie?"+"query="+imp+"&api_key=5013eb84105d14670f2ab2198877f9a3")
.then(function(input){
	return input.json();
}).then(data=>{
	searchAnswer(data.results);
}).catch(error=>{
	console.log(error);
})})

 const myBoxDiv=document.querySelector(".search_box");

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
		smallAnch.href=`cards.html?title=${dataunit.original_title || dataunit.original_name}&image=https://image.tmdb.org/t/p/original/${dataunit.poster_path}&para=${dataunit.overview}`
		
		
		smallAnch.appendChild(smallDiv);
		smallAnch.appendChild(smallImage);

		myBoxDiv.appendChild(smallAnch);
	})
	/*let myArray=document.querySelectorAll(".search_box a");
	myArray.forEach(function(datapiece){
		datapiece.addEventListener("click",function(){
		const myNewDiv2=document.createElement("div");
		const myNewImg=document.createElement("img");
		const headingDiv=document.createElement("div");
		const myNewDiv3=document.createElement("div");

		myNewImg.src=datapiece.img.src;
		myNewDiv3.innerHTML=`
		<p>${datapiece}</p>
		`;
		headingDiv.innerHTML=`
		<h3>${datapiece.original_title}</h3>
		`;
		myNewDiv2.appendChild(myNewImg);
		myNewDiv2.appendChild(headingDiv);
		myNewDiv2.appendChild(myNewDiv3);

		myReqDiv.appendChild(myNewDiv2);

	})}
	)*/
}
function hideSearch(){
	if(document.querySelector("#type_something").value==0){
		document.querySelector(".search_box").style.visibility="hidden";
	}
	
}
hideSearch();
document.querySelector("#search_here").addEventListener("click",function(){
	if(document.querySelector("#type_something").value!=0){
		document.querySelector(".search_box").style.visibility="visible";
	}
	else{
		document.querySelector(".search_box").style.visibility="hidden"
	}
})


let menu=document.getElementById("myMenu");
function toggleMenu(){
  menu.classList.toggle("open-menu");
}
document.getElementById("person").addEventListener("click",
toggleMenu
)












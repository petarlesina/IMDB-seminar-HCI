 
import React from 'react'
import { Link } from "gatsby"
import './jukica.scss'
import { useEffect } from "react"
 
 
function ok(){
    document.getElementById('tonyButton').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "flex";
    });
 
    document.querySelector('.close').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "none";
	});
	
	document.querySelector('.tonyButtonSubmit').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = "none";
    });
}
 
 
const Tony = () => {
 
    useEffect(() => {
        ok();
      }, []);
 
    return (
 
        <div>
        <header>
 
</header>
 
 
 
<section class="hero">
	<div class="hero-content">
		<h1>Let's create a modal</h1>
		<h3>Sign Up Now</h3>
		<a href="#" id="tonyButton" class="tonyButton">Click Me</a>
	</div>
</section>
 
 
 
 
 
<div class="bg-modal">
	<div class="modal-contents">
 
		<div class="close">+</div>
		<img src="slika.jpg" alt=""></img>
 
		<form action="">
			<input type="text" placeholder="Name" class="tonyInputTitle"></input>
			{/* <input type="email" placeholder="E-Mail" class="tonyInputText"></input> */}
			<textarea class="tonyInputText" rows="2" cols="10" placeholder="Write some text here"></textarea>
			{/* <a href="#" class="tonyButtonSubmit">Submit</a> */}
		</form>
 
	</div>
</div>
 
 
</div>
 
    )
 
}
 
export default Tony
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import { useEffect } from "react"


function ok(){
    document.getElementById('buttonPopUp').addEventListener("click", function() {
        document.querySelector("#popupModal").style.display = "flex";
    });
 
    document.querySelector("#closeButton").addEventListener("click", function() {
        document.querySelector("#popupModal").style.display = "none";
	});
	
	document.querySelector("#buttonCancelPopUp").addEventListener("click", function() {
        document.querySelector("#popupModal").style.display = "none";
    });


    document.querySelector("#buttonSubmitPopUp").addEventListener("click", function() {
        document.querySelector("#popupModal").style.display = "none";
    });
    

}



const BlogPage = () => {


    useEffect(() => {
        ok();
      }, []);

    const data = useStaticQuery(graphql`
         query {
             allMarkdownRemark {
                 edges {
                     node {
                         frontmatter {
                             title
                             date
                         }
                         fields {
                             slug
                         }
                     }
                 }
             }
         }
     `)

    

    return (
        <div>
            <Layout>
            <SEO title="Blog" keywords="Blog" />
            <div className={blogStyles.mainContainer}>
            <h1 className={blogStyles.title}>Blog</h1>
            <a href="#" id="buttonPopUp" className={blogStyles.buttonPopUp}>+ Add new post</a>
            <ol className={blogStyles.posts}>

                {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <li className={blogStyles.singlePost}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>
            </div>



            
 
<div id="popupModal" class={blogStyles.bgModal}>
	<div class={blogStyles.modalContents}>
 
		
		<div id="closeButton" class={blogStyles.close}>+</div>
		<img src="slika.jpg" alt=""></img>
 
		<form action="">
			<input type="text" placeholder="Title" class={blogStyles.inputTitle}></input>
			<textarea class={blogStyles.inputText} rows="4" cols="10" placeholder="Write some text here"></textarea>
            <div class={blogStyles.popupButtonsContainer}>
			<a href="#" id="buttonCancelPopUp" class={blogStyles.buttonCancelPopUp}>Cancel</a>
			<a href="#" id="buttonSubmitPopUp" class={blogStyles.buttonSubmitPopUp}>Submit</a>
            </div>
		</form>
 
	</div>
</div>


            </Layout>
        </div>
    )

}

export default BlogPage
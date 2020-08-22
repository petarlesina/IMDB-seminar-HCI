import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import  './signin.css'

const SignInPage = () => {
    return (
        <div>
            <Layout>
            <SEO title="Login" keywords="Login" /> 
            {/* <h1>prijava</h1> */}
            <form class="box" action="" method="post">
                <h1>Login</h1>
                <input type="text" name="" placeholder="Username"></input>
                <input type="password" name="" placeholder="Password"></input>
                <input type="button" name="" value="Log in"></input>

            </form>
            </Layout>
        </div>


    )

}

export default SignInPage
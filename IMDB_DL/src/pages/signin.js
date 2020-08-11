import React from 'react'

import Layout from '../components/layout'
import style from './signin.css'

const SignInPage = () => {
    return (
        <div>
            <Layout>
            {/* <h1>prijava</h1> */}
            <form class="box" action="" method="post">
                <h1>Login</h1>
                <input type="text" name="" placeholder="Username"></input>
                <input type="password" name="" placeholder="Password"></input>
                <input type="submit" name="" value="Log in"></input>

            </form>
            </Layout>
        </div>


    )

}

export default SignInPage
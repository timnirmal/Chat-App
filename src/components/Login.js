import React from "react"
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
//import "firebase/app"

//import initializeApp from 'firebase/app'
//import app from 'firebase'
//import firebase from "firebase/compat";

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>DAPP</h2>

                <div
                    className="login-button google"
                    /*onClick={() => {
                        const provider = new firebase.auth.GoogleAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        firebase.auth().signInWithRedirect(provider);}
                        //app.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
                        }*/
                >
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br/><br/>
                <div
                    className="login-button facebook"
                    //onClick={() => app.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
}

export default Login;
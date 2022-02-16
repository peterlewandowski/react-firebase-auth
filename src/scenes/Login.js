/* Can also be written as:
export default Login = () => <h1>Login</h1>
*/

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

export default function Login({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider(); //needs to be instantiated because it's a CLASS
  const auth = getAuth(app);

  useEffect(() => {
    const localUser = localStorage.getItem('displayName')
    const localAvatar = localStorage.getItem('avatar')

    console.log('localUser from localStorage ', localUser)

    if(localUser) setUser({...user, displayName: localUser, photo: localAvatar})
  })

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch(alert);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
      localStorage.setItem('displayName', result.user.displayName);
      localStorage.setItem('avatar', result.user.photoURL);
      localStorage.setItem('uid', result.user.uid);
      
      console.log('This is my result', result.user.displayName);
      navigate("/");
    })
    .catch(alert);
  };

console.log('Here is my user from my parent App component', user)

  return (
    <>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{ backgroundColor: "black", color: "white", border: "none" }}
      >
        Sign in with Google
      </button>
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

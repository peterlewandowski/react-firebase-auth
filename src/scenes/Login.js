/* Can also be written as:

export default Login = () => <h1>Login</h1>

*/

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>
        Not a user? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
}


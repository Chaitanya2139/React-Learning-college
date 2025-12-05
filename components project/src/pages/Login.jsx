import React from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        login (username);
        navigate("/dashboard");
    };
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Enter your name' value={username}  onChange={(e) => setUsername(e.target.value)} />

    </div>
  )
}

export default Login

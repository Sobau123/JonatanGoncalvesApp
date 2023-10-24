import React, { useState } from 'react';
import "../App.css"
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // O usuário está autenticado com sucesso
        } catch (error) {
            // Lidar com erros de autenticação
            console.error(error);
        }
    }

    return (
        <div className='LoginFlex'>
            <h2>Login:</h2>
            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
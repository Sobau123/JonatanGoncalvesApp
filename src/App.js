import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase/firebase';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './components/Login.jsx';
import Rotas from './routes/Routes.jsx';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // O usuário está autenticado
        setUser(authUser);
      } else {
        // O usuário não está autenticado
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <header>
        {/* Se o usuário estiver autenticado, mostre o conteúdo do aplicativo */}
        {user ? (
          <div>
            <Rotas />
          </div>
        ) : (
          // Se o usuário não estiver autenticado, mostre o componente de login
          <Login />
        )}
      </header>
    </div>
  );
}

export default App;
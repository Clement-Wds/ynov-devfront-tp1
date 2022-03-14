import React, {useState} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";

const Index = () => {

  const [user, setUser] = useState({});

    const submitLogin = (e) => {
      e.preventDefault();
      console.log(user);
      userService.login(user).then(data => console.log(data)).catch(err => console.log(err));
    }

  return (
    <div>
        <TitlePage title="Se connecter" />

        <form className="form" onSubmit={(e) => submitLogin(e)}>

            <div className="form-group">
                <Input 
                  classes="form-input" 
                  label="EMAIL" 
                  type="email" 
                  name="email" 
                  id="input-email" 
                  required={true} 
                  placeholder="Email" 
                  onChange={ (e) => setUser({...user, email:e.target.value})}
                />
                <Input 
                  classes="form-input" 
                  label="MOT DE PASSE" 
                  type="password" 
                  name="password" 
                  id="input-password" 
                  required={true}
                  placeholder="Mot de passe" 
                  onChange={ (e) => setUser({...user, password:e.target.value})}
                />

                <Button type="submit" classes="button button-primary" content="Se connecter" />
                <Link href="/register">
                    <a>S'inscrire</a>
                </Link>
            </div>
            
        </form>

    </div>
  );
}

export default Index;

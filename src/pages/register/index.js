import React from 'react';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";
import userService from "/src/services/user.service";

const Index = () => {
  const [user, setUser] = useState({});

  const submitRegister = (e) => {
    e.preventDefault();
    console.log(user);
    userService.register(user)
      .then(
        (data) => {
          console.log(data),
          localStorage.setItem('JWT', data.jwt);
        } 
      )
      .catch(
          (err) => {
            console.log(err);
        }
      );
  }

  return (
    <div>
        <TitlePage title="S'Inscrire" />

        <form className="form" onSubmit={(e) => submitRegister(e)}>

            <div className="form-group">
                <Input 
                  classes="form-input" 
                  label="USERNAME" 
                  type="text" 
                  name="username" 
                  id="input-username" 
                  required={true} 
                  placeholder="Username" 
                  onChange={(e) => setUser({...user, username:e.target.value})} 
                />
                <Input 
                  classes="form-input" 
                  label="EMAIL"
                  type="email" 
                  name="email" 
                  id="input-email" 
                  required={true}
                  placeholder="Email" 
                  onChange={(e) => setUser({...user, email:e.target.value})} 
                />
                <Input 
                  classes="form-input" 
                  label="MOT DE PASSE" 
                  type="password" 
                  name="password" 
                  id="input-password" 
                  required={true}
                  placeholder="Mot de passe" 
                  onChange={(e) => setUser({...user, password:e.target.value})} 
                />

                <Button type="submit" classes="button button-primary" content="S'Inscrire" />
                <Link href="/login">
                    <a>Se connecter</a>
                </Link>
            </div>

        </form>

    </div>
  );
}

export default Index;

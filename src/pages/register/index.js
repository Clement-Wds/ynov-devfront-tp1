import React from 'react';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";
import userService from "/src/services/user.service";
import Modal from "/src/components/Modal";

const Index = () => {
  const router = useRouter()
  const [user, setUser] = useState({});

    const submitRegister = (e) => {
      e.preventDefault();
      userService.register(user)
        .then(
          (data) => {
            console.log(data);
            localStorage.setItem('jwt', data.jwt);
            router.push('/profil')
          }
        )
        .catch(
          (err) => {
            console.log(err)
          });
    }

  return (
    <div>

      <Modal title="Titre modal">
        <p>Text 1</p>
        <p>Text 2</p>
      </Modal>
      
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

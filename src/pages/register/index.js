import React from 'react';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";

const Index = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const submitRegister = (e) => {
    e.PreventDefault();
    console.log(user);
  }

  return (
    <div>
        <TitlePage title="S'Inscrire" />

        <form className="form" onSubmit={(e) => submitRegister(e)}>

            <div className="form-group">
                <Input classes="form-input" label="PRENOM" type="text" name="firstname" id="input-firstname" required="false" placeholder="Prénom" onChange={(e) => setUser({...user, firstname:e.target.value})} />
                <Input classes="form-input" label="NOM" type="text" name="lastname" id="input-lastname" required="false" placeholder="Nom" onChange={(e) => setUser({...user, lastname:e.target.value})} />
                <Input classes="form-input" label="EMAIL" type="email" name="email" id="input-email" required="true" placeholder="Email" onChange={(e) => setUser({...user, email:e.target.value})} />
                <Input classes="form-input" label="MOT DE PASSE" type="password" name="password" id="input-password" required="true" placeholder="Mot de passe" onChange={(e) => setUser({...user, password:e.target.value})} />

                <Button type="submit" classes="button button-primary" click={(e) => console.log(e)} content="S'Inscrire" />
                <Link href="/login">
                    <a>Se connecter</a>
                </Link>
            </div>

        </form>

    </div>
  );
}

export default Index;

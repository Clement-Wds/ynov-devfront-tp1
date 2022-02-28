import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";

const Index = () => {

  const submitRegister = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("send");
  }

  return (
    <div>
        <TitlePage title="S'Inscrire" />

        <form className="form" onSubmit={(e) => submitRegister(e)}>

            <div className="form-group">
                <Input classes="form-input" type="text" name="firstname" id="input-firstname" required="false" placeholder="Prénom" onChange={() => console.log('.')} />
                <Input classes="form-input" type="text" name="lastname" id="input-lastname" required="false" placeholder="Nom" onChange={() => console.log('.')} />
                <Input classes="form-input" type="email" name="email" id="input-email" required="true" placeholder="Email" onChange={() => console.log('.')} />
                <Input classes="form-input" type="password" name="password" id="input-password" required="true" placeholder="Mot de passe" onChange={() => console.log('.')} />

                <Button type="submit" classes="button button-primary" click={() => console.log('.')} content="S'Inscrire" />
                <Link href="/login">
                    <a>Se connecter</a>
                </Link>
            </div>

        </form>

    </div>
  );
}

export default Index;

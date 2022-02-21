import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";

const Index = () => {

  return (
    <div>
        <TitlePage title="S'Inscrire" />

        <form action="" method="">

            <Input classes="form-input" type="text" name="firstname" id="input-firstname" required="false" placeholder="Prénom" onChange="" />
            <Input classes="form-input" type="text" name="lastname" id="input-lastname" required="false" placeholder="Nom" onChange="" />
            <Input classes="form-input" type="email" name="email" id="input-email" required="true" placeholder="Email" onChange="" />
            <Input classes="form-input" type="password" name="password" id="input-password" required="true" placeholder="Mot de passe" onChange="" />

            <Button type="submit" classes="button button-primary" click="" content="S'Inscrire" />
            <Link href="/login">
                <a>Se connecter</a>
            </Link>

        </form>

    </div>
  );
}

export default Index;

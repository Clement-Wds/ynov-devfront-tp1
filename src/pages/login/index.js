import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TitlePage from "/src/components/TitlePage";
import Input from "/src/components/Input";
import Button from "/src/components/Button";

const Index = () => {

  return (
    <div>
        <TitlePage title="Se connecter" />

        <form action="" method="">

            <Input classes="form-input" type="email" name="email" id="input-email" required="true" placeholder="Email" onChange="" />
            <Input classes="form-input" type="password" name="password" id="input-password" required="true" placeholder="Mot de passe" onChange="" />

            <Button type="submit" classes="button button-primary" click="" content="Se connecter" />
            <Link href="/register">
                <a>S'inscrire</a>
            </Link>

        </form>

    </div>
  );
}

export default Index;

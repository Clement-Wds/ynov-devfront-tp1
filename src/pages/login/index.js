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

            <div className="form-group">
                <Input classes="form-input" label="EMAIL" type="email" name="email" id="input-email" required="true" placeholder="Email" onChange={() => console.log('.')} />
                <Input classes="form-input" label="MOT DE PASSE" type="password" name="password" id="input-password" required="true" placeholder="Mot de passe" onChange={() => console.log('.')} />

                <Button type="submit" classes="button button-primary" click={() => console.log('.')} content="Se connecter" />
                <Link href="/register">
                    <a>S'inscrire</a>
                </Link>
            </div>
            
        </form>

    </div>
  );
}

export default Index;

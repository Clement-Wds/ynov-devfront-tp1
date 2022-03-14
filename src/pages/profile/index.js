import React, {useState, useEffect} from 'react';
import TitlePage from "/src/components/TitlePage";
import userService from '/src/services/user.service';
import withAuth from '/src/HOC/withAuth';

const [user, setUser] = useState();
 
    useEffect(() => {
        userService.getMe(localStorage.getItem('token'))
            .then(data => {
                console.log(data);
                setUser(data);
            })
            .catch(err=>console.log(err))
    },[])

const index = () => {
  return (
    <div>
				<TitlePage title="Profil" />
				<div className="text-center">
					<p>Nom: {user && user.firstName}</p>
					<p>Prénom: {user && user.lastName}</p>
					<p>Email: {user && user.email}</p>
					<p>
						<Button title="logout" classes="button button-primary" />
					</p>
				</div>
		  </div>
  )
}

export default withAuth(Index);
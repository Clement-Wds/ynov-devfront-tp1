const apiUrl = "http://localhost:1337/api";
export default {
    register(payload) {
        return fetch(`${apiUrl}/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(payload)
        })
        .then((res) => {
            res.json()
            window.location.href = '/profile';
        });
    },

    login(payload){
        return fetch(`${apiUrl}/auth/local/`, {
            method: "POST",
            headers: {
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json());
    },

    getMe(jwt){
        return fetch(`$(apiUrl)/auth/local/me`, {
            method : "GET",
            headers: {
                "content-Type" : "Application/json",
                "Autorization" : "Bearer.jwt"
            },
        }).then((res) => res.json());
    }
}
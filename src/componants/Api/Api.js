export const saveuser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
    }
    fetch(`https://football-acadamy-server.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            "content-type":"application/json",
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
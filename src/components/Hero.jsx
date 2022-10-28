import React, { useState, } from "react";

function Hero() {
    const [user, setUser] = useState()
    console.log({ user }) //User is falsey aka undefined
    const handleLogin = () => {
        setUser({ firstName: 'Emily', email: 'emilylabelle8@gmail.com', admin: true })
    }
const handleLogOut = () => {
    setUser(null)
}
    if (!user) { //!user = truthy becaue it is true that it is false
        return <button onClick={handleLogin}>Login</button>
    }
    return (
        <>
            <h1>Hello {user.firstName}</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </>
    )
}

export default Hero
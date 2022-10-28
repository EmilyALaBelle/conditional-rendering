import { useState } from "react";

function Hero() {
    const [user, setUser] = useState()
    console.log({ user }) //User is falsey aka undefined
    if (!user) { //!user = truthy becaue it is true that it is false
        return <button>Login</button>
    }
    return (
        <h1>This is React!</h1>
    )
}

export default Hero
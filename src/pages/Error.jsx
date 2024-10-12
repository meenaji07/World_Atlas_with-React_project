import { NavLink, useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError()
    console.log(error);
    
    return (
        <div>
    <h1>Oops an error Occured!</h1>
        {error && <p>{error.data}</p>}

        <NavLink to="/"><button>Go Home</button></NavLink>
    </div>
)}
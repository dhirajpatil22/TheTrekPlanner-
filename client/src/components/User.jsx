import { useLocation } from "react-router-dom";

export function User(){
    const location = useLocation();
    const { fromLogin } = location.state || {};
    console.log("Props from login:", fromLogin);

    return (<div>
        <h4>This is user page  </h4>
        <p>you are logged in as {fromLogin.data.name} </p>
    </div>)
}
import { useLocation } from "react-router-dom";
export function Admin(){
    const location = useLocation();
    const { fromLogin } = location.state || {};

  // Access the props passed from the login page
  console.log("Props from login:", fromLogin);
  <p>you are logged in as {fromLogin.data.name} </p>
    return (
        <div>
            <h4>This is admin page</h4>
             <p>you are logged in as {fromLogin.data.name} </p>
        </div>
    
    )
}
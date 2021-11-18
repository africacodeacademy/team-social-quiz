import GoogleLogin from "react-google-login";
import * as dotenv from "dotenv";

import { useHistory } from "react-router-dom";

export default function Google(props: any) {
  dotenv.config();
  let history = useHistory();

  const loginsuccess = (response: any) => {
    console.log(response.vu.IX)
   localStorage.setItem("name", response.vu.IX);
    history.replace(props.path);
  };

  const loginfailure =(error:any) =>{};

  const clientId = JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  const name = clientId.replace('"', "");
  const Clientid = name.replace('"', "");

  return (
    <div>
      <div className="btn_google">
        <GoogleLogin
          
          clientId={Clientid}
          
          onSuccess={loginsuccess}
          onFailure={loginfailure}
          cookiePolicy={"single_host_origin"}
          >
         
          <span className="btn_googleinfo"> SignIn with Google</span>
        </GoogleLogin>
      </div>
    </div>
  );
}

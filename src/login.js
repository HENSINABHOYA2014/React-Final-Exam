import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Login=()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [alldata,setAlldata] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = () => {
      let data = JSON.parse(localStorage.getItem('user'));
      let ans = data.filter((val)=>{
        if(val.email == email){
          return val;
        }
      })

      if(ans.length != 0){
        if(ans[0].password == password){
          localStorage.setItem('users',JSON.stringify(ans[0]));
          alert("User Successfully Login");
          navigate('/notes');
        }else{
          alert("Email & Password is not valid...!");
        }
      }else{
        alert("User Successfully Login");
      }
    }
return(
    <>
<div>
  <table>
    
      

   
    <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="input" />
                   <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="input " />
                
                 <NavLink type="button" className="btn2 ms-5" to='/notes' onClick={() => handleSubmit()}>Sign In</NavLink>
  </table>
</div>


</>
)
}
export default Login;
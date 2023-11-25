import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [Phone, setPhone] = useState("")
    const [alldata,setAlldata] = useState([])

    let navigate = useNavigate()
    
    const handleSubmit = () => {
        let obj = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            email: email,
            city: city,
            Phone: Phone
        }
        let data = [...alldata,obj]
        localStorage.setItem("user",JSON.stringify(data));
        setAlldata(data)
        setName("");
        setEmail("")
        setPassword("")
        setCity("")
        setPhone("")
        navigate('/')
    }

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("user"));
        if(data == null){
            setAlldata([])
        }else{
            setAlldata(data)
        }
    },[])

    return (
    
<div>
  <table>
    
      
  <input type="text"  placeholder="Username" name="name" onChange={(e) => setName(e.target.value)} value={name} className=" bg-info input mt-3" />
   
    <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="input" />
                   <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className=" input bg-info" />
                   <input type="text" placeholder="city" name="city" onChange={(e) => setCity(e.target.value)} value={city} className="input" />
                   <input type="number" placeholder="Phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={Phone} className="input mb-3 bg-info" />
       <div className="login_option mb-3">
                     <a href="#" className="account"><i className="fa-brands fa-google" style={{ color: '#000000' }} /></a>
                     <a href="#" className="account"><i className="fa-brands fa-github" style={{ color: '#000000' }} /></a>
                  <a href="#" className="account"><i className="fa-brands fa-twitter" style={{ color: '#000000' }} /></a>
                     </div>
                 <NavLink type="button" className="btn2" to='/login' onClick={() => handleSubmit()}>Sign In</NavLink>
  </table>
</div>



       
    )
}

export default Register;
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
    <>
    <div>
  <div id="main" className="main-container">
    <div className="box">
      <h2>Login</h2>
      <form>
        <div className="input-box">
          <input id="user-name"  placeholder="Username" name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" />
          <label>Name</label>
        </div>
        <div className="input-box">
          <input id="user-name"  placeholder="Email" name="Email" onChange={(e) => setName(e.target.value)} value={email} type="text" />
          <label>Email</label>
        </div>
        <div className="input-box">
          <input id="user-pass" type="password"  placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <label>Password</label>
        </div>
        <div className="input-box">
          <input id="user-pass" type="password"  placeholder="City" name="city" onChange={(e) => setCity(e.target.value)} value={city} />
          <label>City</label>
        </div>
        <div className="input-box">
          <input id="user-pass" type="phone"  placeholder="Phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={Phone} />
          <label>Phone</label>
        </div>
        <NavLink type="button" className="btn2" to='/login' onClick={() => handleSubmit()}>Sign In</NavLink>
      </form>
      <p><a href="#">Lost your password?</a></p>
      <p><a href="#">Register</a></p>
    </div>
  </div>
  <div id="logged-in">
  </div>
</div>

    </>



       
    )
}

export default Register;
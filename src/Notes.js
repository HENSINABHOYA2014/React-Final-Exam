import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ADD_RECORD , DELETE_RECORD, EDIT_RECORD,UPDATE_RECORD } from './action/action';
const Notes=()=>{

    const dispatch = useDispatch();
    let record = useSelector(state => state.Crud.users);
    let singlerecord = useSelector(state => state.Crud.user);
    const [editid,setEditId] = useState("");
    const [alldata,setAllData] = useState(record)
    const [input,setInput] = useState({
        name : '',
        phone : ''
    })
    const handleChange = (e) => {
        const {name,value} = e.target;
        setInput({
            ...input,[name] : value
        })
    }
    const handleSubmit = () => {
  
      if(editid){
        let obj = {
          id : editid,
          name : input.name,
          phone : input.phone
        }
        dispatch(UPDATE_RECORD(obj));
        alert("Record successfully Edit");
        setEditId("");
      }else{
        let obj = {
          id : Math.floor(Math.random() * 100000),
          name : input.name,
          phone : input.phone
        }
        dispatch(ADD_RECORD(obj));
        alert("Record successfully insert");
      }  
      setInput({
        name: '',
        phone : ''
      })
    }
  
      useEffect(()=>{
          setInput({
             name : singlerecord.name,
             phone : singlerecord.phone
          })
          setEditId(singlerecord.id)
      },[singlerecord])
    return(
        <div className="container">
  <h1>Welcome To Keeps Notes</h1>

  <div className="text-area pt-4">
    <textarea placeholder="Enter your note here..." defaultValue={""} name='name' onChange={handleChange} value={input.name} />
    <div className="color">  
    </div>
    <button id="add" onClick={ () => handleSubmit() } className='bg-primary'>Add</button>
  </div>
  <div className="notes">
  <h2>Your Notes</h2>
  {record.map((val) => (
    <div key={val.id} className='box1'>
      <p>ID: {val.id}</p>
      <p>Name: {val.name}</p>
      {/* <p>Phone: {val.phone}</p> */}
      <button className='bg-primary btn1' onClick={() => dispatch(DELETE_RECORD(val.id))}>Delete</button>
      <button className='bg-primary btn1 ms-3' onClick={() => dispatch(EDIT_RECORD(val.id))}>Edit</button>
    </div>
  ))}
  <hr />
</div>
  </div>
    )
}
export default Notes;
import { useState } from 'react';
import ErrorModule from '../ErrorModule/ErrorModule';
import './Adduser.css'

function Adduser(props)
{   
    const [eMessage,seteMessage]=useState();
    
   const FormSubmitted=(event)=>{
       event.preventDefault();
       const data ={
           name:Name,
           age:+Age
       }
       if(Name.trim().length === 0 || Age.trim().length === 0)
       {    seteMessage({
           title:"Warning",
           message:"Please Enter All The Fields"
       })
           setError(true)
           return;
       }
       if(+Age<1)
       {
        seteMessage({
            title:"Invalid Input",
            message:"The Age Must be greater than 0"
        })
        setError(true)
        return;
       }
       props.onAdd(data)
       setAge('');
       setName('')
      // console.log(data)
   }
   const [Name,setName]=useState('')
   const [Age,setAge]=useState('')
   const [notValid,setError]=useState(false);


   const nameChanged=(event)=>{
    setName(event.target.value);
 //console.log(Name)
   }
   const CloseError =()=>{setError(false)}

   const ageChanged=(event)=>{
       setAge(event.target.value)
   }
    return(
        <div>
                 {notValid && <ErrorModule eData={CloseError} datae={eMessage} />}

        <div className="user_form">
            <form onSubmit={FormSubmitted}>
                <label htmlFor="name">Enter your Name</label>
                <input id="name" type="name" onChange={nameChanged} value={Name} />
                <label htmlFor="age">Choose your Age</label>
                <input id="age" type="number" onChange={ageChanged} value={Age} />
                <button type="submit">Add user</button>
            </form>
        </div>
        </div>
    )
}

export default Adduser;
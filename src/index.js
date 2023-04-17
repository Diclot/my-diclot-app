import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"


const App =()=>{
    const [emailValue, setEmailValue]= useState("");
    const [passwordValue, setPassword]= useState("");

const onEmailvalueChangeHandler = (e)=>{
    setEmailValue(e.target.value);


};
const onpasswordvalueChangeHandler =(e)=>{
    setPasswordValue(e.target.value)
}

    return(
        <>
        <h1>React Form</h1>
        <Form emailValue={emailValue} 
         passwordValue={passwordValue} 

         onEmailvalueChangeHandler={onEmailvalueChangeHandler}
         onpasswordvalueChangeHandler={onpasswordvalueChangeHandler}
         />

        
        </>
    );
}

const Form=(prop)=>{
    return(
        <form>
            <label htmlFor="email">
                Email:
                <input type="email" value={prop.emailValue} onChange={prop. onEmailvalueChangeHandler}/>
                <br>
                </br>
            </label> 

        <label htmlFor="password">
            Password:
            <input type="password"  value={prop.passwordValue} onChange={prop.onPasswordvalueChangeHandler}/>
                <br>
                </br>
        </label>
        < button type=" submit">
            sign in
        </button>

        </form>
    )
}


   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

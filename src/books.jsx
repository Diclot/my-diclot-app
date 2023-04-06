
import React from 'react';
import ReactDOM from 'react-dom/client';


const Books =()=>{
    const onSEarchNameChangeHandler=(event)=>{
        console.log("Value of SEarch is:>>", event.target.value)
    }
    return(
        <div>
                    <input onChange={onSEarchNameChangeHandler} placeholder="Serach a book"/>

        <Book1/>
        <Book2/>
        <Book3/>       
        </div>
    );
};

const Book1=()=>{
    return(
        <>
<h1> Hello Wolrd</h1>
        </>
    );
};
const Book2=()=>{
    return(
        <>
        <h2> Wellcom to My Web Dev</h2>
        </>
    );
};

const Book3=()=>{
    return(
        <>
        <h3> My Talent IS MY LIFE</h3>
        </>
    );
};



export default Books

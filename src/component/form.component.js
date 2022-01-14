import React, { Component, useState } from 'react';

export default function App() {

    const [name , setName] = useState("");
    /*

    state = {
        name : "",
    },

    setName = name k manupulate korar function

    */
    
    handlSubmit = ( ) => {
        alert(`Name ${name}`)
    }


    return(
        <>
        <h1>Hello</h1>
        <form action="" onSubmit={}>
            <label htmlFor="">Enter your Name</label>
            <br />
            <input type="text" value={name} onChange={event => {
                setName(event.target.value);
            }} />
        </form>
        </>
    );
}
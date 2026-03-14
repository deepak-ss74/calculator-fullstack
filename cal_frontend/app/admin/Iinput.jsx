"use client"
import{useState} from "react";

export default function Iinput(){
    const [input, setInput]=useState("");
    const [name,setName]=useState("");
    function handleSubmit(){
        setName(input);
    }
    return (
        <div className="bg-red-400">

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setInput(e.target.value)}
      />

      <button  className="bg-blue-400 border-2 "onClick={handleSubmit}>Submit</button>

      <h2>Hello {name}</h2>
    </div>

    );
}
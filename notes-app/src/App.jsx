import React from "react";
import { useState } from "react";

const App = () => {
  
  
  const [title, setTitle] = useState('')
  const [detailed, setDetailed] = useState('')
  
  
  const [task, setTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...task];

    copytask.push({title, detailed})

    setTask(copytask)

    setTitle('');
    setDetailed('');
  };




  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded "
        />
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded "
          placeholder="Write Details"
          value={detailed}
          onChange={(e)=>{
            setDetailed(e.target.value)
          }}
        />
        <button className="bg-white font-medium w-full outline-none text-black px-5 py-2 rounded ">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

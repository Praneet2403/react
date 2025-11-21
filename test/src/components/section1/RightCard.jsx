import React from "react";


const RightCard = () => {
  return (
    <div className=" h-full w-1/3 relative rounded-xl overflow-hidden ">
      <img
        className="h-full object-cover "
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="absolute top-0 h-full w-full p-3 flex flex-col justify-between bg-amber-800">
        <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center">1</h2>
        <div className="p-2 ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            excepturi.
          </p>
          <button>Satisfied</button>
          <button><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;

// TodoForm.jsx
import React, { useState } from 'react';
import "./TodoList.css";
import image1 from "../../public/checklist-8493185_640.png"
import image2 from "../../public/todos.jpg"
import Lottie from "lottie-react";
import animation from "../assets/lottieflow-arrow-08-2-000000-easey.json"
import { Link, useNavigate } from 'react-router-dom';



function Todo() {
  const [name,setName]=useState('')
  const navigate=useNavigate()

  function changeName(e){
    setName(e.target.value)
  }
  function addUserName(){
    if (name.trim()!==''){
      navigate(`/todo?username=${encodeURIComponent(name.trim())}`)
    }
  }
  return (
    <div className="main-background bg-gray-300 flex items-center justify-center min-h-screen hover:bg-gray-400 ">
      <div className="cardscreen w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className='image p-1'>
          {/* <img className='mt-5' src={image2} alt="checklist"/> */}
          <img   src={image1} alt="checklist"/>
        </div>
        <div className='card-content flex flex-col justify-center items-center p-4'>
          <h1 className='text-3xl font-extrabold todohead'>TODO LIST</h1>
          <p className='mt-5 text-xs font-medium text-center '>
            <label className='text-center font-bold'>Hi Welcome ... 😊<br/></label><br/>
            Manage your tasks, stay organized, 
            and boost your productivity with our ToDoList app. 
            Whether it's work, study, or personal tasks,
            we've got you covered!
          </p>
          <div className="w-full mt-7">
          <form class="w-full max-w-sm">
          <div class="flex items-center border-b border-t-neutral-950 py-1 mt-4 px-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Name" aria-label="Full name" value={name} onChange={(e)=>changeName(e)}/>
        
            {/* <Link to="/todo"> */}
              <button class="flex-shrink-0 border-transparent border-4  font text-black hover:text-teal text-sm py-1 px-2 rounded" type="button" onClick={()=>addUserName()}>
                  <Lottie
                    animationData={animation}
                    loop={true}  
                    autoplay={true}  
                    style={{ width: 20, height: 15 }}
                  />
            </button>
            {/* </Link> */}
          </div>
        </form>
            
          </div>
          
        </div>
      </div>
    </div>

  );
}
export default Todo;


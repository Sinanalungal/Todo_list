import React, { useState } from "react";
import "./Todo_main.css";
import { useLocation } from "react-router-dom";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";




function TodoMain() {
    const [tas,setTas]=useState('')
    const [tasks,setTask]=useState([])
    const [editingindex,setEdit]=useState('')
    const [editvaluechange,setEditvalue]=useState('')
    const location=useLocation()
    const username=(new URLSearchParams(location.search).get('username')).toUpperCase();

    // console.log(`"########################## ${User_name} ############################3333"`)


    function changebar(e){
        setTas(e.target.value)
    }
    function addTask(){
        const tasupdated=tas.trim()
        let duplicate = tasks.some(item => (item.taskname.toLowerCase()) === (tasupdated.toLowerCase()));
        if (tasupdated!=='' && !duplicate){
            setTask((tasks)=>[...tasks,{taskname:tasupdated,completed:false}])
            setTas('')
        }else if(tasupdated===''){
          alert('Enter a task')
        }
        else{
          alert('Task is already added')
        }
        
        
    }
    function taskCompletion(index) {
        const newarr=[...tasks]
        newarr[index].completed=!(newarr[index].completed)


        // const newarr = tasks.map((it, i) => {
        //     if (i === index) {
        //         return { ...it, completed: !it.completed }; 
        //     } else {
        //         return it; 
        //     }
        // });
        
        setTask(newarr);
    }
    function editHandle(index) {
      setEditvalue(tasks[index].taskname)
      // editingindex=index
      // console.log(index)
      // console.log(editingindex)
        setEdit(index)
    }
    function editValueChange(e){
        console.log(e.target.value)
        setEditvalue(e.target.value)
    }
    function saveEditChanges(index){
      if  (editvaluechange.trim()!==''){
        const newarr=tasks.map((itemname,i)=>{
          if (index===i){
            return {...itemname,taskname:editvaluechange};
          }else{
            return itemname;
          }
        })
        setTask(newarr)
        setEdit('')
        setEditvalue('')
      }
      
    }
    function cancellingEdit(){
      setEdit('')
      setEditvalue('')
    }
    function deleteData(index){
      const arr=tasks.filter((item,i)=>index!=i)
      setTask(arr)
    }
    function handleKeyPress(e){
      if (e.key==='Enter'){
        addTask();
      }
    }
  return (
    
    <div className="main-background flex items-center  min-h-screen bg-white">
      <div className="screen mt-5 w-9/12 bg-white p-6 rounded-lg shadow-md">
        <div className="header-sec ">
          <h1 className="text-3xl font-extrabold todohead">{username}'S TODO LIST</h1>
          <div className="w-full max-w-sm mt-4">
            <div className="relative flex items-center" onKeyDown={(e) => handleKeyPress(e)}>
              <input
                type="text"
                id="username"
                className="w-full pl-8 pr-2 py-2 border rounded-md focus:outline-none focus:border-indigo-600"
                placeholder="Enter Tasks" value={tas} onChange={(e)=>changebar(e)}
              />
              <button  className="absolute right-0 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"  onClick={()=>addTask()}>
                Add
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="main-content-section ">
          <ul>
            {tasks.map((item,index)=>(
              
                 (editingindex===index)?(<li key={index}>
                  
                 <div className="items flex items-center justify-between hover:bg-gray-100 bg-gray-100 p-4 my-2 rounded-md">
                 
                 <input  className="inputd font-black" value={(editvaluechange).toUpperCase()} onChange={(e)=>editValueChange(e)}></input>
                 <div className="flex space-x-2">
                     <button className="px-2 py-1 bg-blue-500 text-white rounded-md ml-1 hover:bg-blue-400" onClick={()=>saveEditChanges(index)} >
                     Save
                     </button>
                     <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400" onClick={()=>cancellingEdit()} >
                     Cancel
                     </button>
                     
                 </div>
                 </div>
     
                 </li>)
                 :(  <li key={index}>
                  <div className="items flex items-center justify-between bg-white p-4 my-2 rounded-md">
                      <input 
                          type="checkbox"
                          checked={item.completed}
                          className="mr-2 form-checkbox h-4 w-4 text-indigo-600"
                          onClick={() => taskCompletion(index)}
                      /> 
                      {item.completed?<span className="font-black task-name flex-grow text-left overflow-x-auto text-black">
                          <del>{(item.taskname).toUpperCase()}</del>
                      </span>:<span className=" font-black task-name flex-grow text-left overflow-x-auto text-black">
                          {(item.taskname).toUpperCase()}
                      </span>}
                      
                      <div className="flex items-center space-x-2">
                          <button className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400 ml-1" onClick={() => editHandle(index)}>
                          <BiSolidMessageSquareEdit />

                          </button>
                          <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400"  onClick={()=>deleteData(index)}>
                          <MdDelete />

                          </button>
                      </div>
                  </div>
              </li>
              )
            ))}
          </ul>
        </div>
    </div>
  );
}

export default TodoMain;

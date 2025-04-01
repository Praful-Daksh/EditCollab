import React , { useState} from 'react'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const HomePage = () => {
  const navigate = useNavigate();
  let [roomId,setroomId] = useState('');
  let [userName,setuserName] = useState('');
  const createNewRoom = (e)=>{
    e.preventDefault();
    const id = uuid();
    setroomId(id);
    toast.success('Creted a New Room')
  }
  const joinRoom = (e)=>{
    if(!roomId || !userName){
      e.preventDefault();
      toast.error('All Fields Are Necessary')
      return;
    }else
    console.log(userName)
    navigate(`/editor/${roomId}`,{
      state:{
        userName
      }
    })
  }
  return (
    <>
      <div className="container">
        <div className="form-area">
          <h2>PairEdit</h2>
          <h3><button className='newRoom' onClick={createNewRoom} >Create </button> or Join a Room.</h3>
          <form >
            <div className="form" >
              <label htmlFor="email">Email Address</label>
              <input type="text"  placeholder="Enter User Name" onChange={(e) => setuserName(e.target.value)} value={userName}/>
              <label htmlFor="roomId">Room Id</label>
              <input type="text"  placeholder="Enter Room Id" value={roomId} onChange={(e)=> setroomId(e.target.value)}/>
              <button className='joinRoom' onClick={joinRoom} type='submit'>Join</button>
            </div>
          </form>
        </div>
      </div>
   </>
  )
}

export default HomePage
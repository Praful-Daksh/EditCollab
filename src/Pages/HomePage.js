import React , { useState} from 'react'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const HomePage = () => {
  const navigate = useNavigate();
  const [roomId,setroomId] = useState('');
  const [userName,setuserName] = useState('');
  const createNewRoom = (e)=>{
    e.preventDefault();
    const id = uuid();
    setroomId(id);
    console.log(roomId);
  }
  const joinRoom = ()=>{
    if(!roomId || !userName){
      toast.error('All Fields Are Necessary')
      return;
    }
    navigate(`/editor/${roomId}`,{
      state:{
        userName,
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
              <input type="username" id="username" required name="username" placeholder="Enter User Name" onChange={(e) => setuserName(e.target.value)} value={userName}/>
              <label htmlFor="roomId">Room Id</label>
              <input type="text" id="roomId"  required name="roomId" placeholder="Enter Room Id" value={roomId} onChange={(e)=> setroomId(e.target.value)}/>
              <button className='joinRoom' onClick={joinRoom}>Join</button>
            </div>
          </form>
        </div>
      </div>
   </>
  )
}

export default HomePage
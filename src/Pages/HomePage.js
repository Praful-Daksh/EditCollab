import React , { useState} from 'react'
import {v4 as uuid} from 'uuid'

const HomePage = () => {
  const [roomId,setroomId] = useState('');
  const [userEmail,setuserEmail] = useState('');
  const createNewRoom = (e)=>{
    e.preventDefault();
    const id = uuid();
    setroomId(id);
    console.log(roomId);
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
              <input type="email" id="email" required name="email" placeholder="Enter your email" onChange={(e) => setuserEmail(e.target.value)} value={userEmail}/>
              <label htmlFor="roomId">Room Id</label>
              <input type="text" id="roomId"  required name="roomId" placeholder="Enter Room Id" value={roomId} onChange={(e)=> setroomId(e.target.value)}/>
              <button className='joinRoom' type='submit'>Join</button>
            </div>
          </form>
        </div>
      </div>
   </>
  )
}

export default HomePage
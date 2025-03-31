import React, { useEffect, useState ,useRef} from 'react';
import Client from '../Components/Client';
import Editor from '../Components/Editor';
import { initSocket } from '../socket';
import ACTIONS from '../actions';
import { useLocation ,useNavigate , Navigate , useParams} from 'react-router-dom';
import toast from 'react-hot-toast'


const EditorPage = () => {

  const socketRef = useRef(null)
  const location = useLocation()
  const reactNavigator = useNavigate()
  const roomId = useParams()
  useEffect(()=>{
    const init = async ()=>{
      socketRef.current = await initSocket(); 
      socketRef.current.on('connect_error',(err)=> handleErrors(err))
      socketRef.current.on('connect_failed',(err)=> handleErrors(err))

      function handleErrors(e){
        console.log('socket error :',e)
        reactNavigator('/')
        toast.error('Connection failed, try again later')
      }
      socketRef.current.emit(ACTIONS.JOIN,{   
        roomId,
        username: location.state?.userName,
      });
    }
    init();
  },[]);
  const [clients, setClients] = useState([
    { socketId: 1, userName: 'amit kumar' },
    { socketId: 2, userName: 'harish singh' },
  ]);

  // if(!location.state){
  //   return <Navigate to='/'/>
  // }


  return (
    <>
      <div className='container-fluid p-0'>
        <div className='editor'>
          <Editor />
        </div>
        <div className="sidebar">
          <h4>PairEdit</h4>
          <div className="mb-3">
            <button className="btn btn-primary w-100 mb-2" id="openFile">
              Open File
            </button>
            <button className="btn btn-success w-100 mb-2" id="saveFile">
              Save File
            </button>
          </div>
          <div className="mb-3">
            <button className="btn btn-info w-100 mb-2" id="copyRoomId">
              Copy Room ID
            </button>
          </div>
          <h5>Connected Users</h5>
          <ul id="connectedUsers" className="list-group">
            {clients.map((client) => {
              return <Client username={client.userName} key={client.socketId} className='list-group-item' />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EditorPage;

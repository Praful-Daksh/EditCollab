import React, { useEffect, useState, useRef } from 'react';
import Client from '../Components/Client';
import Editor from '../Components/Editor';
import { initSocket } from '../socket';
import ACTIONS from '../actions';
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditorPage = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  const reactNavigator = useNavigate();
  const roomId = useParams().roomId;

  useEffect(() => {
    console.log(location.state)
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on('connect_error', (err) => handleErrors(err));
      socketRef.current.on('connect_failed', (err) => handleErrors(err));
      socketRef.current.on(ACTIONS.UPDATE_CLIENTS, (clients) => {
        setClients(clients);
      });

      function handleErrors(e) {
        console.log('socket error :', e);
        reactNavigator('/');
        toast.error('Connection failed, try again later');
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.userName,
      });
    };
    init();
  }, [reactNavigator, roomId, location.state?.userName]);

  const [clients, setClients] = useState([]);

  if (!location.state) {
    return <Navigate to='/' />;
  }

  const handleOpenFile = () => {
    // Implement functionality to open a file
    toast.info('Open File functionality not implemented yet.');
  };

  const handleSaveFile = () => {
    // Implement functionality to save a file
    toast.info('Save File functionality not implemented yet.');
  };

  return (
    <>
      <div className='container-fluid p-0'>
        <div className='editor'>
          <Editor />
        </div>
        <div className="sidebar">
          <h4>PairEdit</h4>
          <div className="mb-3">
            <button className="btn btn-primary w-100 mb-2" id="openFile" onClick={handleOpenFile}>
              Open File
            </button>
            <button className="btn btn-success w-100 mb-2" id="saveFile" onClick={handleSaveFile}>
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
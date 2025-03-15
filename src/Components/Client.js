import React from 'react'
import Avatar from 'react-avatar'

const Client = ({username}) => {
  return (
    <li className="list-group-item">
      <Avatar name={username} size={30} round="8px" className='me-2' />
      <span>{username}</span>
      <button className="btn btn-danger btn-sm float-end "><i className="fa-solid fa-ellipsis-vertical"></i></button>
    </li>
  )
}

export default Client
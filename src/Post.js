import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import "./Post.css";
import InputOptions from './InputOptions';

function Post({name,description,message,photoUrl}) {
  return (
    <div className="post">
        <div className="post_header">
      <Avatar/>
      <div className="post_info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
    <div className="post_body">
        <p>{message}</p>
    </div>
    <div className="post_buttons">
        <InputOptions Icon={ThumbUpOffAltOutlined} title="Like" color="gray"/>
        <InputOptions Icon={ChatOutlined} title="Like" color="gray"/>
        <InputOptions Icon={ShareOutlined} title="Like" color="gray"/>
        <InputOptions Icon={SendOutlined} title="Like" color="gray"/>
    </div>
 </div>
  )
}

export default Post

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {
  Input
} from 'reactstrap';

const AvatarElement = ({ className, upload, user }) => {
  
  const [avatar, setAvatar]  = useState('/profile.png')

  useEffect(() => {
    if(user && user.avatar){
      setAvatar(user.avatar)
    }
  }, [])


  const onChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]))
  }

  return <div className={className}>
    <img src={avatar} />
    {upload && <InputFile onChange={onChange} /> }
  </div>
}

const InputFile = styled(Input).attrs({
  className: 'avatar',
  type: 'file'
})`
  position: absolute;
  top:0;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`

const Avatar = styled(AvatarElement).attrs({
  className: 'avatar'
})`
  position: relative;
  width: 100%;
  border-radius: 50%;
  box-shadow: 1px 3px 6px 1px #dee2e6;
  overflow: hidden;
`

export default Avatar



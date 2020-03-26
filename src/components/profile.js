import React, { useState, useEffect } from 'react'
function Profile() {

  const [name, setName] = useState('')

  useEffect(() => {
    const {firstname, lastname} = JSON.parse(localStorage.getItem('user') || '{}')
    setName(`${firstname} ${lastname}`)
  }, [])

  return (
    <div className="profile">
      <div className="profile-image">
        <img src="/profile.png" alt="profile" />
      </div>
      <div className="profile-name">
        {name}
      </div>
    </div>
  )
}

export default Profile
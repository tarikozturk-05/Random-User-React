import React from 'react'
import Phone from './assets/phone.svg'
import Mail from './assets/email.svg'
import Location from './assets/location.svg'
const Assets = ({user,getUser}) => {
  console.log(user);
  const{name,phone,location,picture,email,dob,registered}=user
  // console.log(name)
  return (

    <div className='container'>
      <div className='ilk'> <img src={picture?.large} alt="" />   <h2>{name?.title} {name?.first}  {name?.last}</h2> </div>

      <div className='ilk'><img src={Mail} width="25px" alt="" /> <p>{email}</p></div>
    
        <div className='ilk'><img src={Phone} width="25px" alt="" /> <p>{phone}</p></div>

        <div className='ilk'> <img src={Location} width="25px" alt="" /> <p>{location?.state} {location?.country}</p> </div>
        
        <div className='footer'><p>Age:{dob?.age} </p> 
        <p>Register Date:{registered?.date}</p>
        </div>
        <button  className='button'>Random User</button>
    </div>
  )
}

export default Assets
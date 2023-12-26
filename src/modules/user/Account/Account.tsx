import Popup from 'reactjs-popup'
import {IoMdArrowDropdown} from 'react-icons/io'
import './Account.scss'
import { NavLink } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {VscSignOut} from 'react-icons/vsc'
const Account = () => {
  return (
    <div>
      <h4></h4>
            <Popup trigger=
                {<button  style={{backgroundColor:'white',border:'none'}}>
                  <IoMdArrowDropdown style={{height:'1.5rem',width:'1.5rem',marginLeft:'-0.3rem'}}/> </button>}
                position="left top">
                <div className='main'>
                <div className='popup_items'>
                  <i style={{marginTop:'1.2rem',marginRight:'0.5rem'}}><CgProfile/></i>
                  <NavLink to={'/profile'}><p style={{color:'black'}}>Profile</p></NavLink>
                 </div> 
                 
                  <div className='popup_items'>
                     <i style={{marginTop:'1.2rem',marginRight:'0.5rem'}}><FiSettings/></i>
                     <NavLink to={'/profile/setting'}><p style={{color:'black'}} >Setting & Privacy</p></NavLink>
                  </div>
                  <div className='popup_items'>
                    <i style={{marginTop:'1.2rem',marginRight:'0.5rem'}}><VscSignOut/></i>
                    <NavLink to={'/logout'}><p style={{color:'black'}}>Signout</p></NavLink>
                  </div>
                </div>
                
            </Popup>
    </div>
  )
}

export default Account
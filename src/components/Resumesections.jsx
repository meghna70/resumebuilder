import React from 'react'
import {  faBars,faInfoCircle, faPencil,faCheckCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Switch from '@mui/material/Switch';




const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Resumesections(props) {
    const [toggled, setToggled] = React.useState(false);
    const [inputname,setInputname]=React.useState(props.name)
    const [toggleEdit, setToggleEdit]=React.useState(false)

    function handleToggleEdit(){
        if (toggled)return;
        setToggleEdit(!toggleEdit)
        props.handleSave()
    }
    const handleInputName=(e)=>{
        setInputname(e.target.value)
    }
    function handleToggle(){
        setToggled(!toggled)
        props.handleSave()
    }
    
    function SwitchThumb(props) {
        return (
            <div className='switch-circle'>
          <div className={`switch ${props.isChecked ? 'checked' : 'unchecked'}`}>
           
            {props.isChecked ? <FontAwesomeIcon icon={faCheckCircle}/> : <FontAwesomeIcon icon={faTimesCircle} />}
            </div>
          </div>
        );
      }
  return (
   
        <div className='sectionContainer' style={toggled? {backgroundColor:"#e2e2e2"} : null} draggable >
        <div className='sectionLeft'>
            <FontAwesomeIcon className='marginleft marginright' icon={faBars} />
            
            <FontAwesomeIcon className='tooltip marginleft' icon={faInfoCircle}/>
            <span class="tooltiptext">This is {inputname}</span>
            
            <span className='input-span marginleft'>
                <input type='text' 
                onChange={handleInputName} 
                name='inputname' 
                value={inputname}
                disabled={!toggleEdit}
                    />
            </span>
        </div>
        <div className='sectionRight'>
            <div >
                {
                    toggleEdit? <span className='submitName' 
                                    onClick={handleToggleEdit}>
                                        Save
                                </span> 
                    :   <FontAwesomeIcon className='submitName' onClick={handleToggleEdit} icon={faPencil} />
                }
            </div>
            <Switch {...label} 
            icon={<SwitchThumb isChecked={false} />}
            checkedIcon={<SwitchThumb isChecked={true} />}
            onChange={handleToggle} defaultChecked color="secondary"/>
            </div> 
            </div>

      )}

   

export default Resumesections
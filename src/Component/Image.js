import React from 'react'


function Image(props) {
  return (
    <div className='box'>

      <div className='main'>
            <h3 style={{fontStyle:'"oblique"'}}>{props.value.name}</h3>
            <div className='innerbox'>
              
                <img src={props.value.pic}  alt=''/>
                </div>
                <div>
                <p style={{fontFamily:'"serif"', font:'"caption"'}}>{props.value.msg}</p>
                </div>
               
                
               
                
                </div>
        </div>
    
  )
}

export default Image
import React from 'react'
import './index.css';
import Image from './Component/Image'
import pic1 from "./Picture/bike1 (1).jpg"
import pic2 from "./Picture/bike1 (2).jpg"
import pic3 from "./Picture/bike1 (3).jpg"
import pic4 from "./Picture/bike1 (4).jpg"
import pic5 from "./Picture/bike1 (5).jpg"
import pic6 from "./Picture/bike1 (6).jpg"
import pic7 from "./Picture/bike1 (7).jpg"
import pic8 from "./Picture/bike1 (8).jpg"
import pic9 from "./Picture/bike1 (9).jpg"



function App() {

    var user = [ {
        name: "ADVENTURE - RIDEING",
        
        pic: pic1 ,
        
        msg: "Himalayan-450"
        
        },
    
        {
            name: "DRAG -RACING",
            
            pic: pic2 ,
            
            msg: "Scram-450"
            
            } ,

            {
                name: "THE KINGDOM OF CITY",
                
                pic: pic3 ,
                
                msg: "Shotgun-650"
                
                } ,

                {
                    name: "HIMALAYAN",
                    
                    pic: pic4 ,
                    
                    msg: "Beast"
                    
                    } ,

                    {
                        name: "HIMALAYAN",
                        
                        pic: pic5 ,
                        
                        msg: "super-Deluxe"
                        
                        } ,
    
                        {
                            name: "THE MONSTER",
                            
                            pic: pic6 ,
                            
                            msg: "Ride on the horse"
                            
                            } ,

                            {
                                name: "HIMALAYAN",
                                
                                pic: pic7 ,
                                
                                msg: "Test-drive"
                                
                                } ,

                                {
                                    name: "ROYAL-METEOR",
                                    
                                    pic: pic8 ,
                                    
                                    msg: "Fastest meteor"
                                    
                                    }, 
    
                                    {
                                        name: "ROYAL ENFIELD",
                                        
                                        pic: pic9 ,
                                        
                                        msg: "Super-Classic"
                                        
                                        } ,
    
    
    
    ]
        
  return (

<div className='box1'>
    {
        user.map(value=>{
            return(
<Image value={value}/>
            )
        })
    }
    
</div>


  )
}

export default App

import React from 'react'
import { AiFillDelete, AiFillEdit} from "react-icons/ai";
import '../App.css'
export const Expenseitem = ({id,charge,amount,categorie,date,fonctMod,fonctSup}) => {
  return (
        
         
           <li className='item'> 

          <div className='info'>

            <span className='date'> {date} </span>
            <span className='expense'>{charge}</span>
            <span className='amount'>  {amount} Dhs</span>
            <span className='cate'> {categorie} </span>
          </div>
          <div  className='opt'> 
          modifier
                    <AiFillEdit className='btnOPt ed'  onClick={()=>fonctMod(id)}/>
                      
                      
                      Supprimer
                      
                        <AiFillDelete  className='btnOPt del' onClick={()=>fonctSup(id)}/> 
          
          
          </div>
        </li> 


)
}

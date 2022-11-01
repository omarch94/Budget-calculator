import React from 'react'
import { Expenseitem } from './expenseitem';
import '../App.css'

import { AiTwotoneDelete } from "react-icons/ai";




export const Expenselist = ({chargeslist,suppTous,fonctMod,fonctSup}) => {
  return (
    <>
        <ul className='list'>
            {chargeslist.map((chrg)=>{
                return <Expenseitem key={chrg.id} date={chrg.date} id={chrg.id}  charge={chrg.charge} amount={chrg.amount} categorie={chrg.categorie} fonctMod={fonctMod} fonctSup={fonctSup} />
            })}

        </ul> 
        
        {/* boutton supprimer tous va paraitre lorsque la liste des items contient au moins un item */}
        {chargeslist.length>0 && <button className='btn supptous' onClick={suppTous} >
            Supprimer Tous!
            <AiTwotoneDelete className='but'/>

            </button>
          
            
            }
    </>
  )
}

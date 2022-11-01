import React,{useState} from 'react'
import { Typewriter } from 'react-simple-typewriter'

import uuid from 'react-uuid'; // pour les ids auto
export const Expenseform = ({
  // on a passé les props pour les utiliser dans les composents fils
  montantTotal,
  libelleDepense,
  montanDepense,
  date,
  categories,
  functionDate,
  functTotal,
  functLibDepense,
  functMontant,
  functCategorie,
  functionEnvoie,
  modifs
}) => {
  const[isShown,setIsShow]=useState(false)
  const handClic=e=>{
    setIsShow(true);
  }
const categoriess=  [
    {idc:uuid(),libelle:"Dépenses fixes"},
    {idc:uuid(),libelle:"Dépenses courantes"},
        {idc:uuid(),libelle:"Dépenses ocasionnelles"}
        ]
       
  return (
    <>
    <div>      
    <button  className="btnhide" onClick={handClic} >ENTREZ VOTRE BUDGET </button> 
    </div>
    <form onSubmit={functionEnvoie}>
          {isShown &&(
      <fieldset className='fieldset-budget'>
          <div className='form-group Budget'>
          <label htmlFor='total'>Budget :</label>
          <input type="number"
           className='form-control'
           id ="total" 
           name="total"
           placeholder='Votre budget'
           value={montantTotal}
           disabled={(libelleDepense!=="")}
           onChange={functTotal}
           min="0"
      
           />
        </div> 
        </fieldset>
        )}


        <div> <h2> ENTREZ VOS : <span style={{color:"green",fontSize:"20px",textTransform:"uppercase"}}>
         {/* Pour l'animation texte */}
          <Typewriter
         loop
         cursor
        cursorStyle=''
         typeSpeed={90}
         deleteSpeed={50}
         delaySpeed={1000}
         words={["Charges...","Dépenses..."] }
         />
         </span>
          </h2> </div>

        <fieldset>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>Charge :</label>
          <input type="text"
           className='form-control'
           id ="charge" 
           name="charge"
           placeholder='votre charge'
           value={libelleDepense}
           onChange={functLibDepense}
           />
        </div>

        <div className='form-group'>
          <label htmlFor='amount'>Montant :</label>
          <input type="number"
           className='form-control'
           id ="amount" 
           name="amount"
           placeholder='montant charge'
           value={montanDepense}
           onChange={functMontant}
           />
        </div>

        <div className='form-group'>
        <label htmlFor='date'>Date :</label>
          <input type="date"
           className='form-control'
           id ="date" 
           name="date"
           placeholder='date charge' 
           onChange={functionDate}
          value={date}
           />
        </div>
    
        <div className='form-group'>
        <label htmlFor='categorie'>Categorie :</label>
        <select value={categories} onChange={functCategorie} id="cate" name="cate">
            <option>Choisir une categorie</option>
              
            {categoriess.map((i)=>(
              <option value={i.libelle} id={i.idc} key={i.idc} >{i.libelle}</option>
            ))}
            </select>
        </div>
      </div>
        </fieldset>
{/* button avec condition  */}
      <button type="submit" className='btn'>
    
    {modifs?"Modifier" :"Ajouter"}


      </button>
    </form>
    </>
)
}

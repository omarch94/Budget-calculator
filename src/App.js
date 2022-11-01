 import './App.css';
 import React,{useState,useEffect} from 'react';
 import { Currency } from './Components/currency';
 import { Expenseform } from './Components/expenseform';
import { Expenselist } from './Components/expenselist';
import ProgressBar from './Components/Progress';
import uuid from 'react-uuid'; // pour les ids auto
import Swal from 'sweetalert2';
import Footer from './Components/footer';
// import Chart from "chart-js.js"
// import {Line} from 'react-chartjs-2'

const initialExpenses =localStorage.getItem("expenses")?
JSON.parse(localStorage.getItem("expenses")): [];
console.table(initialExpenses);

function App() {

  

  // ****** les valeurs de state ******//
  // depenses , ajouter depense
  const [expenses,setExpenses]=useState(initialExpenses);
   
  // une seule depense

  const[charge,setCharge]=useState('');

  // un seul montant de  depense

  const[amount,setAmount]=useState('');

  //la date
  const[date,setDate]=useState('');

  const[categorie,setCategorie]=useState('');

 

  // modifier
  const[modif,setModifier]=useState(false);

  // modifier item
  const [id,setId]=useState(0);

  //  total
  const[total,setTotal]=useState(0);
  //*********USEEFFECT************

  useEffect(()=>{
    console.log('on appel useeffect')
    localStorage.setItem('expenses',JSON.stringify(expenses))
  })

// ***** les fonctionnalités ****//

// onchange pour les charges
const handleCharge=e=>{

  console.log(`charge : ${e.target.value}`)
  setCharge(e.target.value)
}
// onchange pour le montant

const handleAmount=e=>{
  console.log(`montant : ${e.target.value}`)
  setAmount(e.target.value)
}



// handle date
const handleDate=e=>{
  setDate(e.target.value);
}
// handle categorie
const handleCategorie=e=>{
  setCategorie(e.target.value)
}
//handle total 
const handleTotal=e=>{
  setTotal(+(e.target.value))
  
}

// const labels=categorie;

  // const data={
  //   labels:labels,
  
  //   dataSets:[
  //     {
  //       label:"depenses ",
  //       backgroundColor:"green",
  //       data:dataa
  //     }
  //   ]
  // }
// pour l'envoie
const handleSubmit=e=>{
e.preventDefault();
if (charge !== '' && amount >0 && date!==''){

  if (modif){
    //pour le laisser dans le meme ordre 
    let lesCharges=expenses.map((item)=>{
      return item.id===id?{...item,charge,amount,categorie,date} :item
    });
    setExpenses(lesCharges);
    

    setModifier(false);
 
    Swal.fire({
      icon: 'success',
      title: 'Très bien',
      text: 'Modifié avec succès',
    })

  }else{
    const singleExpense={id:uuid(),charge,amount,categorie,date}
    setExpenses([...expenses,singleExpense]);

    Swal.fire({
      icon: 'success',
      title: 'Très bien',
      text: 'Ajouté avec succès',
    })    
    // setdataa([...amount])


  }
  // <Line data={data}/>
  setCharge("");
  setAmount("");
  Swal.fire({
    icon: 'success',
    title: 'Très bien',
    text: 'Ajouté avec succès',
  })}  
else{
  //handleAlert
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'charge ne peut pas etre vide et le montant doit etre superieur a 0!',
    footer: '<a href="{charge}}">Ajouter charge</a>'
  })
}
};




// supprimer tous les items
const supprimerItems=()=>{
  console.log("tous supprimer");
  Swal.fire({
    title: 'ÊTES VOUS SÛRE?',
    text: "Vous ne pourrez pas revenir en arrière.!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le.!'
  }).then((result) => {
    if (result.isConfirmed) {
      setExpenses([]);
      Swal.fire(
        'Supprimé!',
        'Tous vos charges ont été supprimé',
        'success'
      )
    }
  })

}

// handle supprimer
const handleSupp=id=>{
  let temExp=expenses.filter(itm=> (itm.id!==id))
  setExpenses(temExp)

  console.log(temExp);
  console.log(`item supprimer : ${id}`);
};

// handle modifier
const handleMod=id=>{
  let expmodifie=expenses.find(itm=>(itm.id===id))
  let {charge,amount}=expmodifie;
  setCharge(charge);
  setAmount(amount);
  
  setModifier(true);
  setId(id)
  console.log(expmodifie)
};



  const montantDep=expenses.reduce((compteur,current)=>{
    return (compteur+= parseInt(current.amount));
  },0)
  let res=total- montantDep;
  let calcres=(res/total)*100;

 
  
  return (
  
    <>
    <h1 className='header'> <img className='logo' src={require('./BLATOR.png')} alt={"logo"}/></h1>
    <main className='app'>

      <div className='contHeading'>
        <article> <h2 >Budget Total :<span>{Currency.format(total)} </span></h2> </article>

        <article> <h2>  Total charges :<span> {Currency.format(montantDep)}</span> </h2> </article>

        <article> <h2> Le reste :<span> {Currency.format(res<0?0:res )} </span></h2></article>
      </div>

    <ProgressBar  Prototal={total}  progress={calcres<0?0:calcres} bgcolor={"green"} bgcolor1={(calcres>=50 && calcres<=100) ?"#103b10":"red"} />
    <Expenseform  
    montantTotal={total}
     libelleDepense={charge} 
     montanDepense={amount}
     date={date}
     categories={categorie}
     functCategorie={handleCategorie}
     functTotal={handleTotal}
     functLibDepense={handleCharge}
     functMontant={handleAmount}
     functionEnvoie={handleSubmit}
     functionDate={handleDate}
     modifs={modif}
     />
    <Expenselist  chargeslist={expenses}
    fonctSup={handleSupp} 
    fonctMod={handleMod}
    suppTous={supprimerItems}
    
    />
    </main>
    <Footer projet={"Budget Calculator"} developper={'Omar Cherti'}/>
    </>
  );
}


/*
Form>listitem>item
*/
export default App;




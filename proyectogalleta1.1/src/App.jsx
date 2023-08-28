import { useState } from 'react'
import './App.css'
import BtnQuote from './componentes/BtnQuote'
import Quote from './componentes/Quote'
import phrases from './utlis/pharases.json'
import getRandomElemArray from './utlis/getRandomElemArray'

function App() {

  //console.log(phrases)
  
   const phraseRamdon = getRandomElemArray(phrases)
   const numberRamdom = getRandomElemArray([1, 2, 3, 4])

   const [quote, setQuote] = useState(phraseRamdon)
   const [numberBg, setNumberBg ]= useState(numberRamdom)

   const bgStyle = {
   backgroundImage: `url(/fondo${numberBg}.jpg)`
   }




  return (
    <div className='container' style={bgStyle}>
      <h1 className = 'container__title' >Galleta de la fortura 👍 </h1>
        < Quote  phrase={quote} /> 
        <BtnQuote 
          setQuote={setQuote} 
          phrases={phrases} 
          setNumberBg ={setNumberBg}
        />
    </div>
  )
}

export default App

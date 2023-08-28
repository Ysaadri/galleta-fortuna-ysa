
const Quote = ({ phrase }) => {

   console.log('aqui',phrase) 

  return (
    <p className="container__phrase">{phrase.phrase}</p>
  )
}

export default Quote
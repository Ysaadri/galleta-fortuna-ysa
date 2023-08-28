import getRandomElemArray from "../utlis/getRandomElemArray"

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {
    console.log('aqui en btn ',phrases )

    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setNumberBg(getRandomElemArray([1, 2, 3, 4]))

    }
  return (
    <button className="container__btn" onClick={handleRandomPhrase}>Prueba tu suerte 👍</button>
  )
}


export default BtnQuote
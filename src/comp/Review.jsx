import { useState } from "react"
import { FaQuoteRight, FaCaretLeft, FaCaretRight   } from 'react-icons/fa';


const Review = ({reviews}) => {

  const [index, setIndex] = useState(0)
  const {name, job, image, text} = reviews[index]

  const randomNum = () =>{
    let rand = Math.trunc(Math.random() * reviews.length)
    setIndex(rand)
  }

  const prev = () =>{
    if(index === 0){
      setIndex(reviews.length - 1)
      return
    }
    setIndex((prev)=> prev -1)
  }

  const next = () =>{
    if(index === reviews.length - 1){
      setIndex(0)
    }
    setIndex((next)=> +1 )
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name.toUpperCase()} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <cite className="author">
        {name.toUpperCase()}
      </cite>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prev}><FaCaretLeft/></button>
        <button className="next-btn" onClick={next}><FaCaretRight/></button>
      </div>

      <button className="random-btn" onClick={randomNum}>Random Review</button>
    </article>
  )
}

export default Review
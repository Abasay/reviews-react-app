import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(people[index])

  const {id, name, job, image, text} = person;

  const prevButton = () =>{
    let newIndex = index - 1;
    if(newIndex < 0){
      newIndex = people.length - 1;
      setIndex(newIndex);
      setPerson(people[newIndex]);
    }
    else{
      // newIndex = index - 1;
      setIndex(newIndex);
      setPerson(people[newIndex]);
  }
    }
   



  const nextButton = () =>{
    let newIndex = index + 1;
    if(newIndex > people.length - 1){
      newIndex = 0;
      setIndex(newIndex);
      setPerson(people[newIndex]);
    }
    else{
      // newIndex = index + 1;
      setIndex(newIndex);
      setPerson(people[newIndex]);
  }
    }

  return (
    <div className="review" key={id}>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <div className="author">
        <h3>{name}</h3>
      </div>
      <h2 className='job'>{job}</h2>
      <div className="info">
        <p>{text}</p>
      </div>
      <div>
        <button className='prev-btn' onClick={() => prevButton()}><FaChevronLeft /></button>
        <button className='next-btn' onClick={() => nextButton()}><FaChevronRight /></button>
      </div>

    </div>
  );
};

export default Review;

import React, { useState } from 'react';

function TripForm() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numTravelers, setNumTravelers] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('destination:', destination);
    console.log('start date:', startDate);
    console.log('end date:', endDate);
    console.log('number of travelers:', numTravelers);
  }

  return (
    <>
    <div className='header'>
      Book Your Trip
    </div>
    <br></br>
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input type="text" value={destination} onChange={e => setDestination(e.target.value)} />
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </label>
      <br />
      <label>
        Number of Travelers:
        <input type="number" value={numTravelers} onChange={e => setNumTravelers(e.target.value)} />
      </label>
      <br />
      <button className='btn' type="submit">Book Trip</button>
    </form>
    </>
    
  );
}

export default TripForm;

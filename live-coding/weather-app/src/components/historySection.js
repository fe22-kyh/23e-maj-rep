import {useState} from 'react';
import HistoryButton from './historyButton';

export default function HistorySection({lastLocation}) {
  let locations = localStorage.getItem("history-locations");
  locations = locations === null ? [] : JSON.parse(locations);

  if(lastLocation !== '' && !locations.includes(lastLocation)) {
    locations.push(lastLocation);
    if(locations.length > 3) {
      locations = locations.slice(1);
    }
    localStorage.setItem("history-locations", JSON.stringify(locations));
  }

  const historyButtons = locations.map(location => {
    return <HistoryButton content={location} />
  });

  return (
    <section className='history-section'>
      {historyButtons}
    </section>
  )
}
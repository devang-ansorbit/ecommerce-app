import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function Loading() {
  const [loadingValue, setLoadingValue] = useState(false);
  console.log('I am Loading');
  const reply = useLocation();
  console.log(reply.state.route);
  setTimeout(() => {
    setLoadingValue(true);
  }, 2000);

  return (
    <div className='w-full h-full border'>
      {loadingValue ? (
        <Navigate to={reply.state.route} />
      ) : (
        <div className='w-40 h-40 mx-auto mt-48 '>
          <img
            className='w-full h-full'
            src='https://www.jdsurvey.com/encuestas/img/icons/progression.gif'
            alt='buffering-photos'
          />
        </div>
      )}
    </div>
  );
}

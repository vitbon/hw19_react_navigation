import React from 'react';
import './photo.css';

export default function Photo() {
  const planes = [
      "./img/main/wright-6.jpg",
      "./img/main/wright-3.jpg",
      "./img/main/wright-4.jpg",
      "./img/main/wright-1.jpg",
      "./img/main/an-225-3.jpg",
      "./img/main/an-225-2.jpg",
      "./img/main/an-225-1.jpg",
      "./img/main/an-225-5.jpg",
      "./img/main/an-225-11.jpg",
      "./img/main/an-225-6.jpg",
      "./img/main/an-225-9.jpg",
      "./img/main/an-225-10.jpg",
  ];

  return (
    <div className="photo_container">
       {
        planes.map(main =>
          <>
            <div className="photo">
              <img src={main} className="photo_pic" />
            </div>
          </>
        )
      }
    </div>
  )
}
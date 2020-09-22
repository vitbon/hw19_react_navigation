import React from 'react';
import './main.css';

export default function Main() {
  const DB = [
    {
      title: "Wright Brothers' plane",
      pic: "./img/main/wright-3.jpg",
      text: "The Wright Flyer (often retrospectively referred to as Flyer I or 1903 Flyer). The first successful " +
        "heavier-than-air powered aircraft. Designed and built by the Wright brothers, they flew it four times " +
        "on December 17, 1903, near Kill Devil Hills, about four miles (six kilometers) south of Kitty Hawk, North Carolina.",
    },
    {
      title: "An-225 Mriya",
      pic: "./img/main/an-225-3.jpg",
      text: "On April 23, 2020, the world's largest AN-225 Mriya transport aircraft returned to Airport Kyiv-Antonov-2 " +
        "with medical equipment to prevent the spread of coronavirus in Ukraine. A cargo weighing 103,880 kg with " +
        "a total volume of about 1000 cubic meters, aircraft delivered from Tianjin, China.",
    },
  ];

  return (
    <div className="plain_container">
       {
        DB.map(main =>
          <>
            <div className="plain">
              <div className="plain_title">
                {main.title}
              </div>
              <div>
                <img src={main.pic} className="plain_pic" />
              </div>
              <div className="plain_text">
                {main.text}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
import React, { useEffect } from 'react'

const Presentation = () => {


  useEffect(() => {
    const str_header = 'Mi nombre es let1s3n';
    const str_body = "Bienvenid@ a mi página";
    const charac_header = [...str_header];
    const charac_body = [...str_body];
    let i = 0;
    let j = 0;
    let body;
    const head = setInterval(() => {
      if (i >= charac_header.length) {
        clearInterval(head);
        body = setInterval(() => {
          if (j >= charac_body.length) {
            clearInterval(body);
          }
          else {
            document.getElementById('presentation-body').innerHTML += charac_body[j++];
          }
        }, 100);
      }
      else {
        document.getElementById('presentation-header').innerHTML += charac_header[i++];
      }
    }, 200)

    return () => {
      clearInterval(head);
      clearInterval(body);
    }
  }, []);

  return (
    <div className="section presentation">
      <h1 id="presentation-header" className="white-text">{''}</h1>
      <p id="presentation-body" className="white-text"></p>
    </div>
  )
}

export default Presentation;
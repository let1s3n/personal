import React from 'react'

class Presentation extends React.Component {


  render() {
    const str_header = 'Mi nombre es let1s3n';
    const str_body = "Bienvenid@ a mi página, revísala para conocer un poco más de mí.";
    const charac_header = [...str_header];
    const charac_body = [...str_body];


    let i = 0;
    let j = 0;

    const fillHeader = callback => {
      let head = setInterval(() => {
        if (i >= charac_header.length) {
          clearInterval(head);
          callback();
        }
        else {
          document.getElementById('presentation-header').innerHTML += charac_header[i++];
        }
      }, 500)
    }

    fillHeader(() => {
      setInterval(() => {
        if (j >= charac_body.length) {
          clearInterval(this);
        }
        else {
          document.getElementById('presentation-body').innerHTML += charac_body[j++];
        }
      }, 200)
    });



    return (
      <div className="container">
        <div className="section presentation">
          <h1 id="presentation-header">

          </h1>
          <p id="presentation-body"></p>


        </div>
      </div>
    )
  }


}

export default Presentation;
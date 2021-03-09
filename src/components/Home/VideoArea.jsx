import React, { useEffect } from 'react'

const VideoArea = () => {
  useEffect(() => {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.log("Something went wrong!");
        });
    }
  }, []);
  return (
    <video autoPlay="true" id="videoElement">

    </video>
  )
}

export default VideoArea;

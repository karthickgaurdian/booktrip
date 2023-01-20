import React, { useState,useRef } from 'react';
import Webcam from "react-webcam";

const Skills = () => {

  const [imageSrc, setImageSrc] = useState(null);

  const handleCapture = (data_uri) => {
    setImageSrc(data_uri);
  }
  const webCamRef = useRef(null);
  return (
    <>
     <div className='container'>
      <Webcam onCapture={handleCapture} />
      <button onClick={() => {webCamRef.current.capture()}}>Capture</button>
      {imageSrc && <img src={imageSrc} alt="Captured" />}
    </div>
    </>
  )
}

export default Skills;
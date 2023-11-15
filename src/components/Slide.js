
// import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
// import React, { useState } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';


// const Slide = () => {

//   const [ value, setValue ] = useState(0); 

//   return (
//     <RangeSlider
//       value={value}
//       onChange={changeEvent => setValue(changeEvent.target.value)}
//     />
//   );

// };
// export default Slide;

import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const Slide = () => {
  const [value, setValue] = useState(0);

  // Define a function to calculate the background color based on the slider value
  const calculateBackgroundColor = () => {
    // Adjust the formula based on your color preference
    const red = Math.round((255 * value) / 100);
    const green = Math.round((255 * (100 - value)) / 100);
    return `rgb(${red}, ${green}, 0)`;
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Apply a style to the container div with the calculated background color */}
      <div style={{ backgroundColor: calculateBackgroundColor(), padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ textAlign: 'center' }}>Slider Value: {value}</h3>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
      </div>
    </div>
  );
};

export default Slide;

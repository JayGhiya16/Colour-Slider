import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

// const minDistance = 0;

const marks = [
  {
    value: 0,
    label: `rgb(255,0,0)`
  },
  {
    value: 50,
    label: `rgb(0,255,0)`
  },
  {
    value: 100,
    label: `rgb(0,0,255)`
  }
];

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 50]);
  const [backgroundColor, setBackgroundColor] = React.useState<string>(
    "linear-gradient(90deg,red,green)"
  );
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1]), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0])]);
    }

    const red = Math.max(255 - (value[0] * 255) / 50, 0);
    const green = Math.max(0, 255 - (Math.abs(value[0] - 50) * 255) / 50);
    const blue = Math.max(0, 255 - 255 * (Math.abs(100 - value[0]) / 50));

    const red1 = Math.max(255 - (value[1] * 255) / 50, 0);
    const green1 = Math.max(0, 255 - (Math.abs(value[1] - 50) * 255) / 50);
    const blue1 = Math.max(0, 255 - 255 * (Math.abs(100 - value[1]) / 50));
    const startColor = `rgb(${red},${green},${blue})`;
    const endColor = `rgb(${red1},${green1},${blue1})`;
    setBackgroundColor(
      `linear-gradient(90deg, ${startColor} ${value[0]}%,  ${endColor} ${value[1]}%)`
    );
  };

  const [start, end] = value;

  return (
    <Box
      sx={{
        width: 600,
        p: 3,
        m:3,
        background: backgroundColor,
        transition: "background 0.5s ease"
      }}
    >
      <Slider
        getAriaLabel={() => "Color Range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        // step={50}
        sx={{
          "& .MuiSlider-rail": {
            height: "20px",
            borderRadius: 0,
            clipPath: "polygon(0% 75%,100% 0%,100% 100%,0% 100%)",
            background: `linear-gradient(90deg, #eee ${start}%, #F74 ${start}%, #F74 ${end}%, #eee ${end}%)`,
            opacity: 1
          },
          "& .MuiSlider-track": {
            display: "none"
          },
          "& .MuiSlider-thumb": {
            top: "70%",
            backgroundColor: "#F74",
            border: "4px solid #fff",
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.1), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)",
            "&:before": {
              boxShadow: "none"
            }
          },
          "& [data-index='0']:not(.MuiSlider-markLabel)": {
            top: `${70 - start / 5}%`,
            width: `calc(20px + ${0.15 * start}px)`,
            height: `calc(20px + ${0.15 * start}px)`
          },
          "& [data-index='1']:not(.MuiSlider-markLabel)": {
            top: `${70 - end / 5}%`,
            width: `calc(20px + ${0.15 * end}px)`,
            height: `calc(20px + ${0.15 * end}px)`
          },
          "& .MuiSlider-markLabel": {
            marginTop: "0.75rem",
            color: "#c0c0c0",
            "&.MuiSlider-markLabelActive": {
              color: "#F74"
            }
          },
          "& .MuiSlider-mark": {
            display: "none"
          }
        }}
      />
    </Box>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// const minDistance = 0;

// const marks = [
//   {
//     value: 0,
//     label: `rgb(255,0,0)`
//   },
//   {
//     value: 50,
//     label: `rgb(0,255,0)`
//   },
//   {
//     value: 100,
//     label: `rgb(0,0,255)`
//   }
// ];

// export default function RangeSlider() {
//   const [value, setValue] = React.useState<number[]>([0, 50]);
//   const [backgroundColor, setBackgroundColor] = React.useState<string>("");

//   const handleChange = (
//     event: Event,
//     newValue: number | number[],
//     activeThumb: number
//   ) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }

//     if (activeThumb === 0) {
//       setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
//     } else {
//       setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
//     }

//     // Calculate the background color based on the current value
//     const percentage = (value[0] / 100) * 100; // Adjust this formula based on your requirements
//     setBackgroundColor(`linear-gradient(90deg, #eee ${percentage}%, #F74 ${percentage}%, #F74 ${value[1]}%, #eee ${value[1]}%)`);
//   };

//   const [start, end] = value;

//   return (
//     <Box
//       sx={{
//         width: 200,
//         p: 3,
//         background: backgroundColor, // Apply the dynamic background color
//       }}
//     >
//       <Slider
//         getAriaLabel={() => "Color Range"}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//         marks={marks}
//         sx={{
//           "& .MuiSlider-rail": {
//             height: "20px",
//             borderRadius: 0,
//             clipPath: "polygon(0% 75%,100% 0%,100% 100%,0% 100%)",
//             background: `linear-gradient(90deg, #eee ${start}%, #F74 ${start}%, #F74 ${end}%, #eee ${end}%)`,
//             opacity: 1
//           },
//           "& .MuiSlider-track": {
//             display: "none"
//           },
//           "& .MuiSlider-thumb": {
//             top: "70%",
//             backgroundColor: "#F74",
//             border: "4px solid #fff",
//             boxShadow:
//               "0px 3px 1px -2px rgba(0,0,0,0.1), 0px 2px 2px 0px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)",
//             "&:before": {
//               boxShadow: "none"
//             }
//           },
//           "& [data-index='0']:not(.MuiSlider-markLabel)": {
//             top: `${70 - start / 5}%`,
//             width: `calc(20px + ${0.15 * start}px)`,
//             height: `calc(20px + ${0.15 * start}px)`
//           },
//           "& [data-index='1']:not(.MuiSlider-markLabel)": {
//             top: `${70 - end / 5}%`,
//             width: `calc(20px + ${0.15 * end}px)`,
//             height: `calc(20px + ${0.15 * end}px)`
//           },
//           "& .MuiSlider-markLabel": {
//             marginTop: "0.75rem",
//             color: "#c0c0c0",
//             "&.MuiSlider-markLabelActive": {
//               color: "#F74"
//             }
//           },
//           "& .MuiSlider-mark": {
//             display: "none"
//           }
//         }}
//       />
//     </Box>
//   );
// }

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// const minDistance = 0;

// export default function RangeSlider() {
//   const [value, setValue] = React.useState<number[]>([0, 50]);
//   const [backgroundColor, setBackgroundColor] = React.useState<string>(
//     "linear-gradient(90deg, ${red} ${value[0]}%,  ${endColor} ${value[1]}%)"
//   );

//   const handleChange = (
//     event: Event,
//     newValue: number | number[],
//     activeThumb: number
//   ) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }

//     if (activeThumb === 0) {
//       setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
//     } else {
//       setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
//     }

//     // Calculate the background color based on the current value
//     // const startColor = value[0] <= 33 ? `rgb(255, 0, 0)` : `linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 50%)`;
//     // const endColor = value[1] >= 66 ? `rgb(0, 0, 255)` : `linear-gradient(90deg, rgb(0, 0, 255) 50%, rgb(0, 0, 255) 100%)`;
//     // const startColor = `rgb(255-${value[0]*255/100},$Math.min(0,)$)`
//     const red = Math.max(255 - (value[0] * 255) / 50, 0);
//     const green = Math.max(0, 255 - (Math.abs(value[0] - 50) * 255) / 50);
//     const blue = Math.max(0, 255 - 255 * (Math.abs(100 - value[0]) / 50));

//     const red1 = Math.max(255 - (value[1] * 255) / 50, 0);
//     const green1 = Math.max(0, 255 - (Math.abs(value[1] - 50) * 255) / 50);
//     const blue1 = Math.max(0, 255 - 255 * (Math.abs(100 - value[1]) / 50));
//     const startColor = `rgb(${red},${green},${blue})`;
//     const endColor = `rgb(${red1},${green1},${blue1})`;
//     // console.log(startColor);
//     // console.log(endColor);
//     setBackgroundColor(
//       `linear-gradient(90deg, ${startColor} ${value[0]}%,  ${endColor} ${value[1]}%)`
//     );
//   };

//   const [start, end] = value;

//   return (
//     <Box
//       sx={{
//         width: 200,
//         p: 3,
//         background: backgroundColor,
//         transition: "background 0.5s ease" // Add a transition for smooth color changes
//       }}
//     >
//       <Slider
//         getAriaLabel={() => "Color Range"}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//       />
//     </Box>
//   );
// }

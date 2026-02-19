import './App.css'
import { useState, useEffect } from "react";
import { format } from "date-fns";
// This is a React component that displays a clock with a background color that changes based on the current time. The color is determined by the hours, minutes, and seconds of the current time, which are converted to RGB values. The clock updates every second using the useEffect hook to set an interval that updates the state with the current time. The format function from date-fns is used to display the time in a specific format.
function App() {
  const [now, setNow] = useState (new Date()); // Initialize state with the current date and time

  useEffect (() => {
    const interval = setInterval (() => { // Set up an interval to update the time every second
      setNow (new Date());
    }, 1000);
  
return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds(); // Get the current hours, minutes, and seconds from the date object

const red = Math.round((hours / 23) * 255); // Convert hours to a value between 0 and 255
const green = Math.round((minutes / 59) * 255); // Convert minutes to a value between 0 and 255
const blue = Math.round((seconds / 59) * 255);// Convert seconds to a value between 0 and 255

// Create a style object for the background color using the calculated RGB values
const colorStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
};
// Render the clock with the formatted time and the background color
  return (
  <div className='app'>
    <div className='clock-card' style={colorStyle}>
      <p className='clock-time'>
{format (now, "yyyy-MM-dd HH:mm:ss")}
</p>
    </div>
    </div>
  );
}
export default App

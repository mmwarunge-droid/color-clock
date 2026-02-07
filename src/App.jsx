import './App.css'
import { useState, useEffect } from "react";
import { format } from "date-fns";

function App() {
  const [now, setNow] = useState (new Date());

  useEffect (() => {
    const interval = setInterval (() => {
      setNow (new Date());
    }, 1000);
  
return () => clearInterval(interval);
  }, []);

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds(); 

const red = Math.round((hours / 23) * 255);
const green = Math.round((minutes / 59) * 255);
const blue = Math.round((seconds / 59) * 255);

const colorStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
};

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

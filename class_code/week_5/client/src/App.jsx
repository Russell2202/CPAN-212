import { useState } from "react";


const App = () => {


  const handleButton = async () =>{
    try {
      const response = await fetch('http://localhost:8000/data')
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.log(error)
      
    }
  }

  return(<div>

    <button onClick={handleButton}>  CLICK ME </button>
    </div>
  
  )
}

export default App;
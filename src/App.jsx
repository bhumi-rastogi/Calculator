import "./App.css"
import { useState } from "react"

function App() {
  const [count, setCount] = useState("");

  const handleClick = (e) => {
    const value =e.target.innerText;
    if (["+", "-", "*", "/"].includes(count.slice(-1)) && ["+", "-", "*", "/"].includes(value)) {
      setCount(count.slice(0, -1) + value);
    } else {
      setCount(count + value);
    }
  };

  const handleEqual = () => {
    if (count === "" || ["+", "-", "*", "/"].includes(count.slice(-1))) {
      setCount("");
      return;
    }
    try{
      const value = eval(count);
      setCount(value.toString());
    } catch(err) {
      setCount("Error");
    }
  };


  const ACbutton = () => {
    setCount("");
  };

  const Delbutton = () => {
    setCount(count.slice(0, -1));
  };



  return (
    <div className="body">
      <div id="calculator" className="screen" >
        {count === "" ? 0 : count}
      </div>
      <div className="box">
        <div className="row">

          <button onClick={ACbutton} className="AC">
            AC
          </button>

          <button onClick={Delbutton} className="DEL">
            DEL
          </button>

          <button onClick={handleClick} className="operator">
            /
          </button>
          
        </div>

        <div className="row">

          <button onClick={handleClick} className="operator">
            1
          </button>

          <button onClick={handleClick} className="operator">
            2
          </button>

          <button onClick={handleClick} className="operator">
            3
          </button>
          
          <button onClick={handleClick} className="operator">
            *
          </button>

        </div>

        <div className="row">

          <button onClick={handleClick} className="operator">
            4
          </button>

          <button onClick={handleClick} className="operator">
            5
          </button>

          <button onClick={handleClick} className="operator">
            6
          </button>

          <button onClick={handleClick} className="operator">
            -
          </button>

        </div>

        <div className="row">

          <button onClick={handleClick} className="operator">
            7
          </button>

          <button onClick={handleClick} className="operator">
            8
          </button>

          <button onClick={handleClick} className="operator">
            9
          </button>

          <button onClick={handleClick} className="operator">
            +
          </button>

        </div>

        <div className="row">

          <button onClick={handleClick} className="operator">
            .
          </button>

          <button onClick={handleClick} className="operator">
            0
          </button>

          <button onClick={handleEqual} className="operator">
            =
          </button>

        </div>
      </div>
      </div>
  );
}

export default App;
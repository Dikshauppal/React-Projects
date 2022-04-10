import { useState } from "react";
import "./App.css";
import atmicon from "./assets/images/atmicon.png";
import RupeeTemplate from "./components/rupeetemplate/rupeetemplate";
import coinsicon from "./assets/images/coinsicon.png"

function App() {
  const [amount, setAmount] = useState();
  const [thousand, setThousand] = useState();
  const [fiveHundred, setFiveHundred] = useState();
  const [twoHundred, setTwoHundred] = useState();
  const [hundred, setHundred] = useState();
  const [fifty, setFifty] = useState();
  const [twenty, setTwenty] = useState();
  const [ten, setTen] = useState();
  const [denomThousand, setDenomThousand] = useState(false);
  const [denomFivehundred, setDenomFiveHundred] = useState(false);
  const [denomTwohundred, setDenomTwoHundred] = useState(false);
  const [denomHundred, setDenomHundred] = useState(false);
  const [denomFifty, setDenomFifty] = useState(false);
  const [denomTewnty, setDenomTwenty] = useState(false);
  const [denomTen, setDenomTen] = useState(false);
  const[error, setError]=useState("");


  const assignAmountHandle = (e) => {
    setAmount(e.target.value);
    setThousand();
    setFiveHundred();
    setTwoHundred();
    setHundred();
    setFifty();
    setTwenty();
    setTen();
    setDenomThousand(false);
    setDenomFiveHundred(false);
    setDenomTwoHundred(false);
    setDenomHundred(false);
    setDenomFifty(false);
    setDenomTwenty(false);


  };
  const assignDenomHandle = (value) => {
    if (value === 1000) {
      setDenomThousand(!denomThousand);
    }
    if (value === 500) {
      setDenomFiveHundred(!denomFivehundred);
    }
    if (value === 200) {
      setDenomTwoHundred(!denomTwohundred);
    }
    if (value === 100) {
      setDenomHundred(!denomHundred);
    }
    if (value === 50) {
      setDenomFifty(!denomFifty);
    }
    if (value === 20) {
      setDenomTwenty(!denomTewnty);
    }
    if (value === 10) {
      setDenomTen(!denomTen);
    }

  };

  const resetHandle = () => {
    setThousand();
    setFiveHundred();
    setTwoHundred();
    setHundred();
    setFifty();
    setTwenty();
    setTen();
    setDenomThousand(false);
    setDenomFiveHundred(false);
    setDenomTwoHundred(false);
    setDenomHundred(false);
    setDenomFifty(false);
    setDenomTwenty(false);
    setDenomTen(false);
    setError(false)
    setAmount(0);
  };

  const calculateHandle = () => {

    setThousand();
    setFiveHundred();
    setTwoHundred();
    setHundred();
    setFifty();
    setTwenty();
    setTen();
    setError(false);

    if(isNaN(amount))
    {
      setError("PLEASE ENTER A VALID NUMBER")
    }
    else{

      if(amount >500000)
      {
        setError("VALID LIMIT IS UPTO 5,00,000. PlEASE RESET THE SYSTEM AND ENTER AMOUNT AGAIN.")
      }
      else{
    if(amount%10 !== 0 )
    {
        setError(<>PLEASE ENTER A VALID AMOUNT<img src={coinsicon} alt="Coins Icon"></img>COINS NOT SUPPORTED</>)
    }
    else{
    var amountvalue = amount;
    if (
      denomThousand ||
      denomFivehundred ||
      denomHundred ||
      denomTwohundred ||
      denomFifty||
      denomTewnty ||
      denomTen 
  
    ) {
      if (denomThousand && amountvalue >= 1000) {
        setThousand(Math.floor(amountvalue / 1000));
        amountvalue = amountvalue % 1000;
      }
      if (denomFivehundred && amountvalue >= 500) {
        setFiveHundred(Math.floor(amountvalue / 500));
        amountvalue = amountvalue % 500;
      }
      if (denomTwohundred && amountvalue >= 200) {
        setTwoHundred(Math.floor(amountvalue / 200));
        amountvalue = amountvalue % 200;
      }
      if (denomHundred && amountvalue >= 100) {
        setHundred(Math.floor(amountvalue / 100));
        amountvalue = amountvalue % 100;
      }
      if (denomFifty && amountvalue >= 50) {
        setFifty(Math.floor(amountvalue / 50));
        amountvalue = amountvalue % 50;
      }
      if (denomTewnty && amountvalue >= 100) {
        setTwenty(Math.floor(amountvalue / 20));
        amountvalue = amountvalue % 20;
      }
      if (denomTen && amountvalue >= 10) {
        setTen(Math.floor(amountvalue / 10));
        amountvalue = amountvalue % 10;
      }
   
    }
    if (amountvalue >= 1000) {
      setThousand(Math.floor(amountvalue / 1000));
      amountvalue = amountvalue % 1000;
    }
    if (amountvalue >= 500) {
      setFiveHundred(Math.floor(amountvalue / 500));
      amountvalue = amountvalue % 500;
    }
    if (amountvalue >= 200) {
      setTwoHundred(Math.floor(amountvalue / 200));
      amountvalue = amountvalue % 200;
    }
    if (amountvalue >= 100) {
      setHundred(Math.floor(amountvalue / 100));
      amountvalue = amount % 100;
    }
    if (amountvalue >= 50) {
      setFifty(Math.floor(amountvalue / 50));
      amountvalue = amountvalue % 50;
    }
    if (amountvalue >= 20) {
      setTwenty(Math.floor(amountvalue / 20));
      amountvalue = amountvalue % 20;
    }
    if (amountvalue >= 10) {
      setTen(Math.floor(amountvalue / 10));
      amountvalue = amountvalue % 10;
    }
    }
  }
  }
  };

  return (
    <>
    <div className="grid">
      <div className=" grid-item heading">
        WELCOME TO ATM
        <img src={atmicon} alt="ATM Icon" className="atm-img"></img>
      </div>
      <div className="grid-item  center-align-amount">
        <label>
          Amount <span className="mandatory">*</span> :{" "}
        </label>
        <input
          className="input-box mb-r"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => {
            assignAmountHandle(e);
          }}
        ></input>
        <label>Denomination : </label>
        <button
          className={denomThousand ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(1000);
          }}
        >
          1000
        </button>
        <button
          className={denomFivehundred ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(500);
          }}
        >
          500
        </button>
        <button
          className={denomTwohundred ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(200);
          }}
        >
          200
        </button>
        <button
          className={denomHundred ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(100);
          }}
        >
          100
        </button>
        <button
          className={denomFifty ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(50);
          }}
        >
          50
        </button>
        <button
          className={denomTewnty ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(20);
          }}
        >
          20
        </button>
        <button
          className={denomTen ? "deno-button-select" : "deno-button"}
          onClick={() => {
            assignDenomHandle(10);
          }}
        >
          10
        </button>
      
      </div>
      <div className=" grid-item">
        <button
          className={`center-align-button   ${!amount || amount === "0" ? ("disable-cursor"):("")}`}
          onClick={() => {
            calculateHandle();
          }}
        >
          Withdrawal
        </button>
        <button
          className="center-align-reset "
          onClick={() => {
            resetHandle();
          }}
        >
          Reset
        </button>
      </div>
      {!error?(  <div className="grid-item ">
        {thousand ? <RupeeTemplate amount="1000" value={thousand} /> : ""}
        {fiveHundred ? <RupeeTemplate amount="500" value={fiveHundred} /> : ""}
        {twoHundred ? <RupeeTemplate amount="200" value={twoHundred} /> : ""}
        {hundred ? <RupeeTemplate amount="100" value={hundred} /> : ""}
        {fifty ? <RupeeTemplate amount="50" value={fifty} /> : ""}
        {twenty ? <RupeeTemplate amount="20" value={twenty} /> : ""}
        {ten ? <RupeeTemplate amount="10" value={ten} /> : ""}
      </div>):(<>
        <div className="grid-item ">{error}</div>
     
      </> )}
      </div>
    </>
  );
}

export default App;

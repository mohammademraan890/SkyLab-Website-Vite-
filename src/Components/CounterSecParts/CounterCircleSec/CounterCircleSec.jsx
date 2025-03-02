import CounterCircle from "../../Includes/CounterCircle/CounterCircle";
import "./CounterCircleSec.css";
const CounterCircleSec = () => {
  return (
    <div className="counter-right-circles-sec d-flex align-items-center justify-content-center flex-column">
      <div className=" counter-right-top-circles-sec d-flex align-items-center justify-content-center ">
       <CounterCircle title="Award Winning" counter={9999} bgColor="var(--secondary-color)" />
        <CounterCircle title="Complete Cases" counter={9999} bgColor="var(--txt-color)" />
      </div>
      <CounterCircle title="Happy Clients" counter={9999} bgColor="var(--rare-color)" btmCircle={true} />
    </div>
  );
};

export default CounterCircleSec;

import "./Background8.css";

const Background8 = ({
  className = "",
  prop,
  chooseTheDestination,
  andESIMDataPlan,
  image,
}) => {
  return (
    <div className={`background20 ${className}`}>
      <div className="overlay-wrapper4">
        <div className="overlay7">
          <b className="b6">{prop}</b>
        </div>
      </div>
      <div className="frame-parent105">
        <div className="choose-the-destination-and-esi-container">
          <div className="choose-the-destination-container1">
            <p className="choose-the-destination1">{chooseTheDestination}</p>
            <p className="and-esim-data1">{andESIMDataPlan}</p>
          </div>
        </div>
        <img className="image-icon57" alt="" src={image} />
      </div>
    </div>
  );
};


export default Background8;

import "./Item.css";

const Item = ({
  className = "",
  heading4GlobalNetworkReli,
  experienceDependable,
  connectivityWithYesimsRob,
  globalNetworkStayConnecte,
  keyBusinessDestinations,
  ensuringYourTeamIsAlways,
  reachable,
  image,
}) => {
  return (
    <div className={`item20 ${className}`}>
      <div className="item-inner">
        <div className="heading-4-global-network-rel-parent">
          <div className="heading-415">{heading4GlobalNetworkReli}</div>
          <p className="experience-dependable-connecti-container">
            <span className="experience-dependable">
              {experienceDependable}
            </span>
            <span className="connectivity-with-yesims">
              {connectivityWithYesimsRob}
            </span>
            <span className="global-network-stay">
              {globalNetworkStayConnecte}
            </span>
            <span className="key-business-destinations">
              {keyBusinessDestinations}
            </span>
            <span className="ensuring-your-team">
              {ensuringYourTeamIsAlways}
            </span>
            <span className="reachable">{reachable}</span>
          </p>
        </div>
      </div>
      <img className="image-icon95" loading="lazy" alt="" src={image} />
    </div>
  );
};



export default Item;

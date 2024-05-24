import "./Link.css";

const Link = ({ className = "", onLinkContainerClick }) => {
  return (
    <div className={`link4 ${className}`} onClick={onLinkContainerClick}>
      <div className="frame-parent98">
        <div className="image-wrapper10">
          <img className="image-icon55" alt="" src="/image-4@2x.png" />
        </div>
        <div className="international-esim-group">
          <div className="international-esim1">International eSIM</div>
          <div className="unlimited-data-pay1">
            Unlimited data. Pay as you go
          </div>
        </div>
      </div>
      <div className="svg-wrapper23">
        <img className="svg-icon75" alt="" src="/svg-5.svg" />
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onLinkContainerClick: PropTypes.func,
};

export default Link;

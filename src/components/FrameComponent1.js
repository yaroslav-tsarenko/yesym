import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`item-group ${className}`}>
      <select className="item8">
        <option value="option_1">Option 1</option>
      </select>
      <div className="item9">
        <img className="image-icon30" alt="" src="/image-11@2x.png" />
      </div>
      <div className="item10">
        <img className="image-icon31" alt="" src="/image-12@2x.png" />
      </div>
      <div className="item11">
        <img className="image-icon32" alt="" src="/image-13@2x.png" />
      </div>
      <div className="item12">
        <img className="image-icon33" alt="" src="/image-14@2x.png" />
      </div>
      <div className="item13">
        <img className="image-icon34" alt="" src="/image-15@2x.png" />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

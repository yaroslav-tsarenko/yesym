import "./Section1.css";

const Section1 = ({ className = "", image1 }) => {
  return (
    <div className={`section15 ${className}`}>
      <b className="heading-213">Our partners</b>
      <div className="we-are-trusted-by-leading-conn-parent">
        <p className="we-are-trusted1">
          We are trusted by leading connectivity, media and technology brands
          around the world
        </p>
        <div className="item-container">
          <select className="item14">
            <option value="option_1">Option 1</option>
          </select>
          <div className="item15">
            <img className="image-icon65" alt="" src="/image-16@2x.png" />
          </div>
          <div className="item16">
            <img className="image-icon66" alt="" src={image1} />
          </div>
          <div className="item17">
            <img className="image-icon67" alt="" src="/image-18@2x.png" />
          </div>
          <div className="item18">
            <img className="image-icon68" alt="" src="/image-19@2x.png" />
          </div>
          <div className="item19">
            <img className="image-icon69" alt="" src="/image-20@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
};

export default Section1;

import { useMemo } from "react";
import "./Section2.css";

const Section2 = ({
  className = "",
  image,
  image1,
  image6,
  ourIndustryLeadingCarrierMargin,
}) => {
  const ourIndustryLeadingCarriersStyle = useMemo(() => {
    return {
      margin: ourIndustryLeadingCarrierMargin,
    };
  }, [ourIndustryLeadingCarrierMargin]);

  return (
    <div className={`section14 ${className}`}>
      <b className="heading-212">Supported networks</b>
      <div className="our-industry-leading-carriers-parent">
        <div
          className="our-industry-leading-carriers"
          style={ourIndustryLeadingCarriersStyle}
        >
          Our industry-leading carriers ensure quality and deliver seamless
          connectivity anywhere, anytime
        </div>
        <div className="item-group">
          <div className="item6">
            <img className="image-icon58" alt="" src={image} />
          </div>
          <div className="item7">
            <img className="image-icon59" alt="" src={image1} />
          </div>
          <div className="item8">
            <img className="image-icon60" alt="" src="/image-10@2x.png" />
          </div>
          <div className="item9">
            <img className="image-icon61" alt="" src="/image-11@2x.png" />
          </div>
          <div className="item10">
            <img className="image-icon62" alt="" src="/image-12@2x.png" />
          </div>
          <div className="item11">
            <img className="image-icon63" alt="" src="/image-13@2x.png" />
          </div>
          <div className="item12">
            <img className="image-icon64" alt="" src={image6} />
          </div>
          <div className="item13">
            <b className="network-operators">
              <p className="network">800+ network</p>
              <p className="operators">operators</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Section2;

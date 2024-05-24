import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <div className={`section16 ${className}`}>
      <div className="section-inner6">
        <div className="download-yesim-from-appstore-group">
          <p className="download-yesim-from-container1">
            <span className="download-yesim-from1">Download Yesim from</span>
            <span className="appstore-google1">{`AppStore & Google Play`}</span>
          </p>
          <div className="button-parent1">
            <img
              className="button-icon1"
              loading="lazy"
              alt=""
              src="/button.svg"
            />
            <div className="frame-wrapper21">
              <div className="link-parent1">
                <button className="link5">
                  <img className="image-icon78" alt="" src="/image-29@2x.png" />
                </button>
                <button className="link6">
                  <img className="image-icon79" alt="" src="/image-30@2x.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-parent18">
        <img className="image-icon80" alt="" src="/image-31@2x.png" />
        <img className="image-icon81" alt="" src="/image-32@2x.png" />
      </div>
    </div>
  );
};


export default Section;

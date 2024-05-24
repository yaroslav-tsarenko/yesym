import "./FooterComponent.css";
import FrameComponent from "./FrameComponent";

const FooterComponent = ({ className = "" }) => {
  return (
      <>
        <div className={`container-parent9 ${className}`}>
          <img className="container-icon26" alt="" src="/container-19.svg"/>
          <div className="heading-4-product-info-container">
            <b className="heading-410">Product info</b>
            <div className="link-regions2">Regions</div>
            <div className="link-payment2">Payment</div>
            <div className="link-compatible2">Compatible devices</div>
            <div className="link-virtual2">Virtual numbers</div>
            <div className="link-for2">For business</div>
            <div className="link-our4">Our carriers</div>
            <div className="link-our5">Our partners</div>
          </div>
          <div className="frame-parent113">
            <div className="heading-4-popular-destinatio-container">
              <b className="heading-411">Popular destinations</b>
              <div className="link-turkey2">Turkey</div>
              <div className="link-spain2">Spain</div>
              <p className="united-arab-emirates-container2">
                <span className="united-arab-emirates3">United Arab Emirates</span>
                <span className="uae2">(UAE)</span>
              </p>
              <div className="link-united2">United States (USA)</div>
              <div className="link-italy2">Italy</div>
            </div>
            <div className="heading-4-help-container">
              <b className="heading-412">Help</b>
              <a className="link-faq2">FAQ</a>
              <div className="support2">Support</div>
              <div className="link-yesim2">Yesim Installation</div>
            </div>
          </div>
          <div className="heading-4-more-info-container">
            <b className="heading-413">More info</b>
            <a className="link-about2">About us</a>
            <div className="link-contacts2">Contacts</div>
            <div className="link-refund2">Refund Policy</div>
            <div className="link-blog2">Blog</div>
          </div>
        </div>
        <FrameComponent/>
      </>
  );
};


export default FooterComponent;

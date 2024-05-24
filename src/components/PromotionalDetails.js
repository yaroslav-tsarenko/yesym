import CookieStorage from "./CookieStorage";
import PropTypes from "prop-types";
import "./PromotionalDetails.css";

const PromotionalDetails = ({ className = "" }) => {
  return (
    <section className={`promotional-details ${className}`}>
      <div className="promotional-info">
        <div className="promotional-contact">
          <div className="your-email-andor">
            -Your email and/or phone number;
          </div>
          <div className="promotional-purpose">
            <p className="purpose-to-notify-container">
              <b>Purpose:</b>
              <span>{` To notify You about changes to `}</span>
              <b>GENESIS</b>
              <span>
                {" "}
                Services, General terms and Conditions, the Platform and to keep
                You up to
              </span>
            </p>
            <div className="date-to-contact">
              date; To contact You for market research purposes.;
            </div>
          </div>
          <div className="the-source-of-container4">
            <span>
              <b>The Source of Personal Data:</b>
              <span> You;</span>
            </span>
          </div>
          <h3 className="type-or-categories-container5">
            {`7) Type or Categories of Your Personal Data: `}
            <span className="application-data">Application data</span>, e.g.:
          </h3>
        </div>
        <div className="application-device">
          <p className="your-ip-address1">
            -Your IP address, Your Device, Your operating system, the date and
            time of Your access to the Platform https://partners.yesim.app/,
          </p>
          <p className="the-type-of">
            the type of browser Your use, Your online activities and Your
            preferences, the external sites that referred you to our Services;
          </p>
          <p className="purpose-to-remember-container1">
            <span>
              <b>Purpose:</b>
              <span>
                {" "}
                to remember stateful information; to record Your browsing
                activity (including clicking particular buttons, logging in; to
              </span>
            </span>
          </p>
          <CookieStorage
            websiteAndThe="Platform and the "
            servicesToGatherStatistic=" Services; to gather statistical information about visits to the Platform;"
            otherUsersAdvertisersAndA="! Other Users, advertisers and advertising networks that serve ads on the Platform may also use their own mechanisms, like"
            policy="Policy.;"
            propAlignSelf="unset"
            propAlignSelf1="unset"
            propMinWidth="54.4px"
          />
          <div className="the-source-of-container5">
            <span>
              <b>The Source of Personal Data:</b>
              <span> Your Device (Your browser);</span>
            </span>
          </div>
          <div className="data-disclosure">
            <div className="legal-data">
              <div className="authority-source">
                <h3 className="type-or-categories1">{`8) Type or Categories of Your Personal Data: `}</h3>
              </div>
              <h3 className="personal-data-received">
                Personal Data received from law
              </h3>
            </div>
            <h3 className="enforcement-authorities-or">
              enforcement authorities or courts and/or other competent
              authorities.
            </h3>
          </div>
        </div>
        <p className="purpose-to-perform-container">
          <b className="purpose">Purpose:</b>
          <span className="to-perform-legal">{` To perform legal obligations stipulated by law or `}</span>
          <b className="competent-authorities">competent authorities</b>
        </p>
      </div>
    </section>
  );
};

PromotionalDetails.propTypes = {
  className: PropTypes.string,
};

export default PromotionalDetails;

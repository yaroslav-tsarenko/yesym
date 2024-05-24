import CookieStorage from "./CookieStorage";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-home">
            <a className="link-home3">Home</a>
            <div className="footer-logo">
              <img
                className="svg-icon28"
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
            </div>
            <a className="link-privacy2">Privacy policy</a>
          </div>
          <div className="footer-heading">
            <h1 className="heading-13">Privacy policy</h1>
          </div>
        </div>
        <div className="data-type">
          <h3 className="type-or-categories-container">
            {`1) Type or Categories of Your Personal Data: `}
            <span className="agreement-registration-data">
              Agreement (registration) data
            </span>
            , e.g.:
          </h3>
        </div>
        <div className="identity">
          <div className="identity-info">
            <p className="your-identity-information">
              -Your identity information, as name, surname, identity code or
              number if any, payment method, date of birth, residence ( also tax
            </p>
            <p className="residence-address-email">
              residence) address, email, phone number, - identity document
              data-when provided by law;
            </p>
            <p className="emphasis-additional-container">
              <span>
                <i className="additional">Additional:</i>
                <b> Employment data:</b>
                <span>
                  {" "}
                  Your identity information, as name, surname, identity code or
                  number, if any, payment method, date
                </span>
              </span>
            </p>
            <div className="identity-details">
              <p className="of-birth-residence">
                of birth, residence address, e-mail, phone number, - identity
                document data-when provided by law data about education, skills,
              </p>
              <div className="knowledges-work">knowledges, work</div>
            </div>
            <div className="identity-use">
              <div className="purpose-to-identify-container">
                <b>Purpose:</b>
                <span>
                  {" "}
                  to identify You, to process any Your applications or
                  registrations and/or to take steps to enter into, to perform,
                  to
                </span>
              </div>
              <p className="implicate-to-amend">
                implicate, to amend, to terminate or to cancel any Agreement
                with You (including, but not limited to employment, service,
                purchase,
              </p>
              <div className="identity-receive">
                <p className="licences-and-any-container">
                  <span>{`licences and any and all other agreement, You may enter into with the `}</span>
                  <b>GENESIS</b>
                  <span>{` as a natural person); to provide `}</span>
                  <b>GENESIS</b>
                  <span> Services</span>
                </p>
                <p className="to-you-or-container">
                  <span>
                    <span>{`to You, or for `}</span>
                    <b>GENESIS</b>
                    <span>{` to receive Services and goods from You; to administer Your User Account and provide `}</span>
                    <b>GENESIS</b>
                    <span> customer</span>
                  </span>
                </p>
              </div>
            </div>
            <p className="services-to-inform">
              services; to inform You on important and/or legal events
              considering the Agreement with You, including legal disputes,
              violations of
            </p>
            <p className="terms-and-conditions">
              terms and Conditions etc.; To conduct credit and fraud checks if
              You apply for a monthly price plan account, and to help to verify
            </p>
            <p className="your-identity-and">
              Your identity and to decide whether to accept Your application or
              future application (only if required by law); To inform You on
            </p>
            <div className="identity-details1">
              <p className="important-andor-legal">
                important and/or legal events considering the Agreement with
                You, including legal disputes, violations of terms and
                conditions To
              </p>
              <p className="maintain-the-accountancy">
                maintain the accountancy, personnel and employment management;
                etc.;
              </p>
            </div>
            <p className="the-source-of-container">
              <span>
                <b>The Source of Personal Data:</b>
                <span>
                  {" "}
                  You; Credit reference and fraud prevention agencies (if
                  applicable); Group Account holder, if
                </span>
              </span>
            </p>
            <p className="applicable-our-agents-container">
              <span>
                <span>{`applicable; Our agents; `}</span>
                <b>Additionally, for employment data:</b>
                <span>
                  {" "}
                  Recruitment and employment agencies, You have provided Your
                </span>
              </span>
            </p>
            <div className="data-sharing">
              <div className="personal-data-to">personal data to.</div>
              <div className="cookie-types-parent">
                <div className="cookie-types">
                  <div className="cookie-category">
                    <h3 className="type-or-categories">{`2) Type or Categories of Your Personal Data: `}</h3>
                  </div>
                  <h3 className="website-cookies-data">
                    Website (cookies) data (See also
                  </h3>
                </div>
                <div className="cookie-types1">
                  <div className="cookies-policy-wrapper">
                    <u className="cookies-policy">Cookies Policy)</u>
                  </div>
                  <h3 className="eg">, e.g.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cookie-source">
          <div className="cookie-source-details">
            <p className="your-ip-address">
              Your IP address, Your Device, Your operating system, the date and
              time of Your access to the Website, the type of browser Your
            </p>
            <div className="cookie-use">
              <p className="useyour-online-activities-container">
                <span>{`use,Your online activities and Your preferences, the external sites that referred you to `}</span>
                <b>GENESIS</b>
                <span> Services</span>
              </p>
              <p className="purpose-to-remember-container">
                <span>
                  <b>Purpose:</b>
                  <span>
                    {" "}
                    To remember stateful information; To record Your browsing
                    activity (including clicking particular buttons, logging
                    in); To
                  </span>
                </span>
              </p>
            </div>
            <CookieStorage
              websiteAndThe="Website and the "
              servicesToGatherStatistic=" Services; To gather statistical information about visits to the Website;"
              otherUsersAdvertisersAndA="! Other Users, advertisers and advertising networks that serve ads on the Website may also use their own mechanisms, like"
              policy="Policy."
            />
            <p className="the-source-of-container1">
              <span>
                <b>The Source of Personal Data:</b>
                <span>
                  {" "}
                  You; Credit reference and fraud prevention agencies (if
                  applicable); Group Account holder, if
                </span>
              </span>
            </p>
            <p className="applicable-our-agents-container1">
              <span>
                <span>{`applicable; Our agents; `}</span>
                <b>Additionally, for employment data:</b>
                <span>
                  {" "}
                  Recruitment and employment agencies, You have provided Your
                </span>
              </span>
            </p>
            <div className="cookie-data-sharing">
              <div className="personal-data-to1">personal data to.</div>
              <h3 className="type-or-categories-container1">
                {`3) Type or Categories of Your Personal Data: `}
                <span className="login-data">Login data</span>.
              </h3>
            </div>
          </div>
        </div>
        <div className="login-purpose">
          <div className="login-processing">
            <p className="purpose-to-process-container">
              <b>Purpose:</b>
              <span>
                {" "}
                To process any Your applications or registrations and/or to
                enter into, to perform, to amend, to terminate or to cancel any
              </span>
            </p>
            <div className="agreement-with-you-container">
              <span>
                <span>{`Agreement with You; to provide `}</span>
                <b>GENESIS</b>
                <span>
                  {" "}
                  Services to You, or to receive Services and goods from You; To
                  administer Your User
                </span>
              </span>
            </div>
            <div className="account-and-provide-container">
              <span>
                <span>{`Account and provide `}</span>
                <b>GENESIS</b>
                <span> customer services.</span>
              </span>
            </div>
            <b className="a-type-or-container">
              <span>
                {`3A) Type or Categories of Your Personal Data: `}
                <span className="application-and-facebook">
                  Application and Facebook login data, e.g.
                </span>
              </span>
            </b>
            <div className="user-id-of">
              user ID of individuals who are logged in to Facebook, information
              from events, such as "Download" or "login", along with any
            </div>
            <div className="application-details">
              <p className="additional-parameters-provided">
                additional parameters provided, information from events that are
                logged implicitly, such as integration with Facebook Login or
                the
              </p>
              <p className="like-button-basic">
                "Like" button, basic interactions in the Application (e.g. app
                installs, app launches) and system events that are collected
              </p>
              <p className="automatically-the-lifetime">
                automatically the lifetime of the access, error information. the
                mobile OS type and version, information on Application version
                You
              </p>
            </div>
            <p className="use-your-device">
              use, Your device opt-out setting, Your IP address, device related
              metrics: time zone, device OS, device model, carrier, screen size,
            </p>
            <p className="processor-cores-total">
              processor cores, total disk space, remaining disk space.
            </p>
            <p className="the-source-of">
              The Source of Personal Data: You; Your device, Your browser.
            </p>
            <h3 className="type-or-categories-container2">
              {`4) Type or Categories of Your Personal Data: `}
              <span className="billing-and-accounting">
                Billing and accounting data
              </span>
              , e.g.
            </h3>
          </div>
        </div>
        <div className="billing-details">
          <div className="billing-information">
            <p className="your-selected-tariff">
              -Your selected tariff plan: number of minutes of voice call
              (incoming or outgoing), megabytes of data (incoming or outgoing),
            </p>
            <p className="messaging-sms-other-container">
              <span>
                <span>{`messaging (sms), other payments (including salaries) and payment terms, defined in Your agreement with `}</span>
                <b>GENESIS</b>
                <span> and related</span>
              </span>
            </p>
            <div className="billing-payment">
              <div className="taxes-fees-and">
                taxes, fees and other obligatory payments.
              </div>
              <div className="purpose-to-organize-container">
                <span>
                  <b>Purpose:</b>
                  <span> To organize billing and accountancy management.</span>
                </span>
              </div>
            </div>
            <p className="the-source-of-container2">
              <span>
                <b>The Source of Personal Data:</b>
                <span> You; Public data bases.</span>
              </span>
            </p>
            <h3 className="type-or-categories-container3">
              {`5) Type or Categories of Your Personal Data: `}
              <span className="correspondence-data">Correspondence data</span>,
              e.g.:
            </h3>
          </div>
        </div>
        <div className="correspondence-details">
          <div className="correspondence-info">
            <p className="your-identity-information1">
              -Your identity information as name, surname and correspondence
              address /method and other Personal Data You submit to
            </p>
            <p className="genesis-by-any-container">
              <span>
                <b>GENESIS</b>
                <span>
                  {" "}
                  by any written or oral correspondence, including claims,
                  complaints, offers, also job offers;
                </span>
              </span>
            </p>
            <div className="purpose-to-manage-container">
              <span>
                <b>Purpose:</b>
                <span> To manage Your complaints, feedback and queries.;</span>
              </span>
            </div>
            <div className="the-source-of-container3">
              <span>
                <b>The Source of Personal Data:</b>
                <span> You;</span>
              </span>
            </div>
            <h3 className="type-or-categories-container4">
              {`6) Type or Categories of Your Personal Data: `}
              <span className="promotional-data">Promotional data</span>, e.g.:
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

import { useMemo } from "react";
import "./CookieStorage.css";

const CookieStorage = ({
  className = "",
  websiteAndThe,
  servicesToGatherStatistic,
  otherUsersAdvertisersAndA,
  policy,
  propAlignSelf,
  propAlignSelf1,
  propMinWidth,
}) => {
  const cookieStorageStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const cookieGovernanceStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const policyStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`cookie-storage ${className}`} style={cookieStorageStyle}>
      <p className="remember-arbitrary-pieces">
        remember arbitrary pieces of information that the user previously
        entered into form fields; To analyse, administer and improve the
      </p>
      <p className="website-and-the-container">
        <span>{websiteAndThe}</span>
        <b>GENESIS</b>
        <span>{servicesToGatherStatistic}</span>
      </p>
      <p className="other-users-advertisers">{otherUsersAdvertisersAndA}</p>
      <div className="cookie-governance" style={cookieGovernanceStyle}>
        <p className="cookies-these-third-party">
          cookies. These third-party cookies are governed by the privacy
          policies of the entities placing the ads and are not subject to this
        </p>
        <div className="policy" style={policyStyle}>
          {policy}
        </div>
      </div>
    </div>
  );
};

CookieStorage.propTypes = {
  className: PropTypes.string,
  websiteAndThe: PropTypes.string,
  servicesToGatherStatistic: PropTypes.string,
  otherUsersAdvertisersAndA: PropTypes.string,
  policy: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default CookieStorage;

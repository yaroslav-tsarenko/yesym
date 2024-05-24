import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  sonyXperia10IIILite,
  sonyXperia10IV,
  sonyXperia5IV,
  sonyXperia1IV,
}) => {
  return (
    <div className={`frame-parent118 ${className}`}>
      <div className="item-sony-xperia-10-iii-lite-wrapper">
        <p className="item-sony-container">
          <span className="sony-xperia-10">{sonyXperia10IIILite}</span>
          <span className="sony-xperia-101">{sonyXperia10IV}</span>
          <span className="sony-xperia-5">{sonyXperia5IV}</span>
          <span className="sony-xperia-1">{sonyXperia1IV}</span>
        </p>
      </div>
      <p className="notice-your-device-container">
        <span className="notice-your-device">
          Notice: Your device must be unlocked. You can check with your carrier
          to see if there is
        </span>
        <span className="anything-you-can">
          anything you can do to unlock the eSIM in your device. Within one
          device model there can
        </span>
        <span className="be-devices-both">
          be devices both with eSIM technology and without. Please check your
          device before the
        </span>
        <span className="purchase">purchase.</span>
      </p>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  sonyXperia10IIILite: PropTypes.string,
  sonyXperia10IV: PropTypes.string,
  sonyXperia5IV: PropTypes.string,
  sonyXperia1IV: PropTypes.string,
};

export default FrameComponent5;

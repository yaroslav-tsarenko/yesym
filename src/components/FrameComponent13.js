import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./FrameComponent13.css";

const FrameComponent13 = ({ className = "" }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState(
    new Date("2024-04-25")
  );
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`frame-parent36 ${className}`}>
        <div className="frame-parent37">
          <div className="link-home-container">
            <a className="link-home2">Home</a>
            <div className="svg-wrapper5">
              <img
                className="svg-icon25"
                loading="lazy"
                alt=""
                src="/svg.svg"
              />
            </div>
            <a className="link-blog1">Blog</a>
          </div>
          <div className="wrapper-overlayshadow">
            <img
              className="overlayshadow-icon"
              loading="lazy"
              alt=""
              src="/overlayshadow@2x.png"
            />
          </div>
        </div>
        <div className="last-post">Last post</div>
        <div className="heading-1-turkey-resorts-10-parent">
          <h1 className="heading-12">
            Turkey Resorts: 10 Best Places to Visit in 2024
          </h1>
          <div className="link-image-parent">
            <img
              className="link-image"
              loading="lazy"
              alt=""
              src="/link--image@2x.png"
            />
            <div className="vika-laki-wrapper">
              <div className="vika-laki">Vika Laki</div>
            </div>
            <div className="wrapper">
              <div className="div">•</div>
            </div>
            <div className="frame">
              <DatePicker
                value={frameDateTimePickerValue}
                onChange={(newValue) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "transparent",
                    borderTopWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "transparent" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "rgba(12, 12, 13, 0.46)",
                    fontSize: 14,
                  },
                  input: {
                    color: "rgba(12, 12, 13, 0.46)",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 19,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <div className="minutes-to-read">10 minutes to read</div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;

import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Nav4.css";

const Nav4 = ({ className = "" }) => {
  return (
    <header className={`nav4 ${className}`}>
      <div className="link-image-wrapper1">
        <img
          className="link-image4"
          loading="lazy"
          alt=""
          src="/link--image@2x.png"
        />
      </div>
      <div className="link-button-wrapper1">
        <div className="link-button24">
          <a className="internet1">Internet</a>
        </div>
      </div>
      <a className="link-button25">Virtual numbers</a>
      <a className="link-button26">Compatible devices</a>
      <div className="button-wrapper9">
        <div className="button27">
          <a className="more3">More</a>
          <div className="svg-wrapper34">
            <img className="svg-icon94" alt="" src="/svg.svg" />
          </div>
        </div>
      </div>
      <div className="nav-inner2">
        <div className="frame-parent129">
          <div className="frame-wrapper27">
            <div className="frame-parent130">
              <div className="button-parent7">
                <FormControl
                  className="button28"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "16px",
                    width: "83.10000000000036px",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "rgba(12, 12, 13, 0.74)",
                      fontSize: 12,
                      fontWeight: "Medium",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "12px",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="12px"
                        height="12px"
                        src="/svg-1.svg"
                        style={{ marginRight: "12.00000000000182px" }}
                      />
                    )}
                  >
                    <MenuItem>$, USD</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="button29">
                  <a className="eng4">ENG</a>
                  <div className="svg-wrapper35">
                    <img className="svg-icon95" alt="" src="/svg-2.svg" />
                  </div>
                </div>
              </div>
              <div className="button-svg-wrapper3">
                <img className="button-svg22" alt="" src="/button--svg-2.svg" />
              </div>
            </div>
          </div>
          <button className="button30">
            <a className="sign-in4">Sign in</a>
          </button>
        </div>
      </div>
    </header>
  );
};

Nav4.propTypes = {
  className: PropTypes.string,
};

export default Nav4;

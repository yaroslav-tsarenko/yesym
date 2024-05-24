import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Nav2.css";

const Nav2 = ({ className = "" }) => {
  return (
    <header className={`nav2 ${className}`}>
      <div className="nav-child">
        <div className="link-image-parent">
          <img
            className="link-image2"
            loading="lazy"
            alt=""
            src="/link--image@2x.png"
          />
          <div className="link-button-internet-wrapper">
            <a className="link-button19">Internet</a>
          </div>
        </div>
      </div>
      <div className="nav-inner1">
        <div className="link-button-parent11">
          <div className="link-button20">
            <a className="compatible-devices">Compatible devices</a>
          </div>
          <FormControl
            className="button15"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "20px",
              width: "78.5px",
              height: "32px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "32px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "32px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "32px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "32px",
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
                marginLeft: "16px",
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
                  src="/svg.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>More</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className="frame-parent117">
        <div className="frame-wrapper25">
          <div className="button-parent4">
            <FormControl
              className="button16"
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
                    style={{ marginRight: "12px" }}
                  />
                )}
              >
                <MenuItem>$, USD</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="button-wrapper4">
              <div className="button17">
                <a className="eng2">ENG</a>
                <div className="svg-wrapper29">
                  <img
                    className="svg-icon89"
                    loading="lazy"
                    alt=""
                    src="/svg-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="button-svg-wrapper1">
              <img
                className="button-svg20"
                loading="lazy"
                alt=""
                src="/button--svg-2.svg"
              />
            </div>
          </div>
        </div>
        <button className="button18">
          <a className="sign-in2">Sign in</a>
        </button>
      </div>
    </header>
  );
};

Nav2.propTypes = {
  className: PropTypes.string,
};

export default Nav2;

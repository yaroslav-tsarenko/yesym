import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Nav1.css";

const Nav1 = ({ className = "" }) => {
  return (
    <header className={`nav1 ${className}`}>
      <div className="link-image-container">
        <img
          className="link-image1"
          loading="lazy"
          alt=""
          src="/link--image@2x.png"
        />
      </div>
      <div className="link-button-frame">
        <div className="link-button18">
          <a className="virtual-numbers">Virtual numbers</a>
        </div>
      </div>
      <div className="frame-parent116">
        <div className="button-wrapper2">
          <div className="button11">
            <a className="more1">More</a>
            <div className="svg-wrapper27">
              <img className="svg-icon87" alt="" src="/svg.svg" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper24">
          <div className="button-parent3">
            <FormControl
              className="button12"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "16px",
                width: "83.09999999999991px",
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
                    style={{ marginRight: "11.999999999999543px" }}
                  />
                )}
              >
                <MenuItem>$, USD</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="button-wrapper3">
              <div className="button13">
                <a className="eng1">ENG</a>
                <div className="svg-wrapper28">
                  <img className="svg-icon88" alt="" src="/svg-2.svg" />
                </div>
              </div>
            </div>
            <div className="button-svg-frame">
              <img className="button-svg19" alt="" src="/button--svg-2.svg" />
            </div>
          </div>
        </div>
        <button className="button14">
          <a className="sign-in1">Sign in</a>
        </button>
      </div>
    </header>
  );
};



export default Nav1;

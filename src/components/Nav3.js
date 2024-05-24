import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Nav3.css";

const Nav3 = ({ className = "" }) => {
  return (
    <header className={`nav3 ${className}`}>
      <div className="link-image-frame">
        <img
          className="link-image3"
          loading="lazy"
          alt=""
          src="/link--image@2x.png"
        />
      </div>
      <nav className="frame-nav">
        <nav className="link-button-internet-parent">
          <a className="link-button21">Internet</a>
          <a className="link-button22">Virtual numbers</a>
          <a className="link-button23">Compatible devices</a>
        </nav>
      </nav>
      <div className="button-wrapper5">
        <div className="button21">
          <a className="more2">More</a>
          <div className="svg-wrapper32">
            <img className="svg-icon92" loading="lazy" alt="" src="/svg.svg" />
          </div>
        </div>
      </div>
      <div className="button-wrapper6">
        <FormControl
          className="button22"
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
      </div>
      <div className="button-wrapper7">
        <div className="button23">
          <a className="eng3">ENG</a>
          <div className="svg-wrapper33">
            <img className="svg-icon93" alt="" src="/svg-2.svg" />
          </div>
        </div>
      </div>
      <div className="button-svg-wrapper2">
        <img
          className="button-svg21"
          loading="lazy"
          alt=""
          src="/button--svg-2.svg"
        />
      </div>
      <button className="button24">
        <a className="sign-in3">Sign in</a>
      </button>
    </header>
  );
};

export default Nav3;

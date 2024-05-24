import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Nav.css";

const Nav = ({ className = "" }) => {
  return (
    <header className={`nav ${className}`}>
      <div className="link-image-wrapper">
        <img
          className="link-image"
          loading="lazy"
          alt=""
          src="/link--image@2x.png"
        />
      </div>
      <div className="link-button-wrapper">
        <div className="link-button12">
          <a className="internet">Internet</a>
        </div>
      </div>
      <div className="nav-inner">
        <div className="link-button-virtual-number-parent">
          <a className="link-button13">Virtual numbers</a>
          <a className="link-button14">Compatible devices</a>
        </div>
      </div>
      <div className="button-wrapper">
        <div className="button5">
          <a className="more">More</a>
          <div className="svg-wrapper20">
            <img className="svg-icon72" alt="" src="/svg.svg" />
          </div>
        </div>
      </div>
      <div className="button-frame">
        <FormControl
          className="button6"
          variant="standard"
          sx={{
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "16px",
            width: "83.09999999999997px",
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
                style={{ marginRight: "12.099999999999966px" }}
              />
            )}
          >
            <MenuItem>$, USD</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="button-wrapper1">
        <div className="button7">
          <a className="eng">ENG</a>
          <div className="svg-wrapper21">
            <img className="svg-icon73" alt="" src="/svg-2.svg" />
          </div>
        </div>
      </div>
      <div className="button-svg-wrapper">
        <img className="button-svg16" alt="" src="/button--svg-2.svg" />
      </div>
      <button className="button8">
        <a className="sign-in">Sign in</a>
      </button>
    </header>
  );
};


export default Nav;

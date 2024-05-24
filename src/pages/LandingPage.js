import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Nav from "../components/Nav";
import FrameComponent3 from "../components/FrameComponent3";
import { useNavigate } from "react-router-dom";
import Link from "../components/Link";
import LinkButton2 from "../components/LinkButton2";
import LinkButton1 from "../components/LinkButton1";
import LinkButton from "../components/LinkButton";
import Background9 from "../components/Background9";
import Background8 from "../components/Background8";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import FrameComponent2 from "../components/FrameComponent2";
import Background7 from "../components/Background7";
import Background6 from "../components/Background6";
import Background5 from "../components/Background5";
import Background4 from "../components/Background4";
import Background3 from "../components/Background3";
import Background2 from "../components/Background2";
import Background1 from "../components/Background1";
import Background from "../components/Background";
import Section from "../components/Section";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./LandingPage.css";

const LandingPage = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://yesim.app/international-esim/ - 13/05/2024, 14:33:24 EEST" to the project
  }, []);

  const onLinkButtonClick = useCallback(() => {
    // Please sync "https://yesim.app/country/united-states/ - 13/05/2024, 14:33:43 EEST" to the project
  }, []);

  const onLinkButton2Click = useCallback(() => {
    navigate("/regions");
  }, [navigate]);

  const onLinkButton1Click = useCallback(() => {
    // Please sync "https://yesim.app/global/ - 13/05/2024, 14:33:07 EEST" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="landingpage">
        <div className="image-parent">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <img className="button-svg" alt="" src="/button--svg.svg" />
          <img className="button-svg1" alt="" src="/button--svg-1.svg" />
        </div>
        <div className="link-terms">Terms of Service</div>
        <div className="link-cof">COF Agreement</div>
        <div className="yesim">© 2019 - 2024 Yesim</div>
        <Nav />
        <main className="landingpage-inner">
          <section className="frame-parent">
            <div className="frame-wrapper">
              <div className="frame-group">
                <FrameComponent3
                  eSIMMobileDataPlansFor="eSIM mobile data plans for"
                  tourismAndBusiness="tourism and business"
                />
                <div className="frame-container">
                  <div className="overlay-parent">
                    <TextField
                      className="overlay"
                      placeholder="Find a country"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <img width="20px" height="20px" src="/svg-4.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "46px",
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          paddingLeft: "16px",
                          borderRadius: "16px",
                        },
                        "& .MuiInputBase-input": {
                          paddingLeft: "8px",
                          color: "rgba(255, 255, 255, 0.74)",
                        },
                      }}
                    />
                    <div className="link-button-parent">
                      <button className="link-button">
                        <img
                          className="image-icon1"
                          alt=""
                          src="/image-1@2x.png"
                        />
                        <div className="countries-wrapper">
                          <div className="countries">Countries</div>
                        </div>
                      </button>
                      <div
                        className="link-button1"
                        onClick={onLinkButton2Click}
                      >
                        <img
                          className="image-icon2"
                          alt=""
                          src="/image-2@2x.png"
                        />
                        <div className="regions-wrapper">
                          <div className="regions">Regions</div>
                        </div>
                      </div>
                      <div
                        className="link-button2"
                        onClick={onLinkButton1Click}
                      >
                        <img
                          className="image-icon3"
                          alt=""
                          src="/image-3@2x.png"
                        />
                        <div className="global-wrapper">
                          <div className="global">Global</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link onLinkContainerClick={onLinkContainerClick} />
                  <div className="background">
                    <div className="heading-2-popular-destinatio-parent">
                      <b className="heading-2">Popular destinations</b>
                      <div className="frame-div">
                        <div className="link-button-group">
                          <LinkButton2
                            container="/container.svg"
                            unitedStatesUSA="United States (USA)"
                            from159GB="from $1.59/GB"
                            onLinkButton2Click={onLinkButtonClick}
                          />
                          <LinkButton1 />
                        </div>
                        <div className="wrapper">
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
                                textColor: "#0c0c0d",
                                fontSize: 17,
                              },
                              input: {
                                color: "#0c0c0d",
                                fontSize: 17,
                                textAlign: "left",
                                fontWeight: "400",
                              },
                              "& .MuiInputBase-root": {
                                height: 60,
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
                                helperText: "Turkey",
                                placeholder: "Turkey",
                              },
                              openPickerIcon: {
                                component: () => (
                                  <img
                                    width="32px"
                                    height="32px"
                                    src="/container-3.svg"
                                  />
                                ),
                              },
                            }}
                            label="Thailand"
                          />
                        </div>
                        <div className="link-button-container">
                          <LinkButton
                            container="/container-4.svg"
                            egypt="Egypt"
                            from319GB="from $3.19/GB"
                          />
                          <LinkButton
                            container="/container-5.svg"
                            egypt="Spain"
                            from319GB="from $1.59/GB"
                            propMinWidth="45px"
                          />
                        </div>
                        <div className="link-button-parent1">
                          <LinkButton
                            container="/container-6.svg"
                            egypt="Italy"
                            from319GB="from $1.59/GB"
                            propMinWidth="34px"
                          />
                          <LinkButton
                            container="/container-7.svg"
                            egypt="Germany"
                            from319GB="from $1.59/GB"
                            propMinWidth="72.5px"
                          />
                        </div>
                        <div className="link-button-parent2">
                          <LinkButton
                            container="/container-8.svg"
                            egypt="China"
                            from319GB="from $2.75/GB"
                            propMinWidth="46px"
                          />
                          <LinkButton2
                            container="/container-9@2x.png"
                            unitedStatesUSA="United Kingdom (UK)"
                            from159GB="from $1.71/GB"
                          />
                        </div>
                        <div className="link-button-parent3">
                          <LinkButton
                            container="/container-10@2x.png"
                            egypt="Israel"
                            from319GB="from $1.71/GB"
                            propMinWidth="43.1px"
                          />
                          <LinkButton
                            container="/container-11.svg"
                            egypt="France"
                            from319GB="from $1.76/GB"
                            propMinWidth="55px"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="button"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "14",
                        background: "#ff7a00",
                        borderRadius: "20px",
                        "&:hover": { background: "#ff7a00" },
                        height: 40,
                      }}
                    >
                      Show all eSIM cards
                    </Button>
                  </div>
                  <div className="section">
                    <div className="section-inner">
                      <div className="frame-parent1">
                        <div className="heading-2-how-does-esim-from-wrapper">
                          <h2 className="heading-21">
                            How does eSIM from Yesim work?
                          </h2>
                        </div>
                        <div className="button-svg-parent">
                          <img
                            className="button-svg2"
                            alt=""
                            src="/button--svg-3.svg"
                          />
                          <img
                            className="button-svg3"
                            alt=""
                            src="/button--svg-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <Background9 />
                      <Background8
                        prop="2"
                        chooseTheDestination="Choose the destination"
                        andESIMDataPlan="and eSIM data plan"
                        image="/image-6@2x.png"
                      />
                      <Background8
                        prop="3"
                        chooseTheDestination="Buy eSIM card most"
                        andESIMDataPlan="suitable for your needs"
                        image="/image-7@2x.png"
                      />
                    </div>
                  </div>
                  <Section2
                    image="/image-8@2x.png"
                    image1="/image-9@2x.png"
                    image6="/image-14@2x.png"
                  />
                  <Section1 image1="/image-17@2x.png" />
                  <div className="section1">
                    <FrameComponent2
                      ourUsersFeedbackAboutESIM="Our users' feedback about eSIM service from"
                      yesim="Yesim"
                    />
                    <div className="container1">
                      <Background7 />
                      <Background6 />
                      <Background5 coverageAndSpeedOfTheInte="coverage and speed of the internet are" />
                      <Background4 />
                      <Background3 />
                      <Background2 />
                      <Background1 />
                      <Background />
                    </div>
                  </div>
                  <div className="section2">
                    <h2 className="heading-22">
                      FAQ about virtual SIM cards from Yesim
                    </h2>
                    <div className="frame-parent2">
                      <div className="frame-parent3">
                        <div className="what-is-an-esim-and-how-to-get-wrapper">
                          <div className="what-is-an">
                            What is an eSIM and how to get use of Yesim?
                          </div>
                        </div>
                        <img className="svg-icon" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider" />
                      <div className="frame-parent4">
                        <div className="how-to-activate-esim-mobile-in-wrapper">
                          <div className="how-to-activate">
                            How to activate eSIM mobile Internet from Yesim?
                          </div>
                        </div>
                        <img className="svg-icon1" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider1" />
                      <div className="frame-parent5">
                        <div className="can-i-make-phone-calls-or-send-wrapper">
                          <div className="can-i-make">
                            Can I make phone calls or send SMS?
                          </div>
                        </div>
                        <img className="svg-icon2" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider2" />
                      <div className="frame-parent6">
                        <div className="can-an-esim-card-be-re-used-wrapper">
                          <div className="can-an-esim">
                            Can an eSIM card be re-used?
                          </div>
                        </div>
                        <img className="svg-icon3" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider3" />
                      <div className="frame-parent7">
                        <div className="is-my-device-compatible-with-e-wrapper">
                          <div className="is-my-device">
                            Is my device compatible with eSIM technology and the
                            Yesim app?
                          </div>
                        </div>
                        <img className="svg-icon4" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider4" />
                      <div className="frame-parent8">
                        <div className="when-does-the-esim-mobile-data-wrapper">
                          <div className="when-does-the">
                            When does the eSIM mobile data plan duration start?
                          </div>
                        </div>
                        <img className="svg-icon5" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider5" />
                      <div className="frame-parent9">
                        <div className="can-i-extend-the-esim-celllula-wrapper">
                          <div className="can-i-extend">
                            Can I extend the eSIM celllular phone data plan
                            expiration that I’m currently using?
                          </div>
                        </div>
                        <img className="svg-icon6" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider6" />
                      <div className="frame-parent10">
                        <div className="what-are-ycoins-wrapper">
                          <div className="what-are-ycoins">
                            What are Ycoins?
                          </div>
                        </div>
                        <img className="svg-icon7" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider7" />
                      <div className="frame-parent11">
                        <div className="can-i-get-a-refund-for-yesim-s-wrapper">
                          <div className="can-i-get">
                            Can I get a refund for Yesim services?
                          </div>
                        </div>
                        <img className="svg-icon8" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider8" />
                      <div className="frame-parent12">
                        <div className="can-i-tether-use-personal-ho-wrapper">
                          <div className="can-i-tether">
                            Can I tether / use Personal Hotspot?
                          </div>
                        </div>
                        <img className="svg-icon9" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider9" />
                      <div className="frame-parent13">
                        <div className="can-i-keep-my-personal-whatsap-wrapper">
                          <div className="can-i-keep">
                            Can I keep my personal WhatsApp / Snapchat /
                            Telegram number while using Yesim's eSIM?
                          </div>
                        </div>
                        <img className="svg-icon10" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider10" />
                      <div className="frame-parent14">
                        <div className="how-to-transfer-esim-to-a-new-wrapper">
                          <div className="how-to-transfer">
                            How to transfer eSIM to a new phone?
                          </div>
                        </div>
                        <img className="svg-icon11" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider11" />
                      <div className="frame-parent15">
                        <div className="are-there-any-contracts-like-t-wrapper">
                          <div className="are-there-any">
                            Are there any contracts like those from traditional
                            eSIM carriers?
                          </div>
                        </div>
                        <img className="svg-icon12" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider-parent">
                        <div className="horizontal-divider12" />
                        <div className="frame-parent16">
                          <FormControl
                            className="parent"
                            variant="standard"
                            sx={{
                              borderTopWidth: "0px",
                              borderRightWidth: "0px",
                              borderBottomWidth: "0px",
                              borderLeftWidth: "0px",
                              borderRadius: "0px 0px 0px 0px",
                              width: "97.72727272727272%",
                              height: "36px",
                              m: 0,
                              p: 0,
                              "& .MuiInputBase-root": {
                                m: 0,
                                p: 0,
                                minHeight: "36px",
                                justifyContent: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInputLabel-root": {
                                m: 0,
                                p: 0,
                                minHeight: "36px",
                                display: "inline-flex",
                              },
                              "& .MuiMenuItem-root": {
                                m: 0,
                                p: 0,
                                height: "36px",
                                display: "inline-flex",
                              },
                              "& .MuiSelect-select": {
                                m: 0,
                                p: 0,
                                height: "36px",
                                alignItems: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInput-input": { m: 0, p: 0 },
                              "& .MuiInputBase-input": {
                                color: "#0c0c0d",
                                fontSize: 14,
                                fontWeight: "Medium",
                                fontFamily: "Inter",
                                textAlign: "left",
                                p: "0 !important",
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
                                  width="16px"
                                  height="16px"
                                  src="/svg-39.svg"
                                  style={{}}
                                />
                              )}
                            >
                              <MenuItem>{`What is the difference between eSIM from Yesim and standard roaming data plans from physical
mobile operators?`}</MenuItem>
                            </Select>
                            <FormHelperText />
                          </FormControl>
                          <div className="horizontal-divider13" />
                        </div>
                        <div className="frame-parent17">
                          <div className="what-is-the-fair-usage-policy-wrapper">
                            <div className="what-is-the">
                              What is the fair usage policy for eSIM unlimited
                              data plans?
                            </div>
                          </div>
                          <img
                            className="svg-icon13"
                            alt=""
                            src="/svg-26.svg"
                          />
                        </div>
                      </div>
                      <div className="horizontal-divider14" />
                      <div className="frame-parent18">
                        <div className="why-is-my-data-speed-slow-wrapper">
                          <div className="why-is-my">
                            Why is my data speed slow?
                          </div>
                        </div>
                        <img className="svg-icon14" alt="" src="/svg-26.svg" />
                      </div>
                      <div className="horizontal-divider15" />
                      <div className="frame-parent19">
                        <div className="how-can-i-check-my-data-plan-b-wrapper">
                          <div className="how-can-i">
                            How can I check my data plan balance and limits?
                          </div>
                        </div>
                        <img className="svg-icon15" alt="" src="/svg-26.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <Section />
              </div>
            </div>
            <FrameComponent1 />
            <FrameComponent />
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default LandingPage;

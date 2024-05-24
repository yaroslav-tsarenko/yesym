import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Nav4 from "../components/Nav4";
import FrameComponent3 from "../components/FrameComponent3";
import Link from "../components/Link";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import LinkButton3 from "../components/LinkButton3";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Background from "../components/Background";
import FooterComponent from "../components/FooterComponent";
import FrameComponent from "../components/FrameComponent";
import "./Regions.css";
import Header from "../components/header/Header";

const Regions = () => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "https://yesim.app/international-esim/ - 13/05/2024, 14:33:24 EEST" to the project
  }, []);

  const onLinkButtonClick = useCallback(() => {
    // Please sync "https://yesim.app/regions/south-caribbean-cruise-esim/ - 13/05/2024, 14:35:50 EEST" to the project
  }, []);

  const onLinkButton2Click = useCallback(() => {
    // Please sync "https://yesim.app/regions/europe-esim/ - 13/05/2024, 14:35:29 EEST" to the project
  }, []);

  const onLinkButton1Click = useCallback(() => {
    // Please sync "https://yesim.app/global/ - 13/05/2024, 14:33:07 EEST" to the project
  }, []);

  return (

      <>
        <Header/>
        <div className="regions1">
          <div className="image-parent3">
            <img className="image-icon37" alt="" src="/image-landing.svg"/>
            <img className="button-svg10" alt="" src="/button--svg.svg"/>
            <img className="button-svg11" alt="" src="/button--svg-1.svg"/>
          </div>
          <div className="link-terms4">Terms of Service</div>
          <div className="link-cof4">COF Agreement</div>
          <div className="yesim4">© 2019 - 2024 Yesim</div>
          <main className="regions-inner">
            <section className="frame-parent63">
              <div className="frame-wrapper8">
                <div className="frame-parent64">
                  <FrameComponent3
                      eSIMMobileDataPlansFor="One Yesim, Many"
                      tourismAndBusiness="Destinations!"
                      propDisplay="unset"
                  />
                  <div className="frame-parent65">
                    <div className="overlay-group">
                      <TextField
                          className="overlay2"
                          placeholder="Find a country"
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                                <img width="20px" height="20px" src="/svg-4.svg"/>
                            ),
                          }}
                          sx={{
                            "& fieldset": {border: "none"},
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
                      <div className="link-button-parent8">
                        <div className="link-button8">
                          <img
                              className="image-icon38"
                              alt=""
                              src="/image-112@2x.png"
                          />
                          <div className="countries-container">
                            <div className="countries2">Countries</div>
                          </div>
                        </div>
                        <button className="link-button9">
                          <img
                              className="image-icon39"
                              alt=""
                              src="/image-25@2x.png"
                          />
                          <div className="regions-container">
                            <div className="regions2">Regions</div>
                          </div>
                        </button>
                        <div className="link-button10" onClick={onLinkButton1Click}>
                          <img
                              className="image-icon40"
                              alt=""
                              src="/image-3@2x.png"
                          />
                          <div className="global-container">
                            <div className="global1">Global</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link onLinkContainerClick={onLinkContainerClick}/>
                    <div className="background7">
                      <div className="heading-2-regions-wrapper">
                        <b className="heading-29">Regions</b>
                      </div>
                      <FrameComponent9
                          overlay="/overlay.svg"
                          southCaribbeanCruise="South Caribbean cruise"
                          countries="8 countries"
                          overlay1="/overlay.svg"
                          easternCaribbeanCruise="Eastern Caribbean cruise"
                          countries1="9 countries"
                          onLinkButtonClick={onLinkButtonClick}
                      />
                      <FrameComponent8
                          overlay="/overlay-2.svg"
                          europe="Europe"
                          countries="31 countries"
                          overlay1="/overlay-3.svg"
                          asiaPacific="Asia Pacific"
                          countries1="15 countries"
                          onLinkButton2Click={onLinkButton2Click}
                      />
                      <div className="link-button-parent9">
                        <LinkButton3
                            overlay="/overlay-4.svg"
                            northAmerica="North America"
                            countries="3 countries"
                        />
                        <LinkButton3
                            overlay="/overlay-5.svg"
                            northAmerica="South America"
                            countries="11 countries"
                            propMinWidth="117.1px"
                        />
                      </div>
                      <FrameComponent9
                          overlay="/overlay-6.svg"
                          southCaribbeanCruise="Western Caribbean cruise"
                          countries="6 countries"
                          overlay1="/overlay-7.svg"
                          easternCaribbeanCruise="Middle East"
                          countries1="8 countries"
                          propAlignSelf="stretch"
                          propGap="20px"
                          propFlex="unset"
                          propMinWidth="unset"
                          propDisplay="inline-block"
                          propMinWidth1="93px"
                      />
                      <FrameComponent8
                          overlay="/overlay-8.svg"
                          europe="Africa"
                          countries="15 countries"
                          overlay1="/overlay-9.svg"
                          asiaPacific="Scandinavian"
                          countries1="6 countries"
                          propMinWidth="47.9px"
                          propMinWidth1="106.4px"
                          propMinWidth2="66.4px"
                      />
                      <div className="frame-parent66">
                        <div className="link-button-parent10">
                          <LinkButton3
                              overlay="/overlay-10.svg"
                              northAmerica="Central Asia"
                              countries="6 countries"
                              propMinWidth="96.1px"
                          />
                          <LinkButton3
                              overlay="/overlay-11.svg"
                              northAmerica="South East Asia"
                              countries="8 countries"
                              propMinWidth="124px"
                          />
                        </div>
                        <div className="link-button11">
                          <div className="overlay-container">
                            <img
                                className="overlay-icon"
                                alt=""
                                src="/overlay-12@2x.png"
                            />
                            <div className="balkans-parent">
                              <div className="balkans">Balkans</div>
                              <div className="countries3">12 countries</div>
                            </div>
                          </div>
                          <div className="svg-wrapper18">
                            <img className="svg-icon47" alt="" src="/svg-5.svg"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section10">
                      <div className="section-inner2">
                        <div className="frame-parent67">
                          <div className="heading-2-how-does-esim-from-frame">
                            <h2 className="heading-210">
                              How does eSIM from Yesim work?
                            </h2>
                          </div>
                          <div className="button-svg-parent2">
                            <img
                                className="button-svg12"
                                alt=""
                                src="/button--svg-3.svg"
                            />
                            <img
                                className="button-svg13"
                                alt=""
                                src="/button--svg-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container7">
                        <div className="background8">
                          <div className="background-inner">
                            <div className="frame-parent68">
                              <div className="overlay-frame">
                                <div className="overlay3">
                                  <b className="b2">1</b>
                                </div>
                              </div>
                              <div className="frame-parent69">
                                <div className="frame-wrapper9">
                                  <div className="frame-parent70">
                                    <div className="check-your-wrapper">
                                      <b className="check-your">{`Check your `}</b>
                                    </div>
                                    <b className="device">device</b>
                                  </div>
                                </div>
                                <div className="frame-parent71">
                                  <div className="compatibility-wrapper">
                                    <b className="compatibility">compatibility</b>
                                  </div>
                                  <div className="in-our-list"> in our list</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                              className="image-icon41"
                              alt=""
                              src="/image-5@2x.png"
                          />
                        </div>
                        <div className="background9">
                          <div className="overlay-wrapper1">
                            <div className="overlay4">
                              <b className="b3">2</b>
                            </div>
                          </div>
                          <div className="frame-parent72">
                            <div className="choose-the-destination-and-esi-wrapper">
                              <div className="choose-the-destination-container">
                                <p className="choose-the-destination">
                                  Choose the destination
                                </p>
                                <p className="and-esim-data">and eSIM data plan</p>
                              </div>
                            </div>
                            <img
                                className="image-icon42"
                                alt=""
                                src="/image-6@2x.png"
                            />
                          </div>
                        </div>
                        <div className="background10">
                          <div className="overlay-wrapper2">
                            <div className="overlay5">
                              <b className="b4">3</b>
                            </div>
                          </div>
                          <div className="frame-parent73">
                            <div className="buy-esim-card-most-suitable-fo-container">
                              <div className="buy-esim-card-container1">
                                <p className="buy-esim-card1">Buy eSIM card most</p>
                                <p className="suitable-for-your1">
                                  suitable for your needs
                                </p>
                              </div>
                            </div>
                            <img
                                className="image-icon43"
                                alt=""
                                src="/image-7@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Section2
                        image="/image-82@2x.png"
                        image1="/image-92@2x.png"
                        image6="/image-141@2x.png"
                        ourIndustryLeadingCarrierMargin="0"
                    />
                    <Section1 image1="/image-171@2x.png"/>
                    <div className="section11">
                      <div className="section-inner3">
                        <div className="our-users-feedback-about-esim-parent">
                          <h2 className="our-users-feedback-container">
                            <p className="our-users-feedback">
                              Our users' feedback about eSIM service from
                            </p>
                            <p className="yesim5">Yesim</p>
                          </h2>
                          <div className="frame-wrapper10">
                            <div className="button-svg-parent3">
                              <img
                                  className="button-svg14"
                                  alt=""
                                  src="/button--svg-3.svg"
                              />
                              <img
                                  className="button-svg15"
                                  alt=""
                                  src="/button--svg-4.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container8">
                        <div className="background11">
                          <div className="image-parent4">
                            <img
                                className="image-icon44"
                                alt=""
                                src="/image-21@2x.png"
                            />
                            <div className="frame-wrapper11">
                              <div className="james-p-parent">
                                <div className="james-p">James P.</div>
                                <img
                                    className="container-icon9"
                                    alt=""
                                    src="/container-12@2x.png"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="works-very-well-parent">
                            <div className="works-very-well">Works very well</div>
                            <div className="works-very-well-almost-wherev-parent">
                              <p className="works-very-well-container">
                            <span className="works-very-well1">
                              Works very well, almost wherever you need
                            </span>
                                <span className="to-be-all">
                              to be all around the world, so if you need
                            </span>
                                <span className="dependable-data-get">
                              dependable data, get this service and you
                            </span>
                                <span className="wont-be-disappointed">
                              won’t be disappointed but make your sure
                            </span>
                                <span className="apn-is-set">
                              APN is set correctly otherwise you only have
                            </span>
                                <span className="a-service-but">
                              a service but no data.
                            </span>
                              </p>
                              <div className="svg-group">
                                <img
                                    className="svg-icon48"
                                    alt=""
                                    src="/svg-18.svg"
                                />
                                <div className="verified-purchaser1">
                                  Verified Purchaser · IOS
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="background12">
                          <div className="image-parent5">
                            <img
                                className="image-icon45"
                                alt=""
                                src="/image-21@2x.png"
                            />
                            <div className="frame-wrapper12">
                              <div className="sandra-j-parent">
                                <div className="sandra-j">Sandra J.</div>
                                <img
                                    className="container-icon10"
                                    alt=""
                                    src="/container-13.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="very-satisfied-parent">
                            <b className="very-satisfied">Very satisfied!</b>
                            <p className="very-satisfied-used-container">
                          <span className="very-satisfied-used">
                            Very satisfied! Used Yesim on my trips to
                          </span>
                              <span className="uzbekistan-azerbaijan-and">
                            Uzbekistan, Azerbaijan and in Turkey -
                          </span>
                              <span className="everywhere-coverage-was">
                            everywhere coverage was stable and the
                          </span>
                              <span className="price-really-good">
                            price really good. Very convenient way to
                          </span>
                              <span className="stay-connected-while">
                            stay connected while traveling!
                          </span>
                            </p>
                          </div>
                          <div className="svg-parent1">
                            <img className="svg-icon49" alt="" src="/svg-18.svg"/>
                            <div className="verified-purchaser2">
                              Verified Purchaser · IOS
                            </div>
                          </div>
                        </div>
                        <div className="background13">
                          <div className="frame-parent74">
                            <div className="image-wrapper9">
                              <img
                                  className="image-icon46"
                                  alt=""
                                  src="/image-21@2x.png"
                              />
                            </div>
                            <div className="mohammed-h">
                          <span className="mohammed-h-txt-container">
                            <p className="mohammed">Mohammed</p>
                            <p className="h">H.</p>
                          </span>
                            </div>
                            <img
                                className="container-icon11"
                                alt=""
                                src="/container-14.svg"
                            />
                          </div>
                          <div className="frame-parent75">
                            <div className="top-app-for-the-international-parent">
                              <div className="top-app-for-container">
                            <span className="top-app-for-container1">
                              <p className="top-app-for">
                                Top app for the international
                              </p>
                              <p className="traveling">traveling!</p>
                            </span>
                              </div>
                              <p className="top-app-for-container2">
                            <span className="top-app-for1">
                              Top app for the international traveling! The
                            </span>
                                <span className="coverage-and-speed">
                              coverage and speed of the internet are
                            </span>
                                <span className="great-i-have">
                              great. I have tested it already in 6 countries
                            </span>
                                <span className="and-have-no">
                              and have no issues at all. Highly recommend.
                            </span>
                              </p>
                            </div>
                            <div className="svg-parent2">
                              <img
                                  className="svg-icon50"
                                  alt=""
                                  src="/svg-18.svg"
                              />
                              <div className="verified-purchaser3">
                                Verified Purchaser · IOS
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="background14">
                          <div className="image-parent6">
                            <img
                                className="image-icon47"
                                alt=""
                                src="/image-21@2x.png"
                            />
                            <div className="frame-wrapper13">
                              <div className="henrike-m-parent">
                                <div className="henrike-m">Henrike M.</div>
                                <img
                                    className="container-icon12"
                                    alt=""
                                    src="/container-15.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="frame-parent76">
                            <div className="international-esim-gives-the-f-parent">
                              <p className="international-esim-gives-container">
                            <span className="international-esim-gives-container1">
                              <span className="international-esim-gives">
                                International eSIM gives the
                              </span>
                              <span className="flexibility-i-was">
                                flexibility I was looking for
                              </span>
                            </span>
                              </p>
                              <p className="international-esim-gives-container2">
                            <span>
                              <span className="international-esim-gives1">
                                International eSIM gives the flexibility I was
                              </span>
                              <span className="looking-for-as">
                                looking for. As a frequent traveler who goes
                              </span>
                              <span className="to-different-locations">
                                to different locations this saves me a lot of
                              </span>
                              <span className="trouble-buying-packages">
                                trouble buying packages.
                              </span>
                            </span>
                              </p>
                            </div>
                            <div className="svg-parent3">
                              <img
                                  className="svg-icon51"
                                  alt=""
                                  src="/svg-18.svg"
                              />
                              <div className="verified-purchaser4">
                                Verified Purchaser · IOS
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="background15">
                          <div className="image-parent7">
                            <img
                                className="image-icon48"
                                alt=""
                                src="/image-21@2x.png"
                            />
                            <div className="dietrich-c-wrapper">
                              <div className="dietrich-c">Dietrich C.</div>
                            </div>
                          </div>
                          <img
                              className="container-icon13"
                              alt=""
                              src="/container-16.svg"
                          />
                          <div className="frame-parent77">
                            <div className="i-have-used-it-in-several-euro-parent">
                              <p className="i-have-used-container">
                            <span>
                              <span className="i-have-used">
                                I have used it in several
                              </span>
                              <span className="european-countries-without">
                                European countries without any
                              </span>
                              <span className="problem">problem.</span>
                            </span>
                              </p>
                              <p className="i-have-used-container1">
                            <span>
                              <span className="i-have-used1">
                                I have used it in several European countries
                              </span>
                              <span className="without-any-problem">
                                without any problem. The Internet was fast
                              </span>
                              <span className="as-possible-from">
                                as possible from a local providers.
                              </span>
                            </span>
                              </p>
                            </div>
                            <div className="svg-parent4">
                              <img
                                  className="svg-icon52"
                                  alt=""
                                  src="/svg-18.svg"
                              />
                              <div className="verified-purchaser5">
                                Verified Purchaser · IOS
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="background16">
                          <div className="container-parent3">
                            <img
                                className="container-icon14"
                                alt=""
                                src="/container-17.svg"
                            />
                            <div className="frame-parent78">
                              <div className="image-parent8">
                                <img
                                    className="image-icon49"
                                    alt=""
                                    src="/image-21@2x.png"
                                />
                                <div className="andrew-c-wrapper">
                                  <div className="andrew-c">Andrew C.</div>
                                </div>
                              </div>
                              <div className="awesome-app-parent">
                                <b className="awesome-app">Awesome app!</b>
                                <div className="awesome-app-very-container">
                              <span>
                                <p className="awesome-app-very">
                                  Awesome app! Very nice to use ☺️ I always
                                </p>
                                <p className="use-it-and">
                                  use it and will use it when I travel.
                                </p>
                              </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="svg-parent5">
                            <img className="svg-icon53" alt="" src="/svg-18.svg"/>
                            <div className="verified-purchaser-android-container">
                              <div className="verified-purchaser6">
                                Verified Purchaser · Android
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="background17">
                          <div className="container-parent4">
                            <img
                                className="container-icon15"
                                alt=""
                                src="/container-18.svg"
                            />
                            <div className="frame-parent79">
                              <div className="image-parent9">
                                <img
                                    className="image-icon50"
                                    alt=""
                                    src="/image-21@2x.png"
                                />
                                <div className="artur-k-wrapper">
                                  <div className="artur-k">Artur K.</div>
                                </div>
                              </div>
                              <div className="this-is-what-the-modern-travel-parent">
                                <div className="this-is-what-container">
                              <span>
                                <p className="this-is-what">
                                  This is what the modern traveller
                                </p>
                                <p className="needs">needs.</p>
                              </span>
                                </div>
                                <p className="this-is-what-container1">
                              <span className="this-is-what-container2">
                                <span className="this-is-what1">
                                  This is what the modern traveller needs. No
                                </span>
                                <span className="dealing-with-expensive">
                                  dealing with expensive roaming, access in
                                </span>
                                <span className="every-country">
                                  every country.
                                </span>
                              </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="svg-parent6">
                            <img className="svg-icon54" alt="" src="/svg-18.svg"/>
                            <div className="verified-purchaser-android-frame">
                              <div className="verified-purchaser7">
                                Verified Purchaser · Android
                              </div>
                            </div>
                          </div>
                        </div>
                        <Background
                            propDebugCommit="unset"
                            propDebugCommit1="unset"
                        />
                      </div>
                    </div>
                    <div className="section12">
                      <h2 className="heading-211">
                        FAQ about virtual SIM cards from Yesim
                      </h2>
                      <div className="frame-parent80">
                        <div className="frame-parent81">
                          <div className="what-is-an-esim-and-how-to-get-container">
                            <div className="what-is-an1">
                              What is an eSIM and how to get use of Yesim?
                            </div>
                          </div>
                          <img className="svg-icon55" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider25"/>
                        <div className="frame-parent82">
                          <div className="how-to-activate-esim-mobile-in-container">
                            <div className="how-to-activate1">
                              How to activate eSIM mobile Internet from Yesim?
                            </div>
                          </div>
                          <img className="svg-icon56" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider26"/>
                        <div className="frame-parent83">
                          <div className="can-i-make-phone-calls-or-send-container">
                            <div className="can-i-make1">
                              Can I make phone calls or send SMS?
                            </div>
                          </div>
                          <img className="svg-icon57" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider27"/>
                        <div className="frame-parent84">
                          <div className="can-an-esim-card-be-re-used-container">
                            <div className="can-an-esim1">
                              Can an eSIM card be re-used?
                            </div>
                          </div>
                          <img className="svg-icon58" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider28"/>
                        <div className="frame-parent85">
                          <div className="is-my-device-compatible-with-e-container">
                            <div className="is-my-device1">
                              Is my device compatible with eSIM technology and the
                              Yesim app?
                            </div>
                          </div>
                          <img className="svg-icon59" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider29"/>
                        <div className="frame-parent86">
                          <div className="when-does-the-esim-mobile-data-container">
                            <div className="when-does-the1">
                              When does the eSIM mobile data plan duration start?
                            </div>
                          </div>
                          <img className="svg-icon60" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider30"/>
                        <div className="frame-parent87">
                          <div className="can-i-extend-the-esim-celllula-container">
                            <div className="can-i-extend1">
                              Can I extend the eSIM celllular phone data plan
                              expiration that I’m currently using?
                            </div>
                          </div>
                          <img className="svg-icon61" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider31"/>
                        <div className="frame-parent88">
                          <div className="what-are-ycoins-container">
                            <div className="what-are-ycoins1">What are Ycoins?</div>
                          </div>
                          <img className="svg-icon62" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider32"/>
                        <div className="frame-parent89">
                          <div className="can-i-get-a-refund-for-yesim-s-container">
                            <div className="can-i-get1">
                              Can I get a refund for Yesim services?
                            </div>
                          </div>
                          <img className="svg-icon63" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider33"/>
                        <div className="frame-parent90">
                          <div className="can-i-tether-use-personal-ho-container">
                            <div className="can-i-tether1">
                              Can I tether / use Personal Hotspot?
                            </div>
                          </div>
                          <img className="svg-icon64" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider34"/>
                        <div className="frame-parent91">
                          <div className="can-i-keep-my-personal-whatsap-container">
                            <p className="can-i-keep1">
                              Can I keep my personal WhatsApp / Snapchat / Telegram
                              number while using Yesim's eSIM?
                            </p>
                          </div>
                          <img className="svg-icon65" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider35"/>
                        <div className="frame-parent92">
                          <div className="how-to-transfer-esim-to-a-new-container">
                            <div className="how-to-transfer1">
                              How to transfer eSIM to a new phone?
                            </div>
                          </div>
                          <img className="svg-icon66" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider36"/>
                        <div className="frame-parent93">
                          <div className="are-there-any-contracts-like-t-container">
                            <div className="are-there-any1">
                              Are there any contracts like those from traditional
                              eSIM carriers?
                            </div>
                          </div>
                          <img className="svg-icon67" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider-group">
                          <div className="horizontal-divider37"/>
                          <div className="frame-parent94">
                            <div className="what-is-the-difference-between-parent">
                              <p className="what-is-the-container">
                            <span className="what-is-the1">
                              What is the difference between eSIM from Yesim and
                              standard roaming data plans from physical
                            </span>
                                <span className="mobile-operators">
                              mobile operators?
                            </span>
                              </p>
                              <div className="svg-wrapper19">
                                <img
                                    className="svg-icon68"
                                    alt=""
                                    src="/svg-26.svg"
                                />
                              </div>
                            </div>
                            <div className="horizontal-divider38"/>
                          </div>
                          <div className="frame-parent95">
                            <div className="what-is-the-fair-usage-policy-container">
                              <div className="what-is-the2">
                                What is the fair usage policy for eSIM unlimited
                                data plans?
                              </div>
                            </div>
                            <img className="svg-icon69" alt="" src="/svg-26.svg"/>
                          </div>
                        </div>
                        <div className="horizontal-divider39"/>
                        <div className="frame-parent96">
                          <div className="why-is-my-data-speed-slow-container">
                            <div className="why-is-my1">
                              Why is my data speed slow?
                            </div>
                          </div>
                          <img className="svg-icon70" alt="" src="/svg-26.svg"/>
                        </div>
                        <div className="horizontal-divider40"/>
                        <div className="frame-parent97">
                          <div className="how-can-i-check-my-data-plan-b-container">
                            <div className="how-can-i1">
                              How can I check my data plan balance and limits?
                            </div>
                          </div>
                          <img className="svg-icon71" alt="" src="/svg-26.svg"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section13">
                    <div className="section-inner4">
                      <div className="download-yesim-from-appstore-parent">
                        <h3 className="download-yesim-from-container">
                          <p className="download-yesim-from">Download Yesim from</p>
                          <p className="appstore-google">{`AppStore & Google Play`}</p>
                        </h3>
                        <div className="button-container">
                          <img
                              className="button-icon"
                              loading="lazy"
                              alt=""
                              src="/button.svg"
                          />
                          <div className="frame-wrapper14">
                            <div className="link-container">
                              <button className="link2">
                                <img
                                    className="image-icon51"
                                    alt=""
                                    src="/image-29@2x.png"
                                />
                              </button>
                              <button className="link3">
                                <img
                                    className="image-icon52"
                                    alt=""
                                    src="/image-30@2x.png"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-parent10">
                      <img className="image-icon53" alt="" src="/image-31@2x.png"/>
                      <img className="image-icon54" alt="" src="/image-32@2x.png"/>
                    </div>
                  </div>
                </div>
              </div>
              <FooterComponent/>
              <FrameComponent
                  propDebugCommit="unset"
                  propDebugCommit1="unset"
                  buttonDebugCommit="unset"
                  buttonDebugCommit1="unset"
              />
            </section>
          </main>
        </div>
      </>

  );
};

export default Regions;

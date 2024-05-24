import { useCallback } from "react";
import Nav2 from "../components/Nav2";
import FrameComponent4 from "../components/FrameComponent4";
import LinkButton1 from "../components/LinkButton1";
import LinkButton2 from "../components/LinkButton2";
import "./CompabilityDevices.css";

const CompabilityDevices = () => {


  return (
    <div className="compabilitydevices">
      <Nav2 />
      <div className="link-terms2">Terms of Service</div>
      <div className="link-cof2">COF Agreement</div>
      <div className="yesim2">© 2019 - 2024 Yesim</div>
      <main className="main-wrapper">
        <section className="main">
          <FrameComponent4 />
          <div className="frame-parent50">
            <div className="frame-parent51">
              <div className="heading-4-can-i-use-yesim-on-parent">
                <h2 className="heading-4">
                  Can I use Yesim on my eSIM compatible laptop?
                </h2>
                <p className="unfortunately-pc-and">
                  Unfortunately, PC and laptop devices are not supported by
                  Yesim.
                </p>
              </div>
              <p className="if-you-have">
                If you have any questions, please do not hesitate to contact us.
                We are happy to help!
              </p>
            </div>
            <div className="backgroundshadow">
              <b className="heading-41">Popular destinations</b>
              <div className="link-button-parent4">
                <div className="link-button3" onClick={onLinkButtonClick}>
                  <div className="image-wrapper6">
                    <img
                      className="image-icon22"
                      loading="lazy"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className="international-esim-parent">
                    <div className="international-esim">International eSIM</div>
                    <div className="unlimited-data-pay">
                      Unlimited data. Pay as you go
                    </div>
                  </div>
                  <div className="svg-wrapper11">
                    <img className="svg-icon40" alt="" src="/svg-5.svg" />
                  </div>
                </div>
                <div className="link-button-parent5">
                  <div className="link-button4" onClick={onLinkButton2Click}>
                    <div className="frame-parent52">
                      <div className="svg-wrapper12">
                        <img
                          className="svg-icon41"
                          loading="lazy"
                          alt=""
                          src="/svg-6.svg"
                        />
                      </div>
                      <div className="europe-parent">
                        <div className="europe">Europe</div>
                        <div className="countries1">31 countries</div>
                      </div>
                    </div>
                    <div className="svg-wrapper13">
                      <img className="svg-icon42" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                  <div className="link-button5">
                    <div className="frame-parent53">
                      <div className="container-wrapper2">
                        <img
                          className="container-icon4"
                          loading="lazy"
                          alt=""
                          src="/container-7.svg"
                        />
                      </div>
                      <div className="germany-parent">
                        <div className="germany">Germany</div>
                        <div className="from-159gb">from $1.59/GB</div>
                      </div>
                    </div>
                    <div className="svg-wrapper14">
                      <img className="svg-icon43" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                </div>
                <div className="link-button-parent6">
                  <div className="link-button6">
                    <div className="frame-parent54">
                      <div className="container-wrapper3">
                        <img
                          className="container-icon5"
                          loading="lazy"
                          alt=""
                          src="/container-5.svg"
                        />
                      </div>
                      <div className="spain-parent">
                        <div className="spain">Spain</div>
                        <div className="from-159gb1">from $1.59/GB</div>
                      </div>
                    </div>
                    <div className="svg-wrapper15">
                      <img className="svg-icon44" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                  <div className="link-button7">
                    <div className="frame-parent55">
                      <div className="container-wrapper4">
                        <img
                          className="container-icon6"
                          alt=""
                          src="/container-21.svg"
                        />
                      </div>
                      <div className="turkey-parent">
                        <div className="turkey">Turkey</div>
                        <div className="from-143gb">from $1.43/GB</div>
                      </div>
                    </div>
                    <div className="svg-wrapper16">
                      <img className="svg-icon45" alt="" src="/svg-5.svg" />
                    </div>
                  </div>
                </div>
                <div className="link-button-parent7">
                  <LinkButton1
                    propOverflowX="unset"
                    propFlex="1"
                    propMinWidth="148px"
                    propAlignSelf="stretch"
                  />
                  <LinkButton2
                    container="/container.svg"
                    unitedStatesUSA="United States (USA)"
                    from159GB="from $1.59/GB"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="compabilitydevices-inner">
        <div className="frame-parent56">
          <div className="container-parent1">
            <img
              className="container-icon7"
              loading="lazy"
              alt=""
              src="/container-19.svg"
            />
            <div className="heading-4-product-info-parent">
              <b className="heading-42">Product info</b>
              <div className="link-regions">Regions</div>
              <div className="link-payment">Payment</div>
              <div className="link-compatible">Compatible devices</div>
              <div className="link-virtual">Virtual numbers</div>
              <div className="link-for">For business</div>
              <div className="link-our">Our carriers</div>
              <div className="link-our1">Our partners</div>
            </div>
            <div className="frame-parent57">
              <div className="heading-4-popular-destinatio-parent">
                <b className="heading-43">Popular destinations</b>
                <div className="link-turkey">Turkey</div>
                <div className="link-spain">Spain</div>
                <p className="united-arab-emirates-container">
                  <span className="united-arab-emirates">
                    United Arab Emirates
                  </span>
                  <span className="uae">(UAE)</span>
                </p>
                <div className="link-united">United States (USA)</div>
                <div className="link-italy">Italy</div>
              </div>
              <div className="heading-4-help-parent">
                <b className="heading-44">Help</b>
                <a className="link-faq">FAQ</a>
                <div className="support">Support</div>
                <div className="link-yesim">Yesim Installation</div>
              </div>
            </div>
            <div className="heading-4-more-info-parent">
              <b className="heading-45">More info</b>
              <div className="link-about">About us</div>
              <div className="link-contacts">Contacts</div>
              <div className="link-refund">Refund Policy</div>
              <div className="link-blog">Blog</div>
            </div>
          </div>
          <div className="frame-parent58">
            <div className="frame-parent59">
              <div className="frame-wrapper4">
                <div className="image-parent1">
                  <img className="image-icon23" alt="" src="/image-33@2x.png" />
                  <img className="image-icon24" alt="" src="/image-34@2x.png" />
                  <img
                    className="image-icon25"
                    loading="lazy"
                    alt=""
                    src="/image-35@2x.png"
                  />
                  <img className="image-icon26" alt="" src="/image-36@2x.png" />
                  <img className="image-icon27" alt="" src="/image-37@2x.png" />
                  <img
                    className="image-icon28"
                    loading="lazy"
                    alt=""
                    src="/image-38@2x.png"
                  />
                </div>
              </div>
              <div className="link-parent">
                <div className="link">
                  <div className="review-us-on-wrapper">
                    <div className="review-us-on">Review us on</div>
                  </div>
                  <img className="img-icon" alt="" src="/img.svg" />
                </div>
                <div className="image-wrapper7">
                  <img
                    className="image-icon29"
                    loading="lazy"
                    alt=""
                    src="/image-39@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frame-wrapper5">
              <div className="link-privacy-policy-parent">
                <a className="link-privacy">Privacy policy</a>
                <div className="link-genesis">
                  Genesis Group AG; Chamerstrasse 172, CH-6300 Zug; REG NO:
                  CHE-135.623.633
                </div>
                <div className="backgroundshadow1">
                  <p className="we-use-cookies-container">
                    <span>
                      <span className="we-use-cookies-on-our-website">
                        <span>
                          We use cookies on our website to give you the best
                          browsing experience.
                        </span>
                      </span>
                      <span className="by-clicking-accept-you-cons">
                        <span>{`By clicking "Accept", you consent to the use of all cookies as outlined in our `}</span>
                        <span className="privacy-policy">Privacy Policy</span>
                        <span className="span">.</span>
                      </span>
                    </span>
                  </p>
                  <div className="backgroundshadow-inner">
                    <div className="button-parent">
                      <button className="button1">
                        <div className="accept">Accept</div>
                      </button>
                      <button className="button2">
                        <div className="no-thanks">No, thanks</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompabilityDevices;

import React from "react";
import "./index.css";

export default function GoodCTRGoodSDLowCR(props) {
  const {
    cTR,
    setCTR,
    sessionDuration,
    setSessionDuration,
    conversionRate,
    setConversionRate
  } = props;

  const handleCTRChange = function (event) {
    setCTR(event.target.value);
  };

  const handleSessionChange = function (event) {
    setSessionDuration(event.target.value);
  };

  const handleConversionChange = function (event) {
    setConversionRate(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <h1>Customer Journey Analyzer</h1>
      </div>
      <div className="cjAnalysis">
        <form>
          <label htmlFor="cTR">
            <select value={cTR} onChange={handleCTRChange}>
              <option>Your CTR</option>
              <option>Low CTR</option>
              <option>Good CTR</option>
            </select>
          </label>
          <label htmlFor="sessionDuration">
            <select value={sessionDuration} onChange={handleSessionChange}>
              <option>Your Session Duration</option>
              <option>Low Session Duration</option>
              <option>Good Session Duration</option>
            </select>
          </label>
          <label htmlFor="conversionRate">
            <select value={conversionRate} onChange={handleConversionChange}>
              <option>Your Conversion Rate</option>
              <option>Low Conversion Rate</option>
              <option>Good Conversion Rate</option>
            </select>
          </label>
          <p>
            A Good CTR is a beginning indication that we're targeting the right
            audiences and those audiences are finding our ads or content
            engaging. When combined with a good session duration, it confirms
            our initial hypothesis that we're targeting the right market, and
            the ad or content did the job of getting them to our desired
            destination.<br></br>
            <br></br>
            When both these things are still resulting in a low conversion rate,
            it could indicate that the checkout process or contact process is
            difficult, hard to understand, or unclear. It could also be an
            indication that the buying process for your industry is longer, and
            more trust needs to be built, or that price is too high compared to
            perceived value. We recommend testing out new types of conversions
            that may be less time or resource intensive for the user, as well as
            investigating your checkout / contact process to ensure everything
            is working, looks good, and performs smoothly.
          </p>
        </form>
      </div>
    </div>
  );
}

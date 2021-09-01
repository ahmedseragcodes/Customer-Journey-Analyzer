import React from "react";
import "./index.css";

export default function LowCTRLowSDGoodCR(props) {
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
            A Low CTR combined with A Low Average Session Duration and Good
            Conversion Rate typically indicates the problem in the customer
            journey is in the beginning where the user interacts with the ad,
            and the middle where the user is on your website. The good thing is
            that because of the good conversion rate, we can be positive we're
            targeting the right audience. We recommend first focusing on
            improving creative to increase the CTR and lower the cost of clicks
            and conversions, and analyzing the data to see if session duration
            increases based on getting more interested users to your website.
            Improving content on the website and creating new content are also
            great ways to keep people on your website, as long as that's a goal.
          </p>
        </form>
      </div>
    </div>
  );
}

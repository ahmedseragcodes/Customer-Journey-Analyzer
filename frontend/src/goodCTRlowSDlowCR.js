import React from "react";
import "./index.css";

export default function GoodCTRLowSDLowCR(props) {
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
            A good CTR combined with a low Session Duration and low Conversion
            Rate could be an indication that we're targeting the right audience
            and the creative is good, but users aren't finding the destination
            URL appealing enough to stay on the website to be able to convert.
            We'd recommend first ensuring the audiences being targeted coorelate
            with who you've previously sold to, and then working on makiing your
            landing page more engaging, which should result in a higher session
            duration and/or a higher conversion rate.
          </p>
        </form>
      </div>
    </div>
  );
}

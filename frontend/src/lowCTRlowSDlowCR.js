import React from "react";
import "./index.css";

export default function LowCTRLowSDLowCR(props) {
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
            A Low CTR combined with A Low Average Session Duration and Low
            Conversion Rate typically indicates the problem in the customer
            journey is at the beginning, eminating either from incorrect
            targeting, low perceived product value, or unengaging creative.
            Because the first action users who interact with your brand will
            take is clicking on an ad or content you've created, we recommend
            working on improving that through better targeting and better
            creative. Once we're sure you're targeting the right audiences in an
            effective way and your creative is engaging, we'll see CTR rise and
            move onto analyzing session duration and conversion rate.
          </p>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import "./index.css";

export default function LowCTRGoodSDLowCR(props) {
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
            A low CTR combined with a good Session Duration and low Conversion
            Rate can be confusing, but breaking it down makes it easier. A low
            CTR will typically indicate that either we're targeting the wrong
            audience or the creative needs improving, in this case when combined
            with a good session duration, we can focus on improving the creative
            and seeing how that affects CTR. If we reach the point of having a
            good CTR and good Session Duration without seeing conversion rate
            rise, we recommend investigating the checkout/contact process to
            ensure it's not slow, confusing, or un-engaging. In doing all this,
            we should see all 3 metrics improve across the board!
          </p>
        </form>
      </div>
    </div>
  );
}

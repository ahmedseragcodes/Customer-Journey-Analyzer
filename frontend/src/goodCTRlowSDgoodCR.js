import React from "react";
import "./index.css";

export default function GoodCTRLowSDGoodCR(props) {
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
            A Good CTR combined with a Low Session Duration and Good Conversion
            Rate can be confusing, but because of the combination of a good
            clickthrough rate (when the users see the ad) and good conversion
            rate, we can be confident we're targeting the right audiences. This
            unique combination of metrics can indicate a couple things, it may
            very well be that your users and your product don't require a lot of
            time to be spent on the site, and if that's not the goal with the
            respective ad or content, then everything is fine. But if that's not
            the case, checking your page speed, ensuring you can navigate
            between pages on your site smoothly, and creating new or more
            engaging content for your site can really help increase session
            duration and possibly, conversion rate.
          </p>
        </form>
      </div>
    </div>
  );
}

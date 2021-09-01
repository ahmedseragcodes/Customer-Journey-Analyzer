/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./index.css";

import EnterMetrics from "./enterMetrics";

import GoodCTRGoodSDGoodCR from "./goodCTRgoodSDgoodCR";
import LowCTRLowSDLowCR from "./lowCTRlowSDlowCR";

import GoodCTRGoodSDLowCR from "./goodCTRgoodSDlowCR";
import LowCTRGoodSDGoodCR from "./lowCTRGoodSDGoodCR";
import GoodCTRLowSDGoodCR from "./goodCTRlowSDgoodCR";

import LowCTRLowSDGoodCR from "./lowCTRlowSDGoodCR";
import GoodCTRLowSDLowCR from "./goodCTRlowSDlowCR";
import LowCTRGoodSDLowCR from "./lowCTRGoodSDlowCR";

export default function App() {
  const [cTR, setCTR] = useState("Your CTR");

  const [sessionDuration, setSessionDuration] = useState(
    "Your Session Duration"
  );

  const [conversionRate, setConversionRate] = useState("Your Conversion Rate");

  const handleCTRChange = function (event) {
    setCTR(event.target.value);
  };

  const handleSessionChange = function (event) {
    setSessionDuration(event.target.value);
  };

  const handleConversionChange = function (event) {
    setConversionRate(event.target.value);
  };

  if (
    cTR == "Your CTR" &&
    sessionDuration == "Your Session Duration" &&
    conversionRate == "Your Conversion Rate"
  ) {
    return (
      <div>
        <EnterMetrics
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End No Selection Component
  else if (
    cTR == "Low CTR" &&
    sessionDuration == "Low Session Duration" &&
    conversionRate == "Low Conversion Rate"
  ) {
    return (
      <div>
        <LowCTRLowSDLowCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End Low CTR, Low Session Duration, Low Conversion Rate
  else if (
    cTR == "Good CTR" &&
    sessionDuration == "Good Session Duration" &&
    conversionRate == "Good Conversion Rate"
  ) {
    return (
      <div>
        <GoodCTRGoodSDGoodCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End Good CTR, Good Session Duration, Good Conversion Rate
  else if (
    cTR == "Good CTR" &&
    sessionDuration == "Good Session Duration" &&
    conversionRate == "Low Conversion Rate"
  ) {
    return (
      <div>
        <GoodCTRGoodSDLowCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } // End Good CTR, Good Session Duration, Low Conversion Rate
  else if (
    cTR == "Low CTR" &&
    sessionDuration == "Good Session Duration" &&
    conversionRate == "Good Conversion Rate"
  ) {
    return (
      <div>
        <LowCTRGoodSDGoodCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End Low CTR, Good Session Duration, Good Conversion Rate
  else if (
    cTR == "Good CTR" &&
    sessionDuration == "Low Session Duration" &&
    conversionRate == "Good Conversion Rate"
  ) {
    return (
      <div>
        <GoodCTRLowSDGoodCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End Good CTR Low SD Good CR
  else if (
    cTR == "Low CTR" &&
    sessionDuration == "Low Session Duration" &&
    conversionRate == "Good Conversion Rate"
  ) {
    return (
      <div>
        <LowCTRLowSDGoodCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End Low CTR Low SD Good CR
  else if (
    cTR == "Good CTR" &&
    sessionDuration == "Low Session Duration" &&
    conversionRate == "Low Conversion Rate"
  ) {
    return (
      <div>
        <GoodCTRLowSDLowCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End Good CTR Low SD Low CR
  else if (
    cTR == "Low CTR" &&
    sessionDuration == "Good Session Duration" &&
    conversionRate == "Low Conversion Rate"
  ) {
    return (
      <div>
        <LowCTRGoodSDLowCR
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } else if (
    cTR == "Your CTR" ||
    sessionDuration == "Your Session Duration" ||
    conversionRate == "Your Conversion Rate"
  ) {
    return (
      <div>
        <EnterMetrics
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End One Or More Selections Haven't Been Made
  else {
    return (
      <div>
        <EnterMetrics
          cTR={cTR}
          setCTR={setCTR}
          sessionDuration={sessionDuration}
          setSessionDuration={setSessionDuration}
          conversionRate={conversionRate}
          setConversionRate={setConversionRate}
        />
      </div>
    );
  } //End No Respective Component Designated For Selection
}

"use client"; 
import { useState, useEffect, useRef } from "react";
import PricingPage from "./subscriptionContainer";
import { useSchoolCompare, useSubscriptionModalBox } from "../schoolCompareContext";

export default function ClientSubscriptionHandler({ /*subscriptionModalBox, setSubscriptionModalBox*/}) {
  //const { subscriptionModalBox, setSubscriptionModalBox } = useSchoolCompare();
  const [clicks, setClicks] = useState(0);
  const schoolsRef = useRef(null);

  const { subscriptionModalBox, setSubscriptionModalBox } = useSubscriptionModalBox();

  useEffect(() => {
    const clicksToSet = localStorage.getItem("clicks");
    if (clicksToSet) {
      setClicks(parseInt(clicksToSet, 10));
    }
  }, []);

  function handleCloseModal() {
    setSubscriptionModalBox(false);
  }

  return (
    <>
      {subscriptionModalBox && <PricingPage setSubscriptionModalBox={setSubscriptionModalBox} />}
    </>
  );
}
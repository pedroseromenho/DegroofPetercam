import React from "react";

import ViewLogin from "./Views/ViewLogin"; // ok
import ViewSignUp from "./Views/ViewSignUp"; // ok
import ViewSignIn from "./Views/ViewSignIn"; // ok
import ViewOffers from "./Views/ViewOffers"; // ok
import ViewOfferDetails from "./Views/ViewOfferDetails";
import ViewMyMissions from "./Views/ViewMyMissions";
import ViewMyMissionDetails from "./Views/ViewMyMissionDetails";
import ViewBookmarks from "./Views/ViewBookmarks";
import ViewHistory from "./Views/ViewHistory";
import ViewEvaluation from "./Views/ViewEvaluation";
import ViewProfile from "./Views/ViewProfile"; // ok

export default class App extends React.Component {
  render() {
    return <ViewMyMissionDetails />;
  }
}

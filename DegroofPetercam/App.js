import React from "react";

import ViewLogin from "./Views/ViewLogin";
import ViewSignUp from "./Views/ViewSignUp";
import ViewOffers from "./Views/ViewOffers";
import ViewOfferDetails from "./Views/ViewOfferDetails";
import ViewMyMissions from "./Views/ViewMyMissions";
import ViewMyMissionDetails from "./Views/ViewMyMissionDetails";
import ViewBookmarks from "./Views/ViewBookmarks";
import ViewHistory from "./Views/ViewHistory";
import ViewEvaluation from "./Views/ViewEvaluation";
import ViewProfile from "./Views/ViewProfile";

export default class App extends React.Component {
  render() {
    return <ViewProfile />;
  }
}

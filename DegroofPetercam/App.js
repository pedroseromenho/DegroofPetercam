import React from "react";
import { createStackNavigator } from "react-navigation";
import ViewLogin from "./Views/ViewLogin";
import ViewSignUp from "./Views/ViewSignUp";
import ViewSignIn from "./Views/ViewSignIn";
import ViewOffers from "./Views/ViewOffers";
import ViewOfferDetails from "./Views/ViewOfferDetails";
import ViewMyMissions from "./Views/ViewMyMissions";
import ViewMyMissionDetails from "./Views/ViewMyMissionDetails";
import ViewBookmarks from "./Views/ViewBookmarks";
import ViewHistory from "./Views/ViewHistory";
import ViewEvaluation from "./Views/ViewEvaluation";
import ViewProfile from "./Views/ViewProfile";

const AppStackNavigator = createStackNavigator({
  Home: ViewLogin,
  SignUp: ViewSignUp,
  SignIn: ViewSignIn,
  Offers: ViewOffers,
  OfferDetails: ViewOfferDetails,
  MyMissions: ViewMyMissions,
  MyMissionDetails: ViewMyMissionDetails,
  Bookmarks: ViewBookmarks,
  History: ViewHistory,
  Evaluation: ViewEvaluation,
  Profile: ViewProfile
});

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

import React from "react";
import { Router, Scene } from "react-native-router-flux";
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

export default class App extends React.Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene
            key="home"
            component={ViewLogin}
            title="Home"
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key="signUp"
            component={ViewSignUp}
            title="SignUp"
            hideNavBar={true}
          />
          <Scene
            key="signIn"
            component={ViewSignIn}
            title="SignIn"
            hideNavBar={true}
          />
          <Scene
            key="offers"
            component={ViewOffers}
            title="Offers"
            hideNavBar={true}
          />
          <Scene
            key="offersDetails"
            component={ViewOfferDetails}
            title="OffersDetails"
            hideNavBar={true}
          />
          <Scene
            key="myMissions"
            component={ViewMyMissions}
            title="MyMissions"
            hideNavBar={true}
          />
          <Scene
            key="myMissionsDetails"
            component={ViewMyMissionDetails}
            title="MyMissionsDetails"
            hideNavBar={true}
          />
          <Scene
            key="bookmarks"
            component={ViewBookmarks}
            title="Bookmarks"
            hideNavBar={true}
          />
          <Scene
            key="history"
            component={ViewHistory}
            title="History"
            hideNavBar={true}
          />
          <Scene
            key="evaluation"
            component={ViewEvaluation}
            title="Evaluation"
            hideNavBar={true}
          />
          <Scene
            key="profile"
            component={ViewProfile}
            title="Profile"
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}

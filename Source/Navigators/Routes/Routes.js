import { RouteModel } from "./Models/RouteModel";
import Login from "../../Screens/Login/Index";
import Intro from "../../Screens/Onboarding/Introduction/Intro";
import Splash from "../../Screens/Onboarding/Splash/Splash";
import Signup from "../../Screens/Signup/Signup";
import Dashboard from "@screens/UserDashboard";

export const Routes = [
  new RouteModel("Splash", Splash, { headerShown: false }),
  new RouteModel("Intro", Intro, { headerShown: false }),
  new RouteModel("Signup", Signup),
  new RouteModel("Login", Login, { headerTitle: "Login" }),
  new RouteModel("Dashboard", Dashboard, { headerTitle: "Home" })
];

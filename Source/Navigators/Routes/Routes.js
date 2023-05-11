import { RouteModel } from './Models/RouteModel';
import Login from '../../Screens/Login/Index';
import Intro from '../../Screens/Onboarding/Introduction/Intro';
import Splash from '../../Screens/Onboarding/Splash/Splash';
import Signup from '../../Screens/Signup/Signup';
import { NavigationPaths } from '@navigators/Constants';
import AppTabNavigator from '@navigators/AppTabNavigator';


export const Routes = [
  new RouteModel(NavigationPaths.SPLASH, Splash, { headerShown: false }),
  new RouteModel(NavigationPaths.INTRO, Intro, { headerShown: false }),
  new RouteModel(NavigationPaths.SIGNUP, Signup),
  new RouteModel(NavigationPaths.LOGIN, Login, { headerShown: false }),
  new RouteModel(NavigationPaths.Tab, AppTabNavigator, { headerShown: false, }),
];

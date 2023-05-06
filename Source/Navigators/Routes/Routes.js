import {RouteModel} from './Models/RouteModel';
import Login from '../../Screens/Login/Index';
import Intro from '../../Screens/Onboarding/Introduction/Intro';
import Splash from '../../Screens/Onboarding/Splash/Splash';
import Signup from '../../Screens/Signup/Signup';
import Dashboard from '@screens/UserDashboard';
import {NavigationPaths} from '@navigators/Constants';

export const Routes = [
  new RouteModel(NavigationPaths.SPLASH, Splash, {headerShown: false}),
  new RouteModel(NavigationPaths.INTRO, Intro, {headerShown: false}),
  new RouteModel(NavigationPaths.SIGNUP, Signup),
  new RouteModel(NavigationPaths.LOGIN, Login, {headerTitle: 'Login'}),
  new RouteModel(NavigationPaths.DASHBOARD, Dashboard, {headerTitle: 'Home'}),
];

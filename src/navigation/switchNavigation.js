import React from 'react'
import { createSwitchNavigator } from "@react-navigation/compat";
import {Signup, Splash, Signin} from '../screens'
import StackNavigation from "./stackNavigation";

const SwitchNavigator= createSwitchNavigator(
    {
    //   Splash: Splash,
    //   Signin : Signin,
    //   Signup : Signup,
      MainNav : StackNavigation,
    },
    {
      initialRouteName:'Splash',
      backBehavior : 'none'
    }
);
    
export default SwitchNavigator;
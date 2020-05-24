import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import Attendance from "../screens/Attendance";
import ClassRoutine from "../screens/ClassRoutine";
import DayRoutine from "../screens/DayRoutine";
import Homework from "../screens/Homework";
import HomeworkDetails from "../screens/HomeworkDetails";
import ExamRoutine from "../screens/ExamRoutine";
import ExamDetails from "../screens/ExamDetails";
import Results from "../screens/Results";
import ResultDetails from "../screens/ResultDetails";
import ProjectWork from "../screens/ProjectWork";
import ProjectDetails from "../screens/ProjectDetails";
import Library from "../screens/Library";
import Suggestion from "../screens/Suggestion";


import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Forgot,
    Explore,
    Browse,
    Product,
    Settings,
    Profile,
    Attendance,
    ClassRoutine,
    DayRoutine,
    Homework,
    HomeworkDetails,
    ExamRoutine,
    ExamDetails,
    Results,
    ResultDetails,
    ProjectWork,
    ProjectDetails,
    Library,
    Suggestion,
  },
  {
    headerLayoutPreset: 'center',
    
  },
  {
    defaultNavigationOptions: {
       
      
    }
  }
);

export default createAppContainer(screens);

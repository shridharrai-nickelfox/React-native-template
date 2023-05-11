
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '@screens/UserDashboard'
import Profile from '@screens/Profile/Index'
import Settings from '@screens/Settings/Index'
import { useTheme } from 'react-native-paper'
import { Image, Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

const TabBarCustomIcon = ({ source, title, focused }) => {
  const theme = useTheme()
  return <React.Fragment>
    <View style={{ top: focused ? -16 : 0, backgroundColor: theme.colors.warning, padding: 8, alignItems: 'center', borderRadius: 30 }}>
      <Image source={source}
        style={{ width: 35, height: 35 }}
      />
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </View>
  </React.Fragment>
}

const AppTabNavigator = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      initialRouteName='Dashboard'
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.warning, height: 65, margin: 16, borderRadius: 20 },
        tabBarLabelStyle: { display: 'none' }
      }}
    >
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            <TabBarCustomIcon source={require("@images/tabbaricon/profile.png")}
              title={"Profile"}
              focused={focused}
            />

        }}
      />

      <Tab.Screen name="Dashboard" component={Dashboard}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            <TabBarCustomIcon source={require("@images/tabbaricon/plus.png")}
              title={"Home"}
              focused={focused}
            />


        }}
      />

      <Tab.Screen name="Setting" component={Settings}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            <TabBarCustomIcon source={require("@images/tabbaricon/setting.png")}
              title={"Setting"}
              focused={focused}
            />,
        }}
      />
    </Tab.Navigator>
  )
}

export default AppTabNavigator

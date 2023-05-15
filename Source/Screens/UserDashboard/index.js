import CustomOTPInput from "@screens/otpValidator";
import React from "react";
import { View, Text } from "react-native";

const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Dashboard</Text>
      <CustomOTPInput
        numInputs={4}
        onComplete={(otp) => { console.log(otp, "done") }}
      />
    </View>
  );
};

export default Dashboard;

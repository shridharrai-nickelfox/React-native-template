import {View} from 'react-native';
import React from 'react';
import CustomOTPInput from '@components/otpValidator';
import RootNavigation from '@navigators/RootNavigator';

const VerifyOtp = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <CustomOTPInput
        numInputs={4}
        onComplete={otp => {
          console.log(otp);
          RootNavigation.reset(0, 'TabNavigator');
        }}
      />
    </View>
  );
};

export default VerifyOtp;

import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import makeStyles from './loginStyle';
import TitleOne from '@components/publicComponent/TitleOne/TitleOne';
import useLoginController from './loginController';

const Login = (): JSX.Element => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const Lc = useLoginController();
  return (
    <View style={styles.mainCtr}>
      <ScrollView>
        <View style={styles.Topsection}>
          <TitleOne title="Log in Here" />
          <TitleOne subTitle title="Please add your credential to continue" />
        </View>

        <View style={styles.Middlesection}>
          <View style={styles.LoginCard}>
            <View style={styles.fieldContainer}>
              <TitleOne FieldTitle title="Email/User name" />
              <TextInput
                style={styles.FieldInput}
                placeholder="Enter email/user name"
              />
            </View>

            <View style={styles.fieldContainer}>
              <TitleOne FieldTitle subTitle title="Phone number" />
              <TextInput
                style={styles.FieldInput}
                placeholder="Enter phone number"
              />
            </View>

            <View style={styles.fieldContainer}>
              <TouchableOpacity onPress={Lc.handleLogin}>
                <View style={styles.btn}>
                  <Text style={styles.btntext}>Log in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.Bottomsection}></View>
    </View>
  );
};

export default Login;

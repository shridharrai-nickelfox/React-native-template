import {StyleSheet} from 'react-native';

const makeStyles = (theme: any) => {
  const {colors} = theme;
  return StyleSheet.create({
    mainCtr: {
      flex: 1,
      backgroundColor: colors.surface,
      padding: 10,
    },
    Topsection: {
      marginVertical: 10,
      marginTop: 20,
    },
    Middlesection: {
      marginVertical: 10,
      marginTop: 50,
    },
    Bottomsection: {
      marginVertical: 10,
    },
    LoginCard: {},
    fieldContainer: {
      marginHorizontal: 16,
      marginVertical: 8,
    },
    FieldInput: {
      marginTop: 5,
      backgroundColor: colors.background,
    },
    btn: {
      marginTop: 8,
      backgroundColor: colors.ternary,
      borderRadius: 4,
    },
    btntext: {
      textAlign: 'center',
      padding: 10,
      fontSize: 22,
      fontWeight: '500',
      color: colors.primary,
    },
  });
};

export default makeStyles;

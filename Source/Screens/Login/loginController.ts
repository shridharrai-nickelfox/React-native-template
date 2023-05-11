import RootNavigation from '@navigators/RootNavigator';

const useLoginController = () => {
  const handleLogin = () => {
    console.log('login');
    RootNavigation.reset(0, 'TabNavigator');
  };
  return {handleLogin};
};

export default useLoginController;

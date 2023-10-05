import Stack from "./navigation/StackNavigatin";

export default App = () => {
  return (

    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Provider store={store}>
        <Stack />
      </Provider>
    </NavigationContainer>
  );
};
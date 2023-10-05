import * as React from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";

//import { Provider } from "react-redux";
//import { store } from "./src/Redux/store";
//import { ThemeProvider } from "styled-components";

import Main from "./src/Pages/Main/Main";
//import SignIn from "./src/Pages/SignIn/SignIn";
//import SignUp from "./src/Pages/SignUp/SignUp";
import SlideProd from "./src/Pages/SlideProd/SlideProd";
//import ProductList from "./src/Pages/Product/Components/ProductList";
//import Header from "./src/Pages/ProductDetail/Components/Header/Header";
//import Close from "./src/Pages/ProductDetail/Components/Header/Components/Close";
import CartScreen from "./src/Pages/Cart/CartScreen";
//import Theme from "./src/Styles/Theme";

//import LikeProduct from "./src/Pages/Product/Components/LikeProduct"; // to do: 폴더 생성 
import SearchPage from "./src/Pages/Search/Search" // to do: 폴더 생성

const Stack = createStackNavigator();

export default function App( ){
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Main">
            <Stack.Screen
              name = "Main"
              component = {Main}
              option = {{headerShown: false}}
            />
            <Stack.Screen
              name = "SignIn"
              component = {SignIn}
              option = {{
                title: "로그인",
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name = "SignUp"
              component = {SignUp}
              option = {{
                title: "회원가입",
                headerBackImage: () => <Close />,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name = "SlideProduct"
              component = {SlideProd}
              option = {{headerShown: false}}
            />
            <Stack.Screen
              name = "ProductList"
              component = {ProductList}
              option = {{headerShown: false}}
            />
            <Stack.Screen
              name = "LikeProduct"
              component = {LikeProduct}
              option = {{
              headerBackImage: () => <Close />,
              headerBackTitleVisible: false,
              headerTitle: "관심상품"
              }}
            />
            <Stack.Screen
              name = "CartScreen"
              component = {CartScreen}
              option = {{
              headerBackImage: () => <Close />,
              headerBackTitleVisible: false,
              headerTitle: "장바구니"
              }}
            />
            <Stack.Screen
              name = "SearchPage"
              component = {SearchPage}
              option = {{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};


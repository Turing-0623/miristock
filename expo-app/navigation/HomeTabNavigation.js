// src/Pages/Main/Home/Home.js 참고
// 이후, home 을 이루는 파이렝 import 할 것.
import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Miri from "../src/Pages/Main/Home/Miri"; //나중에 추가
import Product from "../src/Pages/Product/Product";
import Event from "../src/Pages/Main/Home/Event";
import Theme from "../src/Styles/Theme";

const MainTabStack = createMaterialTopTabNavigator();

//홈 화면의 상단 탭 네비게이션 바 -> 아이템 페이지에 어울릴 것 같음(카테고리 더 생성해야 할 것 같다)
export default function HomeTabNavigator() {
    return (
    <>
        <MainTabStack.Navigator
            tabBarOptions={{
                activeTintColor: Theme.colors.MatinColor,
                inactiveTintColor: Theme.colors.gratColor,
                pressColor: Theme.colors.MainColor,
                indicatorStyle:{
                    borderBottomWidth: 3,
                    borderBottomColor: Theme.colors.MainColor,
                },
                labelStyle:{
                    fontSize: 12,
                    fontWeight: '500',
                },
            }}>
            <MainTabStack.Screen name='전체' component={ViewAllProduct}/>
            <MainTabStack.Screen name='인기상품🔥' component={PopularProduct}/>
            <MainTabStack.Screen name='신상품🌟' component={NewProduct}/>
            <MainTabStack.Screen name='할인상품' component={SaleProduct}/>
        </MainTabStack.Navigator>
    </>
    )
}
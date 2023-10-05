import React from "react";
import {StyleSheet, Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Theme from "../../Style/Theme";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation(){
    return (
        <Tab.Navigator
            initialRouteName={'Main'}
            tabBarOption={{
                activeTintColor: Theme.color.MainColor,
                inactiveTintColor: Theme.color.DarkGray,
            }}>
            <Tab.Screen
                name='Home'
                component={HomeTabNavigator} //import 주소 재설정
                option={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={{uri:focused ? icon.home_on : icon.home}}
                                style={style.icon}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='LikeProduct'
                component={HomeTabNavigator}
                option={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={{uri:focused ? icon.like_on : icon.like}}
                                style={style.icon}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='Mypage'
                component={HomeTabNavigator}
                option={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image
                                source={{uri: focused ? icon.MyPage_on : icon.MyPage}}
                                style={style.icon}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='All'
                component={HomeTabNavigator}
                option={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image //컴포넌트 Empty, 아이콘 카테고리로 설정한거 확인
                                source={{uri: focused ? icon.category_on : icon.category}}
                                style={style.icon}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

//style, icon도 다른 파일에 나중에 분리해서 저장해놔야 할 것 같다.
//아니, 오직 이 파일에서만 사용할 아이콘이라면 굳이 분리할 이유는 없을 것 같다.
const style = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,      
    },
});

const icon = {
    home_in: "",
    home: "",
    category_on: "",
    category: "",
    search: "",
    MyPage_on: "",
    MyPage: "",
    like_on: "",
    like: "",
};
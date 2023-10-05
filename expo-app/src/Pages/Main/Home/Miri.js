// 10/3 item 데이터를 api에서 어떻게 가져올 것인 -> proddata? > item > sort by sub category(slidProd.js) 

import React, { useState, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import styled from "styled-components";
import SlideProd from "../../SlideProd/SlideProd";
import Footer from "../Components/Footer";

const Stack = createStackNavigator();

export default function Miri() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PopularProd"
        options={{ headerShown: false }}
        component={PopularProd}
      />
      <Stack.Screen
        name="NewProd"
        options={{ headerShown: false }}
        component={NewProd}
      />
      <Stack.Screen
        name="SaleProd"
        options={{ headerShown: false }}
        component={SaleProd}
      />
    </Stack.Navigator>
  );
}

function PopularProd({ navigation }) {
  const scrollRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  const btnActive = (e) => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };

  const onFabPress = () => {
    scrollRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const renderItem = ({ item }) => {
    return (
      <SlideProd
        sort_by_sub_category={item.sort_by_sub_category}
        navigation={navigation}
      />
    );
  };

  return (
    <Container> 
      <FlatList
        ref={scrollRef}
        onScroll={btnActive}
        scrollEventThrottle={16}
        data={ProdData}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        ListFooterComponent={
          <>
            <Footer />
          </>
        }
      />
      <TopBtn onPress={onFabPress}>
        <BtnImage
          valueY={scrollY}
          animation={scrollY > 700 ? "fadeIn" : false}
          delay={10}
          source={{
            uri:
              "https://res.kurly.com/mobile/service/common/1903/btn_pagetop_v3.png",
          }}
        />
      </TopBtn>
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.color.White};
`;

const TopBtn = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  bottom: 100px;
`;

const BtnImage = Animatable.createAnimatableComponent(styled.Image`
  width: 46px;
  height: 46px;
  opacity: ${({ scrollY }) => (scrollY > 700 ? "1" : "0")};
`);

const ProdData = [
  {
    sort_by_sub_category: "인기상품 ",
  },
  {
    sort_by_sub_category: "신상품",
  },
  {
    sort_by_sub_category: "할인상품 ",
  },
  {
    sort_by_sub_category: "지금 가장 핫한 상품", //클릭 수 ?
  },
];
import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';

import vaso from '../assets/vaso.png';

export default function HowToPlant() {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          img: require("../assets/vaso.png"),
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          img: require("../assets/vaso.png"),
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          img: require("../assets/vaso.png"),
        },
      ];

      function Item({ img }) {
        return (
          <View style={styles.item}>
            <Image source = {img} />
            <Text style={styles.title}>ajuste</Text>
          </View>
        );
      }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={DATA}
                renderItem={({ item }) => <Item img={item.img} />}
                keyExtractor={item => item.id}
                horizontal
                showHorizontalScrollIndicator
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
      }
})

import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';


export const itemsList = (item, index) => {
    return (
        <View style={styles.flatlistContainer}>
            <View style={[styles.itemView, index % 2 > 0 ? styles.itemOdd : styles.itemEven]}>
                <View style={styles.starCount}>
                    <Text style={styles.starCountIcon}>{item.stargazers_count.toString()}</Text>
                </View>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={[styles.itemDescription, index % 2 > 0 ? styles.itemDOdd : styles.itemDEven]}>{item.description}</Text>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    flatlistContainer: {

        alignItems: 'center',
    },
    itemView: {

        width: Dimensions.get('window').width,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingRight: 15,
        alignContent: 'center',
        borderStyle: 'solid',
        borderColor: '#202020',
        borderWidth: 1.5,
    },
    itemEven: {
        backgroundColor: '#24292E',

    },
    itemOdd: {
        backgroundColor: '#FBFBFB',
        color: 'red',
    },
    starCount: {
        width: 100,
    },
    starCountIcon: {
        fontSize: 30,
        color: 'tomato',
    },
    itemInfo: {
        alignItems: 'center',
        //position: 'relative',
        width: Dimensions.get('window').width - 100,
        padding: 5,

    },
    itemName: {
        fontSize: 30,
        color: 'tomato',
    },
    itemDescription: {

        fontSize: 16,
    },
    itemDOdd: {
        color: '#202020',
    },
    itemDEven: {

        color: 'white',
    },
})
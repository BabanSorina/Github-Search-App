import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

export const HeaderFlatList = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.starHeader}>Stars</Text>
            <Text style={styles.detailsHeader}>Repository Details</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#202020',
        width: Dimensions.get('window').width,

    },
    starHeader: {
        flexDirection: 'row',
        alignContent: 'flex-end',
        fontWeight: 'bold',
        padding: 20,
        fontSize: 20,
        color: '#fff',
        width: 100,
    },
    detailsHeader: {
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
        color: '#fff',
        width: Dimensions.get('window').width - 100,
    },
})
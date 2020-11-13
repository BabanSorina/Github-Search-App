import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { styles } from '../styles';

export const HeaderFlatList = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.starHeader}>Stars</Text>
            <Text style={styles.detailsHeader}>Repository Details</Text>
        </View>
    )
}
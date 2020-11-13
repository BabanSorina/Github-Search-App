import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { styles } from '../styles';
import { Button } from 'react-native-elements';

import { HeaderFlatList } from '../screens/HeaderFlatList';
export const ListScreen = ({ navigation, route }) => {
    const userName = route.params.user;
    const userRepos = route.params.repos;
    const showItem = (item, index) => {
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

    return (
        <View style={styles.listcontainer}>
            <HeaderFlatList style={styles.headerContainer}></HeaderFlatList>
            <FlatList
                data={userRepos}
                renderItem={({ item, index }) =>
                    showItem(item, index)}
                    // keyExtractor={(item) =>{   eroar atunci cand il rulez pe emulator 
                    //     item.id.toString()
                    // }} 
                
            ></FlatList>
            <View style={styles.buttom}>
                <Button
                    style={styles.btnlist}
                    title="Go back to the start screen"
                    onPress={() => navigation.navigate('GitHub Search')}
                    type="clear"
                />
            </View>
        </View>
    );
}

export default ListScreen;
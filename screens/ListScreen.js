import * as React from 'react';
import { View, Text, StyleSheet, FlatList,Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import { HeaderFlatList } from '../components/HeaderFlatList';
import {itemsList} from '../components/itemsList';

export const ListScreen = ({ navigation, route }) => {
    const userName = route.params.user;
    const userRepos = route.params.repos;
    
    return (
        <View >
            <HeaderFlatList style={styles.headerContainer}></HeaderFlatList>
            <FlatList
                data={userRepos}
                renderItem={({ item,index }) =>
                   itemsList(item,index)}
                    
    
            />
            <View style={styles.btnlist}>
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
const styles=StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#202020',
        width: Dimensions.get('window').width,

    },
    btnlist: {

        justifyContent: 'center',
        alignContent: 'center',

        height: 70,
        width: Dimensions.get('window').width - 60,
        maxWidth: 500,
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 20,
        marginTop: 40,
    },

})
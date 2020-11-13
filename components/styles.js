import { StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export const styles = StyleSheet.create({
    container: {

        // alignItems: 'center',
        // justifyContent: 'center',
        paddingRight: 50,
        paddingLeft: 20,
    },
    listContainer: {

    },
    flatlistContainer: {

        alignItems: 'center',
    },
    firstHalf: {
        alignContent: 'flex-start',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100
    },
    secondHalf: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    buttomPart: {

        justifyContent: 'flex-end',
        marginBottom: 36

    },
    welcome: {
        fontSize: 50,
        color: 'red',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,

    },
    touchableBtn: {
        marginRight: 0,
        padding: 0,
        width: Dimensions.get('window').width - 60,
    },
    btn: {

        justifyContent: 'center',
        alignContent: 'center',
        height: 70,
        width: Dimensions.get('window').width - 60,
        maxWidth: 320,

        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 20,

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
    input: {
        justifyContent: 'center',
        alignContent: 'center',
        height: 70,
        width: Dimensions.get('window').width - 60,
        maxWidth: 340,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 20,
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
    starCount: {
        width: 100,
    },
    starCountIcon: {
        fontSize: 30,
        color: 'tomato',
    },
});
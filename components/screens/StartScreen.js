import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles';
import { api } from "../../services/api";
import axios from 'axios';
import { Button } from 'react-native-elements';

export const StartScreen = ({ navigation }) => {
    const [userRepos, setUserRepos] = React.useState([]);
    const [userName, setUserName] = React.useState('');

    const handleOnChange = (text) => {
        if (text === undefined || text == '') {
            return;
        }

        setUserName(text);
    }

    const sortItems = (items) => {

        const compare = (a, b) => {
            const stargazers_countA = a.stargazers_count;
            const stargazers_countB = b.stargazers_count;

            let comparison = 0;
            if (stargazers_countA > stargazers_countB) {
                comparison = -1;
            } else if (stargazers_countA < stargazers_countB) {
                comparison = 1;
            }
            return comparison;
        }

        items.sort(compare);
        return items.slice(0, 10);
    }
    const handleSearchRepos = () => {
        var results;
        axios.get(`https://api.github.com/users/${userName}/repos`)
            .then(response => {
                setUserRepos(response.data);
                results = response.data;
                console.log(userRepos);
            }
            ).then(response => {
                results = sortItems(results);
                navigation.navigate('ReposList', { user: userName, repos: results })
            })

    }


    return (
        <View style={styles.container}>
            <View style={styles.firstHalf}>
                <Text style={styles.welcome} >Welcome!</Text>
                <Text style={styles.text}> Type in the username of a github user and find their repositories </Text>
            </View>
            <View style={styles.secondHald}>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                    value={userName}
                    onChangeText={handleOnChange}>
                </TextInput>
                <TouchableHighlight style={styles.touchableBtn}>
                    <Button
                        activeOpacity={0.9}
                        style={styles.btn}
                        title="Find most successful repository"
                        onPress={handleSearchRepos}
                        type="clear"
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
}

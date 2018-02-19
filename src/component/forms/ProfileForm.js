import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
class ProfileForm extends Component{
    render() {
        return(
            <View>
                <Text>
                    Fname
                </Text>
                <Text>
                    Lname
                </Text>
                <Text>
                    Email
                </Text>
                <Text>
                    Tel
                </Text>
            </View>
        );
    }
}export default ProfileForm
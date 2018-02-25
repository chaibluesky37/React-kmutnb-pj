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
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            name : '',
            tel : '',
        };
        /*this.checkEmailReg = this.checkEmailReg.bind(this);
        this.checkPasswordReg = this.checkPasswordReg.bind(this);
        this.checkRePasswordReg = this.checkRePasswordReg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);*/

    }
    render() {
        return(
            <View>
                <Text>
                    name
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
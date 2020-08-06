import React from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { SimpleButton } from "../../../design-system/buttons";

export default function LoginView({ loginEvent }) {

    return (
        <View>
            <Text> Login </Text>
            <View>
                <TextInput placeholder="Login" />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <SimpleButton title="Login" onPress={loginEvent} />
            </View>
        </View>
    );
}
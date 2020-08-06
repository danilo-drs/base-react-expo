import React from 'react'
import { View, Button, Text } from 'native-base';
import { Link } from 'react-router-dom';
import { SimpleButton } from '../../../design-system/buttons';

export default function HomeView({ setLanguage, language, envTest }) {
    return (
        <View>
            <Button onPress={() => setLanguage('en-us')}>
                <Text>
                    {language}  - {envTest}
                </Text>
            </Button>

            <SimpleButton onPress={() => setLanguage('pt-br')}>
                <Text>
                    {language}  - {envTest}
                </Text>
            </SimpleButton>
        </View>
    )
}
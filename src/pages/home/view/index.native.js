import React from 'react'
import { View, Button, Text } from 'native-base';

export default function HomeView({ setLanguage, language, envTest }) {
    return (
        <View>
            <Button onPress={() => setLanguage('en-us')}>
                <Text>
                    HOME - {language}  - {envTest}
                </Text>
            </Button>

            <Button onPress={() => setLanguage('pt-br')}>
                <Text>
                    HOME - {language}  - {envTest}
                </Text>

            </Button>
        </View>
    )
}
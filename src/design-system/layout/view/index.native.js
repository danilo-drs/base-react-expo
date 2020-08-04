import React from 'react';
import { Container, Header, Content, View, Text, Spinner } from 'native-base';
import { useFonts } from 'expo-font';

export default function LayoutView(props) {
    let [loaded] = useFonts({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    if (!loaded) {
        return <Spinner />;
    }
    return (
        <Container>
            <Header />
            <Content>
                {props.main}
            </Content>
        </Container>
    );
}

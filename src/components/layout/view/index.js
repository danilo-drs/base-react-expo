import React from 'react';
import tw from 'twin.macro'

const BackContainer = tw.body`bg-gray-100 font-sans leading-normal tracking-normal`
const Container = tw.div`flex md:flex-row-reverse flex-wrap`
export default function LayoutView(props) {
    return (<BackContainer>
        <Container>
            {props.children}
        </Container>
    </BackContainer>)
}


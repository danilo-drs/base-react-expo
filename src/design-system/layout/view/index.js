import React, { useContext } from 'react';
import tw from 'twin.macro'
import styled from '@emotion/styled'
import "./../../../assets/styles.css"
import { UiContext } from '../../../common/context-layers/ui';
import {
    BackContainer,
    WrapContainer,
    MainContainer,
} from '../../containers';

const MainPlaceholder = tw.div`w-full md:w-4/5 md:h-screen`
const MainPlaceholderContainer = ({ children }) => (<MainPlaceholder><MainContainer>{children}</MainContainer></MainPlaceholder>)

const SideBarColumn = tw.div`w-full md:w-1/6 bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen `
const SideContainer = tw.div`md:relative md:w-5/6 mx-auto lg:float-left lg:px-6`
const SideListBase = tw.ul`flex flex-row md:flex-col text-center md:text-left`
const SideListItem = tw.li`mr-3 flex-1`
const SideListItemLink = tw.a`block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500`
const SideListItemIcon = tw.i`pr-0 md:pr-3`
const SideListItemText = tw.span`pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block`

const SideList = styled(SideListBase)`
list-style: none;
padding: 0;
`

export default function LayoutView({ main, showSideBar }) {
    const uiContext = useContext(UiContext)

    const mainComponent = (
        <MainPlaceholderContainer>
            {main}
        </MainPlaceholderContainer>
    )
    const sideBarComponent = showSideBar ? (
        <SideBarColumn>
            <SideContainer>
                <SideList>
                    <SideListItem>
                        <SideListItemLink href="/">
                            <SideListItemIcon />
                            <SideListItemText>Originações</SideListItemText>
                        </SideListItemLink>
                    </SideListItem>
                    <SideListItem>
                        <SideListItemLink href="/location">
                            <SideListItemIcon /><SideListItemText>Tomadores</SideListItemText>
                        </SideListItemLink>
                    </SideListItem>
                    <SideListItem>
                        <SideListItemLink>
                            <SideListItemIcon /><SideListItemText>Aprovações</SideListItemText>
                        </SideListItemLink>
                    </SideListItem>
                    <SideListItem>
                        <button className="text-white" onClick={() => uiContext.setLanguage('pt-br')}>
                            {uiContext.language}
                        </button>
                    </SideListItem>
                </SideList>
            </SideContainer>
        </SideBarColumn>) : ''


    return (<BackContainer>
        <WrapContainer>
            {mainComponent}
            {sideBarComponent}
        </WrapContainer>
    </BackContainer>)
}


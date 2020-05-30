import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as AlgoHubLogo} from '../../assets/algohub-logo.svg';

const Wrapper = styled.div({
    display: 'flex',
    fontSize: 24
});

const StyledLogo = styled(AlgoHubLogo)({
    height: '0.7857142857em',
    marginTop: '0.07142857143em'
});

export default function Logo() {
    return (
        <Wrapper>
        <StyledLogo />
        </Wrapper>
    );
}
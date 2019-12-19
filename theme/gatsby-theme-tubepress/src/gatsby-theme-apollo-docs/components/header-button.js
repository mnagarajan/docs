import React from 'react';
import styled from '@emotion/styled';
import { IconLogin } from '@apollo/space-kit/icons/IconLogin';
import { breakpoints } from 'gatsby-theme-apollo-core';
import { colors } from '@apollo/space-kit/colors';

const Container = styled.div({
  display: 'flex',
  flexShrink: 0,
  width: 240,
  [breakpoints.lg]: {
    width: 'auto',
    marginRight: 0
  },
  [breakpoints.md]: {
    display: 'none'
  }
});

const StyledLink = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: colors.indigo.dark,
  lineHeight: 2,
  textDecoration: 'none',
  ':hover': {
    color: colors.indigo.darker
  }
});

const StyledIcon = styled(IconLogin)({
  height: '0.75em',
  marginLeft: '0.5em'
});


export default function HeaderButton () {
  return (
    <Container>
      <StyledLink
        href="https://tubepress.com/"
        target="_blank"
      >
        tubepress.com
        <StyledIcon weight="thin" />
      </StyledLink>
    </Container>
  );
}

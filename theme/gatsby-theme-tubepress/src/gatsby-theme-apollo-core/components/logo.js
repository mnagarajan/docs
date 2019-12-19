import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as DocsBadge } from 'gatsby-theme-apollo-docs/src/assets/docs.svg';
import tubepressLogo from '../../assets/tubepress_logo.png';

const Wrapper = styled.div({ display: 'flex' }),
  StyledApolloIcon = () => <img src={tubepressLogo} alt='TubePress logo' />,
  StyledDocs = styled(DocsBadge)({
    marginLeft: 6,
    marginTop: 4,
    height: 16,
  });

export default function Logo () {
  return (
    <Wrapper>
      <StyledApolloIcon />
      <StyledDocs />
    </Wrapper>
  );
}

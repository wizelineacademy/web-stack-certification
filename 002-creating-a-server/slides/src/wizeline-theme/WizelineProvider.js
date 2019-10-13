import React from 'react';
import styled from 'styled-components';
import ThemeProvider from 'mdx-deck/dist/Provider';

// BG graphics
import DotsGrid from './assets/dots-grid.png';
import WizelineIsotypeImage from './assets/wizeline-isotype@2x.png';

import config from '../../config';
const { twitterHandle } = config;

import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  body {

  }
  h1 {
    font-family: "Proxima Nova, sans-serif";
    font-size: 1.5em;
  }

  .slide-container>div>div>div>div>div {
    padding-bottom: 80px;
    padding-top: 40px;
    padding-right: 148px;
    padding-left: 20px; /* centers content in gray rectangle */
  }
`;

const BGContainer = styled.div([], {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: -1
});

const TwitterHandle = styled.h1([], {
  color: '#E12535',
  position: 'absolute',
  bottom: '0',
  right: '20px',
  fontSize: '24px',
  fontFamily: 'Proxima Nova, sans-serif'
});

const WizelineIsotype = styled.div([], {
  background: `url(${WizelineIsotypeImage})`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: '45px',
  right: '45px',
  width: '60px',
  height: '60px'
});
const GridRectangle = styled.div([], {
  background: `url(${DotsGrid}) repeat`,
  display: 'inline-block',
  float: 'left',
  width: '200px',
  height: '300px',
  backgroundSize: '200px',
  marginTop: '-40px',
  marginRight: '10px'
});

const GreyBlock = styled.div([], {
  backgroundColor: '#F4F4F4',
  marginTop: '5vh',
  width: '90vw',
  height: '85vh'
});

const Provider = ({ children, ...rest }) => {
  if (rest.mode === 'PRESENTER') {
    return (
      <ThemeProvider {...rest}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider {...rest}>
      <GlobalStyles />
      <BGContainer>
        <GreyBlock />
        <GridRectangle />
        <GridRectangle />
        <WizelineIsotype />
        <TwitterHandle>{twitterHandle}</TwitterHandle>
      </BGContainer>

      <div className="slide-container">{children}</div>
    </ThemeProvider>
  );
};

export default Provider;

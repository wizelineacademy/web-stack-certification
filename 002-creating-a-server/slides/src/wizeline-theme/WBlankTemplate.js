import React from 'react';
import styled from 'styled-components';
import WizelineIsotypeImage from './assets/wizeline-isotype@2x.png';

const SliderContainer = styled.div([], {
  width: 'calc(100vw + 168px)',
  fontSize: '24px' // improves code surfer readability
});

const WizeSlide = styled.div([], {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  paddingTop: '60px',
  marginLeft: '148px' // center content
});

const RelativeContainer = styled.div([], {
  position: 'relative'
});

const BGContainer = styled.div([], {
  backgroundColor: 'white',
  position: 'absolute',
  width: 'calc(100vw + 168px)',
  height: 'calc(100vh - 40px)', // -50px to avoid removing the twitter handler
  top: 0,
  left: 0,
  zIndex: -1
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

export default ({ children }) => {
  return (
    <SliderContainer>
      <RelativeContainer>
        <BGContainer>
          <WizelineIsotype />
        </BGContainer>
      </RelativeContainer>

      <WizeSlide>{children}</WizeSlide>
    </SliderContainer>
  );
};

import React, { useEffect, useState } from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// eslint-disable-next-line react/prop-types
export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrollBackground(true);
        } else {
          setScrollBackground(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <IconButton
      fontSize="lg"
      variant='ghost'
      colorScheme={
        scrollBackground ? 'blackAlpha' : 'whiteAlpha'
      }
      color={
        scrollBackground ? 'black' : 'white'
      }
      _dark={{
        color: 'white',
      }}
      rounded={'full'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};

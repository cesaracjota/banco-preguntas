import { useEffect, useState } from 'react';
import { Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, useDisclosure, Text, Stack, DrawerCloseButton, HStack, Button, ButtonGroup, Container, useBreakpointValue, Divider, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../theme/ColorModeSwitcher";

function Header() {

    const sidebar = useDisclosure();

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const itemsNavigation = [
        {
            name: 'Inicio',
            url: '/'
        },
        {
            name: 'Calcular mi puntaje',
            url: '/puntaje'
        },
    ]

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
        <Flex
            as="nav"
            role="navigation"
            pos={{ base: "fixed", lg: "fixed" }}
            bg={scrollBackground ? 'rgba(255, 255, 255, 0.90)' : 'transparent'}
            backdropBlur={
                scrollBackground ? 'blur(10px)' : 'none'
            }
            color={
                scrollBackground ? 'black' : 'white'
            }
            backdropFilter={scrollBackground ? 'saturate(180%) blur(10px)' : 'none'}
            top="0"
            left="0"
            right="0"
            zIndex="sticky"
            alignSelf={'center'}
            justify="space-between"
            _dark={{
                bg: scrollBackground ? "rgba(31, 31, 31, 0.90)" : "transparent",
                backdropFilter: {
                    base: scrollBackground ? 'saturate(180%) blur(10px)' : 'none',
                },
                color: "white"
            }}
            transition={
                "background-color 0.2s ease-in-out, color 0.2s ease-in-out"
            }
        >
            <Container maxW={'7xl'} py={"10px"}>
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to="/" alignSelf={'center'} _hover={{ textDecoration: 'none' }}>
                                <Text
                                    fontSize="20px"
                                    alignSelf={'center'}
                                    fontWeight={'700'}
                                >
                                    Banco de Preguntas
                                </Text>
                            </Link>
                            <HStack spacing="3">
                                <ButtonGroup
                                    variant="link"
                                    spacing="4"
                                    display={{
                                        base: "none",
                                        lg: "inline-flex"
                                    }}
                                >
                                    {
                                        itemsNavigation.map((item, index) => (
                                            <Button
                                                key={index}
                                                as={NavLink}
                                                to={item.url}
                                                variant="link"
                                                size={'md'}
                                                _activeLink={{
                                                    color: scrollBackground ? 'black' : 'white',
                                                }}
                                                color={
                                                    scrollBackground ? 'blackAlpha.700' : 'whiteAlpha.700'
                                                }
                                                _dark={{
                                                    color: 'whiteAlpha.700',
                                                    _activeLink: {
                                                        color: 'white',
                                                    }
                                                }}
                                                _hover={{
                                                    textDecoration: 'none',
                                                    color: scrollBackground ? 'black' : 'white',
                                                }}
                                            >
                                                {item.name}
                                            </Button>
                                        ))
                                    }
                                </ButtonGroup>
                                <Divider
                                    orientation='vertical'
                                    h={6}
                                    borderColor={
                                        scrollBackground ? 'blackAlpha.700' : 'whiteAlpha.700'
                                    }
                                    _dark={{
                                        borderColor: 'whiteAlpha.700',
                                    }}
                                />
                                <ColorModeSwitcher />
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to="/" alignSelf={'center'} _hover={{ textDecoration: 'none' }}>
                                <Text
                                    fontSize="16px"
                                    alignSelf={'center'}
                                    fontWeight={'500'}
                                >
                                    Banco de Preguntas
                                </Text>
                            </Link>
                            <HStack spacing={1} alignSelf={'center'}>
                                <ColorModeSwitcher />
                                <Divider
                                    orientation='vertical'
                                    h={6}
                                    borderColor={
                                        scrollBackground ? 'blackAlpha.700' : 'whiteAlpha.700'
                                    }
                                    _dark={{
                                        borderColor: 'whiteAlpha.700',
                                    }}
                                />
                                <IconButton
                                    aria-label="Menu"
                                    onClick={sidebar.onOpen}
                                    display={{
                                        base: "inline-flex",
                                        lg: "none"
                                    }}
                                    fontSize="xl"
                                    alignSelf={'center'}
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
                                    icon={<HamburgerIcon />}
                                />
                                <Drawer
                                    isOpen={sidebar.isOpen}
                                    onClose={sidebar.onClose}
                                    placement="right"
                                    size="full"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent
                                        bg={'primary.1500'}
                                    >
                                        <DrawerCloseButton
                                            size={'lg'}
                                        />
                                        <Stack
                                            spacing={0}
                                            align="center"
                                            justify="center"
                                            direction="column"
                                            h="100%"
                                            w="100%"
                                            p={10}
                                        >
                                            {
                                                itemsNavigation.map((item, index) => (
                                                    <Button
                                                        key={index}
                                                        as={NavLink}
                                                        to={item.url}
                                                        variant="link"
                                                        colorScheme="gray"
                                                        _activeLink={{
                                                            color: 'white',
                                                        }}
                                                        color={'whiteAlpha.700'}
                                                        _hover={{ textDecoration: 'none' }}
                                                        onClick={sidebar.onClose}
                                                    >
                                                        {item.name}
                                                    </Button>
                                                ))
                                            }
                                        </Stack>
                                    </DrawerContent>
                                </Drawer>
                            </HStack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Flex>
    );
}

export default Header;
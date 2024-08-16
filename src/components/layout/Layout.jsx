import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header";


function Layout({ children, image }) {

    const [isOpen, setIsOpen] = useState(() => {
        const isOpenValue = JSON.parse(localStorage.getItem("isOpen"));
        return isOpenValue ?? false;
    });

    function handleToggle() {
        setIsOpen((prevIsOpen) => {
            const newIsOpen = !prevIsOpen;
            localStorage.setItem("isOpen", JSON.stringify(newIsOpen));
            return newIsOpen;
        });
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            minH="100vh"
            _dark={{
                bgColor: "primary.1100",
                color: "white"
            }}
        >
            <Header onToggle={handleToggle} isOpen={isOpen} />
            {
                image && (
                    <Box
                        position="relative"
                        h="60vh"
                        w="100%"
                        overflow="hidden"
                    >
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            bottom="0"
                            zIndex="1"
                            bgGradient="linear(to-b, primary.1500, rgba(0,0,0,0.2))"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            color="white"
                            textAlign={'left'}
                        >
                            {/* <Container maxW={'5xl'} mt="50px">
                                <Heading as="h1" size={{base: "md", lg: "xl"}} textAlign={'center'}>
                                    Banco de Preguntas
                                </Heading>
                            </Container> */}
                        </Box>
                        <Box
                            position="relative"
                            bgImage={`url('${image}')`}
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            bgPosition="center"
                            h="100%"
                            w="100%"
                            zIndex="0"
                        />
                    </Box>
                )
            }
            <Container flex="1" maxW={'7xl'} mt={image ? '40px' : '100px'}>
                {children}
            </Container>
        </Box>
    );
}

export default Layout;
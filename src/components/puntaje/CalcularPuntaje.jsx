import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Select,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';

const CalcularPuntaje = () => {
    const proceso = [
        {
            nombre: 'CEPRUNSA',
        },
        {
            nombre: 'ORDINARIO',
        },
    ];

    const carrera = [
        {
            nombre: 'ARQUITECTURA',
            isPV: true,
            PV: 0.40 
        },
        {
            nombre: 'ARTES(TODAS SUS ESPECIALIDADES)',
            isPV: true,
            PV: 0.50
        },
        {
            nombre: 'INGENIERIA DE INDUSTRIAS ALIMENTARIAS',
            isPV: true,
            PV: 0.30
        },
        {
            nombre: 'ENFERMERÍA',
            isPV: true,
            PV: 0.40
        },
        {
            nombre: 'MEDICINA',
            isPV: true,
            PV: 0.30
        },
        {
            nombre: 'EDUCACIÓN(TODAS SUS ESPECIALIDADES)',
            isPV: true,
            PV: 0.30
        },
        {
            nombre: 'PSICOLOGIA',
            isPV: true,
            PV: 0.30
        },
        {
            nombre: 'CIENCIAS DE LA COMUNICACIÓN(TODAS SUS ESPECIALIDADES)',
            isPV: true,
            PV: 0.30
        },
        {
            nombre: 'DERECHO',
            isPV: true,
            PV: 0.30
        },
        {
            nombre: 'ECONOMÍA',
            isPV: true,
            PV: 0.25
        },
        {
            nombre: 'LAS DEMAS CARRERAS',
            isPV: false,
            PV: 0
        }
    ];

    const [selectedProceso, setSelectedProceso] = useState('');
    const [selectedCarrera, setSelectedCarrera] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [puntajeFinal, setPuntajeFinal] = useState(0);

    useEffect(() => {
        if (nota1 && nota2 && selectedCarrera) {
            const carreraData = carrera.find((c) => c.nombre === selectedCarrera);
            let resultadoFinal = nota1 * 0.10 + nota2 * 0.40;

            if (carreraData && carreraData.isPV) {
                resultadoFinal += nota3 * 0.60 * carreraData.PV;
            }

            setPuntajeFinal(resultadoFinal);
        } else {
            setPuntajeFinal(0);
        }
    }, [carrera, nota1, nota2, nota3, selectedCarrera]);

    const handleProcesoChange = (event) => {
        setSelectedProceso(event.target.value);
        setSelectedCarrera('');
        setNota1('');
        setNota2('');
        setNota3('');
        setPuntajeFinal(0);
    };

    const handleCarreraChange = (event) => {
        setSelectedCarrera(event.target.value);
        setNota1('');
        setNota2('');
        setNota3('');
        setPuntajeFinal(0);
    };

    return (
        <Box minH={'100vh'}>
            <Box p={4} borderRadius="md" boxShadow="md">
                <Heading as="h1" mb={4} textAlign="center">
                    Calcular Puntaje
                </Heading>
                <FormControl mb={4}>
                    <FormLabel>PROCESO:</FormLabel>
                    <Select value={selectedProceso} onChange={handleProcesoChange} placeholder="SELECCIONE UN PROCESO">
                        {proceso.map((item) => (
                            <option key={item.nombre} value={item.nombre}>
                                {item.nombre}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                {selectedProceso && selectedProceso === 'ORDINARIO' && (
                    <FormControl mb={4}>
                        <FormLabel>CARRERA:</FormLabel>
                        <Select value={selectedCarrera} onChange={handleCarreraChange} placeholder="Seleccione una carrera">
                            {carrera
                                .filter((item) => item.nombre !== 'LAS DEMAS CARRERAS')
                                .map((item) => (
                                    <option key={item.nombre} value={item.nombre}>
                                        {item.nombre}
                                    </option>
                                ))}
                        </Select>
                    </FormControl>
                )}

                {selectedProceso && selectedProceso === 'CEPRUNSA' && (
                    <FormControl mb={4}>
                        <FormLabel>CARRERA:</FormLabel>
                        <Select value={selectedCarrera} onChange={handleCarreraChange} placeholder="Seleccione una carrera">
                            {carrera.map((item) => (
                                <option key={item.nombre} value={item.nombre}>
                                    {item.nombre}
                                </option>
                            ))}
                        </Select>                        
                    </FormControl>
                )}

                {selectedCarrera && (
                    <Box>
                        <Heading as="h2" mb={2}>
                            Notas
                        </Heading>
                        <FormControl mb={4}>
                            <FormLabel>Perfil Vocacional:</FormLabel>
                            <Input
                                type="number"
                                size={'lg'}
                                value={nota1}
                                onChange={(event) => setNota1(event.target.value)}
                                placeholder="Ingrese nota del perfil vocacional"
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>1er Examen:</FormLabel>
                            <Input
                                type="number"
                                size={'lg'}
                                value={nota2}
                                onChange={(event) => setNota2(event.target.value)}
                                placeholder="Ingrese nota del primer examen"
                            />
                        </FormControl>
                        {carrera.find((c) => c.nombre === selectedCarrera)?.isPV && (
                            <FormControl mb={4}>
                                <FormLabel>2do Examen:</FormLabel>
                                <Input
                                    type="number"
                                    size={'lg'}
                                    value={nota3}
                                    onChange={(event) => setNota3(event.target.value)}
                                    placeholder="Ingrese nota del segundo examen"
                                />
                            </FormControl>
                        )}
                        <Box 
                            mt={4} 
                            bg="green.100"
                            _dark={{
                                bg: 'gray.700',
                                color: 'white'
                            }}
                            p={4}
                            borderRadius="md" 
                            textAlign="center"
                        >
                            <Heading as="h2" mb={2} fontSize="lg">
                                Puntaje Final
                            </Heading>
                            <p>{puntajeFinal}</p>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CalcularPuntaje;
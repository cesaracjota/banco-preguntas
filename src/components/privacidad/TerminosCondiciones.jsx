import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

const TerminosCondiciones = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/terminos.md')
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data));
  }, []);

  return (
    <Box>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <Heading as="h2" size="lg" my={4} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <Heading as="h3" size="md" my={4} {...props} />
          ),
          h3: ({ node, ...props }) => (
            <Heading as="h4" size="sm" my={4} {...props} />
          ),
          p: ({ node, ...props }) => <Text my={2} {...props} />,
          ul: ({ node, ...props }) => <Box as="ul" pl={4} my={2} {...props} />,
          ol: ({ node, ...props }) => <Box as="ol" pl={4} my={2} {...props} />,
          li: ({ node, ...props }) => <Box as="li" my={2} {...props} />,
          a: ({ node, ...props }) => (
            <Box as="a" color="blue.500" textDecoration="underline" {...props} />
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </Box>
  );
};

export default TerminosCondiciones;

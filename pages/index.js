import { Box, Flex, Link, Input, IconButton, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'; // Import SearchIcon from @chakra-ui/icons
import { Stack, Image, Heading} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Header = () => {
  return (
    <Box  bg="black" color="white" px={4} py={3}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link fontSize="xl" fontWeight="bold" href='/'>PcariMovie</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Movie</Link>
        <Link href='/'>TV Show</Link>
        <Link href='/'>Video</Link>
        <Link href='/'>FAQ</Link>
        <Link href='/'>Pricing</Link>
        <Link href='/'>Contact Us</Link>
        <Flex alignItems="center">
          <IconButton aria-label="Search" icon={<SearchIcon />} mr={4} />
          <Text fontWeight="bold">Username</Text>
          </Flex>
        </Flex>  
      </Box>

    
  );
}

const BodyOne = () => {
  return (
    <Box bgImage="linear-gradient(to right, #808080, #444444, #000000)" color="white" px={20} py={20 } height="350px">
      <Flex align="center" justify="center">
        {/* Image */}
        <Flex align="center" justify="center" w="200px" h="200px">
          <img src="/music.png" alt="Movie Image" />
        </Flex>
        
        {/* Heading and Paragraph */}
        <Flex align="center" justify="center" flexDirection="column" p={30} ml={8}>
          <h1>Find Your Movie Here!</h1>
          <p>Explore our gallery full of exciting films from all around the globe for your entertainment. No hidden charges or disturbing ads.</p>
        </Flex>
      </Flex>
    </Box>
  );
};

const BodyTwo = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box bgImage="linear(#808080, #444444, #000000)" color="white" py={8} px={4}>
      <Heading as="h2" size="lg" mb={6}>New Release</Heading>
      <Flex justify="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.Movie_ID} movie={movie} />
        ))}
      </Flex>
    </Box>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
      <Image src={movie.Poster} alt={movie.Title} />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>{movie.Title}</Heading>
        <Text fontSize="sm">Genre: {movie.Genre}</Text>
        <Text fontSize="sm">Duration: {movie.Duration}</Text>
        <Text fontSize="sm">Views: {movie.Views}</Text>
        <Text fontSize="sm">Overall rating: {movie.Overall_rating}</Text>
        <Text fontSize="sm">{movie.Description}</Text>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Flex direction="row">
      {/* Box 1 */}
      <Box w="40%" p={70} bg="#444444" color="white" height="350px">
        <Flex align="center" justify="center" flexDirection="column">
          <h1>PcariMovie</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </Flex>
      </Box>
      {/* Box 2 */}
      <Box w="60%" p={20} bg="#1C1C1C" color="white" height="350px">
  <Flex justifyContent="space-between" alignItems="center" flexDirection="row">
    <Flex align="center" justify="center" flexDirection="column">
      <Link href='/'>Product</Link>
      <Link href='/'>Movie</Link>
      <Link href='/'>TV Show</Link>
      <Link href='/'>Video</Link>
    </Flex>
    <Flex align="center" justify="center" flexDirection="column">
      <Link href='/'>Media Group</Link>
      <Link href='/'>Nice Studio</Link>
      <Link href='/'>Nice View</Link>
      <Link href='/'>Nice TV</Link>
    </Flex>
    <Flex align="center" justify="center" flexDirection="column">
      <Link href='/'>Sitemap</Link>
      <Link href='/'>About</Link>
      <Link href='/'>Careers</Link>
      <Link href='/'>Press</Link>
    </Flex>
  </Flex>
</Box>

    </Flex>
  );
};


const HomePage = () => {
  return (
    <>
      <Header></Header>
      <BodyOne></BodyOne>
      <BodyTwo></BodyTwo>
      <Footer></Footer>
    </>
  );
};

export default HomePage;

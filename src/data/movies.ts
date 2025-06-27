import { Movie, ContentRow } from '../types';

// Featured movie for the hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Innovation Summit',
  description: 'Discover the latest breakthroughs in artificial intelligence and machine learning from leading researchers and industry experts.',
  genre: ['Technology', 'Innovation', 'AI'],
  year: 2024,
  rating: 'PG',
  duration: '45m',
  thumbnail: '/src/assets/1.jpg',
  backdrop: '/src/assets/1.jpg',
  videoUrl: '/src/assets/sample-video.mp4',
  trailerUrl: '/src/assets/sample-trailer.mp4',
  isFeatured: true,
  likes: 1250
};

// Sample movies data
export const movies: Movie[] = [
  {
    id: '1',
    title: 'AI Revolution in Healthcare',
    description: 'Exploring how artificial intelligence is transforming medical diagnosis and treatment.',
    genre: ['Healthcare', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '32m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 890
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    description: 'A comprehensive guide to understanding the basics of machine learning algorithms.',
    genre: ['Education', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '28m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 756
  },
  {
    id: '3',
    title: 'Neural Networks Explained',
    description: 'Deep dive into the architecture and functionality of neural networks.',
    genre: ['Science', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1120
  },
  {
    id: '4',
    title: 'Data Science in Practice',
    description: 'Real-world applications of data science across various industries.',
    genre: ['Data Science', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '40m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 634
  },
  {
    id: '5',
    title: 'Robotics and Automation',
    description: 'The future of robotics and its impact on manufacturing and daily life.',
    genre: ['Robotics', 'Future Tech'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 892
  },
  {
    id: '6',
    title: 'Quantum Computing Basics',
    description: 'Introduction to quantum computing principles and potential applications.',
    genre: ['Quantum', 'Computing'],
    year: 2024,
    rating: 'PG',
    duration: '42m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 567
  },
  {
    id: '7',
    title: 'Blockchain Technology',
    description: 'Understanding blockchain technology and its applications beyond cryptocurrency.',
    genre: ['Blockchain', 'Finance'],
    year: 2024,
    rating: 'PG',
    duration: '36m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 723
  },
  {
    id: '8',
    title: 'Cybersecurity Essentials',
    description: 'Essential cybersecurity practices for the digital age.',
    genre: ['Security', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '33m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 445
  },
  {
    id: '9',
    title: 'Cloud Computing Solutions',
    description: 'Exploring cloud computing platforms and their business applications.',
    genre: ['Cloud', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '37m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 812
  },
  {
    id: '10',
    title: 'IoT and Smart Cities',
    description: 'How Internet of Things technology is creating smarter urban environments.',
    genre: ['IoT', 'Smart Cities'],
    year: 2024,
    rating: 'PG',
    duration: '41m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 698
  }
];

// China-specific content
const chinaMovies: Movie[] = [
  {
    id: 'china-1',
    title: 'AI Development in Beijing',
    description: 'Exploring China\'s leading AI research centers and technological innovations.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/31.png',
    backdrop: '/src/assets/31.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 945
  },
  {
    id: 'china-2',
    title: 'Shenzhen Tech Hub',
    description: 'Inside the world\'s electronics manufacturing capital and its innovation ecosystem.',
    genre: ['Technology', 'Manufacturing'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/32.png',
    backdrop: '/src/assets/32.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1123
  },
  {
    id: 'china-3',
    title: 'Chinese Quantum Research',
    description: 'China\'s breakthrough achievements in quantum computing and communication.',
    genre: ['Quantum', 'Research'],
    year: 2024,
    rating: 'PG',
    duration: '42m',
    thumbnail: '/src/assets/33.png',
    backdrop: '/src/assets/33.png',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 876
  },
  {
    id: 'china-4',
    title: 'Smart Cities Initiative',
    description: 'How Chinese cities are implementing smart technology for urban development.',
    genre: ['Smart Cities', 'Urban Planning'],
    year: 2024,
    rating: 'PG',
    duration: '40m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 734
  },
  {
    id: 'china-5',
    title: 'E-commerce Revolution',
    description: 'The transformation of retail through Chinese e-commerce platforms.',
    genre: ['E-commerce', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '36m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 612
  },
  {
    id: 'china-6',
    title: 'Green Technology Solutions',
    description: 'China\'s renewable energy initiatives and environmental technology.',
    genre: ['Green Tech', 'Environment'],
    year: 2024,
    rating: 'PG',
    duration: '39m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 823
  }
];

// Germany-specific content
const germanyMovies: Movie[] = [
  {
    id: 'germany-1',
    title: 'Industry 4.0 in Germany',
    description: 'How German manufacturing is leading the fourth industrial revolution.',
    genre: ['Manufacturing', 'Industry 4.0'],
    year: 2024,
    rating: 'PG',
    duration: '44m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1087
  },
  {
    id: 'germany-2',
    title: 'Automotive Innovation',
    description: 'German automotive industry\'s transition to electric and autonomous vehicles.',
    genre: ['Automotive', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '41m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 956
  },
  {
    id: 'germany-3',
    title: 'Renewable Energy Leadership',
    description: 'Germany\'s pioneering role in renewable energy and sustainability.',
    genre: ['Renewable Energy', 'Sustainability'],
    year: 2024,
    rating: 'PG',
    duration: '37m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 789
  },
  {
    id: 'germany-4',
    title: 'Berlin Tech Scene',
    description: 'The thriving startup ecosystem in Germany\'s capital city.',
    genre: ['Startups', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '33m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 645
  },
  {
    id: 'germany-5',
    title: 'Engineering Excellence',
    description: 'German precision engineering and its global impact.',
    genre: ['Engineering', 'Manufacturing'],
    year: 2024,
    rating: 'PG',
    duration: '45m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1234
  },
  {
    id: 'germany-6',
    title: 'Digital Transformation',
    description: 'How German businesses are embracing digital technologies.',
    genre: ['Digital', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 567
  }
];

// Italy-specific content
const italyMovies: Movie[] = [
  {
    id: 'italy-1',
    title: 'Italian Design Innovation',
    description: 'The intersection of traditional craftsmanship and modern technology in Italy.',
    genre: ['Design', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '36m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 892
  },
  {
    id: 'italy-2',
    title: 'Fashion Tech Revolution',
    description: 'How Italian fashion houses are integrating technology into their designs.',
    genre: ['Fashion', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '34m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 723
  },
  {
    id: 'italy-3',
    title: 'Smart Agriculture',
    description: 'Italian farmers embracing precision agriculture and IoT solutions.',
    genre: ['Agriculture', 'IoT'],
    year: 2024,
    rating: 'PG',
    duration: '39m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 654
  },
  {
    id: 'italy-4',
    title: 'Cultural Heritage Tech',
    description: 'Using technology to preserve and showcase Italy\'s cultural treasures.',
    genre: ['Culture', 'Heritage Tech'],
    year: 2024,
    rating: 'PG',
    duration: '42m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1045
  },
  {
    id: 'italy-5',
    title: 'Milan Innovation District',
    description: 'The transformation of Milan into a European tech hub.',
    genre: ['Innovation', 'Urban Development'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 789
  },
  {
    id: 'italy-6',
    title: 'Sustainable Tourism',
    description: 'How Italy is using technology to promote sustainable tourism.',
    genre: ['Tourism', 'Sustainability'],
    year: 2024,
    rating: 'PG',
    duration: '37m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 567
  }
];

// Japan-specific content
const japanMovies: Movie[] = [
  {
    id: 'japan-1',
    title: 'Robotics in Japan',
    description: 'Japan\'s leadership in robotics technology and human-robot interaction.',
    genre: ['Robotics', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '43m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1456
  },
  {
    id: 'japan-2',
    title: 'Tokyo Smart City',
    description: 'How Tokyo is becoming the world\'s most technologically advanced city.',
    genre: ['Smart Cities', 'Urban Tech'],
    year: 2024,
    rating: 'PG',
    duration: '40m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 1123
  },
  {
    id: 'japan-3',
    title: 'Gaming Innovation',
    description: 'Japan\'s influence on global gaming technology and virtual reality.',
    genre: ['Gaming', 'VR'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 987
  },
  {
    id: 'japan-4',
    title: 'Bullet Train Technology',
    description: 'The engineering marvel of Japan\'s high-speed rail system.',
    genre: ['Transportation', 'Engineering'],
    year: 2024,
    rating: 'PG',
    duration: '41m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 834
  },
  {
    id: 'japan-5',
    title: 'AI in Healthcare',
    description: 'Japanese innovations in AI-powered medical diagnosis and treatment.',
    genre: ['Healthcare', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '36m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 756
  },
  {
    id: 'japan-6',
    title: 'Sustainable Technology',
    description: 'Japan\'s approach to environmental technology and clean energy.',
    genre: ['Environment', 'Clean Tech'],
    year: 2024,
    rating: 'PG',
    duration: '39m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 692
  }
];

// Mexico-specific content
const mexicoMovies: Movie[] = [
  {
    id: 'mexico-1',
    title: 'Fintech Revolution Mexico',
    description: 'How Mexico is leading Latin America\'s financial technology transformation.',
    genre: ['Fintech', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 678
  },
  {
    id: 'mexico-2',
    title: 'Aerospace Industry',
    description: 'Mexico\'s growing aerospace manufacturing and engineering sector.',
    genre: ['Aerospace', 'Manufacturing'],
    year: 2024,
    rating: 'PG',
    duration: '42m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 543
  },
  {
    id: 'mexico-3',
    title: 'Digital Transformation',
    description: 'Mexican businesses embracing digital technologies and e-commerce.',
    genre: ['Digital', 'E-commerce'],
    year: 2024,
    rating: 'PG',
    duration: '37m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 789
  },
  {
    id: 'mexico-4',
    title: 'Renewable Energy Projects',
    description: 'Mexico\'s ambitious renewable energy initiatives and solar power.',
    genre: ['Renewable Energy', 'Solar'],
    year: 2024,
    rating: 'PG',
    duration: '40m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 612
  },
  {
    id: 'mexico-5',
    title: 'Smart Agriculture',
    description: 'Mexican farmers using precision agriculture and sustainable practices.',
    genre: ['Agriculture', 'Sustainability'],
    year: 2024,
    rating: 'PG',
    duration: '38m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 456
  },
  {
    id: 'mexico-6',
    title: 'Tech Startups Guadalajara',
    description: 'The Silicon Valley of Mexico and its thriving startup ecosystem.',
    genre: ['Startups', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '34m',
    thumbnail: '/src/assets/12.jpg',
    backdrop: '/src/assets/12.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 723
  }
];

// Spain-specific content
const spainMovies: Movie[] = [
  {
    id: 'spain-1',
    title: 'Barcelona Tech Hub',
    description: 'Barcelona\'s emergence as a leading European technology center.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '36m',
    thumbnail: '/src/assets/13.jpg',
    backdrop: '/src/assets/13.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 834
  },
  {
    id: 'spain-2',
    title: 'Renewable Energy Leadership',
    description: 'Spain\'s pioneering role in wind and solar energy development.',
    genre: ['Renewable Energy', 'Wind Power'],
    year: 2024,
    rating: 'PG',
    duration: '41m',
    thumbnail: '/src/assets/14.jpg',
    backdrop: '/src/assets/14.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 967
  },
  {
    id: 'spain-3',
    title: 'Smart Tourism Solutions',
    description: 'How Spain is using technology to enhance the tourism experience.',
    genre: ['Tourism', 'Smart Tech'],
    year: 2024,
    rating: 'PG',
    duration: '33m',
    thumbnail: '/src/assets/15.jpg',
    backdrop: '/src/assets/15.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 645
  },
  {
    id: 'spain-4',
    title: 'Telecommunications Innovation',
    description: 'Spain\'s leadership in 5G technology and telecommunications infrastructure.',
    genre: ['Telecommunications', '5G'],
    year: 2024,
    rating: 'PG',
    duration: '39m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 578
  },
  {
    id: 'spain-5',
    title: 'Sustainable Cities',
    description: 'Spanish cities leading the way in sustainable urban development.',
    genre: ['Sustainability', 'Urban Planning'],
    year: 2024,
    rating: 'PG',
    duration: '37m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 712
  },
  {
    id: 'spain-6',
    title: 'Digital Health Innovation',
    description: 'Spain\'s advances in digital health and telemedicine solutions.',
    genre: ['Healthcare', 'Digital Health'],
    year: 2024,
    rating: 'PG',
    duration: '35m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: '/src/assets/sample-video.mp4',
    trailerUrl: '/src/assets/sample-trailer.mp4',
    likes: 489
  }
];

// Content rows with country-specific titles
export const contentRows: ContentRow[] = [
  {
    id: 'china',
    title: 'China',
    movies: chinaMovies
  },
  {
    id: 'germany',
    title: 'Germany',
    movies: germanyMovies
  },
  {
    id: 'italy',
    title: 'Italy',
    movies: italyMovies
  },
  {
    id: 'japan',
    title: 'Japan',
    movies: japanMovies
  },
  {
    id: 'mexico',
    title: 'Mexico',
    movies: mexicoMovies
  },
  {
    id: 'spain',
    title: 'Spain',
    movies: spainMovies
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with most liked movies
  }
];

// Helper function to get most liked movies
export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};
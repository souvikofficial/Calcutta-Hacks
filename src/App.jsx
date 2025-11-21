import './App.css';
import Navbar from './components/Navbar.jsx';
import Theme from './Them/Theme.jsx';
import Hero from './Section/Hero.jsx';
import LazySection from './components/LazySection.jsx';
import Footer from './components/Footer.jsx';

// Lazy load heavy sections
const About = () => import('./Section/About.jsx');
const Timeline = () => import('./Section/Timeline.jsx');
const Tracks = () => import('./Section/Tracks.jsx');
const PRIZES = () => import('./Section/PRIZES.jsx');
const Host = () => import('./Section/Host.jsx');
const Cohost = () => import('./Section/Cohost.jsx');
const Mentors = () => import('./Section/Mentors.jsx');
const Judges = () => import('./Section/Judges.jsx');
const OurPartners = () => import('./Section/OurPartners.jsx');
const Team = () => import('./Section/Team.jsx');
const CommunityPartners = () => import('./components/CommunityPartners.jsx');
const AvatarCardGenerator = () => import('./Section/AvatarCardGenerator.jsx');
const FAQ = () => import('./Section/Faq.jsx');

function App() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      
      <LazySection factory={About} />
      <LazySection factory={Timeline} />
      <LazySection factory={Tracks} />
      <LazySection factory={PRIZES} />
      <LazySection factory={Host} />
      <LazySection factory={Cohost} />
      
      <LazySection factory={Mentors} />
      <LazySection factory={Judges} />
      <LazySection factory={OurPartners} />
      <LazySection factory={Team} />
      <LazySection factory={CommunityPartners} />
      <LazySection factory={AvatarCardGenerator} />
      <LazySection factory={FAQ} />
      
      <Footer />
    </Theme>
  );
}

export default App;

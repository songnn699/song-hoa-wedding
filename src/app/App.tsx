import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { EventDetails } from './components/EventDetails';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';

export default function App() {
  const heroImage = "https://images.unsplash.com/photo-1619905155368-47500f5fa2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwc3Vuc2V0fGVufDF8fHx8MTc2NzcwNTg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const ceremonyImage = "https://images.unsplash.com/photo-1677768062491-07f280ff830a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBmbG93ZXJzfGVufDF8fHx8MTc2NzY2NDIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const receptionImage = "https://images.unsplash.com/photo-1613067532651-7075a620c900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzY3NjM0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const ringsImage = "https://images.unsplash.com/photo-1737498205245-dbb396c262ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBsb3ZlfGVufDF8fHx8MTc2NzY4MzY1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const romanticImage = "https://images.unsplash.com/photo-1658243862459-145b453dd74e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY3NjU5NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  // Carousel images for hero section
  const carouselImages = [
    heroImage,
    romanticImage,
    ceremonyImage,
    ringsImage
  ];

  const galleryImages = [
    heroImage,
    ceremonyImage,
    receptionImage,
    ringsImage,
    heroImage,
    ceremonyImage
  ];

  return (
    <div className="min-h-screen bg-white">
      <AudioPlayer />
      <Header />
      <Hero imageUrl={heroImage} carouselImages={carouselImages} />
      <OurStory />
      <EventDetails />
      <PhotoGallery images={galleryImages} />
      <RSVP />
      <Footer />
    </div>
  );
}
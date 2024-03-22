import { useState } from 'react';
import '../styles/pages/gallery.css';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'facility',
      title: 'Main Workout Area',
      src: '/public/assets/images/gallery-1.jpg',
      description: 'Our spacious main workout area with state-of-the-art equipment.'
    },
    {
      id: 2,
      type: 'image',
      category: 'facility',
      title: 'Cardio Section',
      src: '/public/assets/images/gallery-2.jpg',
      description: 'Dedicated cardio section with treadmills, ellipticals, and bikes.'
    },
    {
      id: 3,
      type: 'image',
      category: 'class',
      title: 'Yoga Class',
      src: '/public/assets/images/gallery-3.jpg',
      description: 'Our popular yoga class led by certified instructors.'
    },
    {
      id: 4,
      type: 'video',
      category: 'class',
      title: 'HIIT Workout Session',
      src: '/assets/videos/gallery-4.mp4',
      thumbnail: '/public/assets/images/gallery-4-thumb.jpg',
      description: 'High-intensity interval training session for maximum calorie burn.'
    },
    {
      id: 5,
      type: 'image',
      category: 'event',
      title: 'Fitness Competition',
      src: '/public/assets/images/gallery-5.jpg',
      description: 'Annual fitness competition hosted at our gym.'
    },
    {
      id: 6,
      type: 'image',
      category: 'facility',
      title: 'Weight Section',
      src: '/public/assets/images/gallery-6.jpg',
      description: 'Comprehensive weight training area with free weights and machines.'
    },
    {
      id: 7,
      type: 'image',
      category: 'class',
      title: 'Spinning Class',
      src: '/public/assets/images/gallery-7.jpg',
      description: 'Energetic spinning class with professional instructors.'
    },
    {
      id: 8,
      type: 'video',
      category: 'event',
      title: 'Community Workout Day',
      src: '/assets/videos/gallery-8.mp4',
      thumbnail: '/public/assets/images/gallery-8-thumb.jpg',
      description: 'Highlights from our monthly community workout day.'
    },
    {
      id: 9,
      type: 'image',
      category: 'facility',
      title: 'Locker Rooms',
      src: '/public/assets/images/gallery-9.jpg',
      description: 'Clean and spacious locker rooms with shower facilities.'
    }
  ];
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Take a visual tour of our facilities, classes, and events</p>
        </div>
      </div>
      
      <section className="section gallery-content">
        <div className="container">
          <div className="gallery-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'facility' ? 'active' : ''}`}
              onClick={() => setFilter('facility')}
            >
              Facilities
            </button>
            <button 
              className={`filter-btn ${filter === 'class' ? 'active' : ''}`}
              onClick={() => setFilter('class')}
            >
              Classes
            </button>
            <button 
              className={`filter-btn ${filter === 'event' ? 'active' : ''}`}
              onClick={() => setFilter('event')}
            >
              Events
            </button>
          </div>
          
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
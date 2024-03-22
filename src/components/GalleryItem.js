import { useState } from 'react';
import '../styles/components/galleryItem.css';
import { FaPlay, FaTimes } from 'react-icons/fa';

const GalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  };

  return (
    <>
      <div className="gallery-item" onClick={openModal}>
        {item.type === 'image' ? (
          <img src={item.src} alt={item.title} />
        ) : (
          <div className="video-thumbnail">
            <img src={item.thumbnail} alt={item.title} />
            <div className="play-icon">
              <FaPlay />
            </div>
          </div>
        )}
        <div className="gallery-item-overlay">
          <h3>{item.title}</h3>
          <p>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="gallery-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
            
            {item.type === 'image' ? (
              <img src={item.src} alt={item.title} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            
            <div className="modal-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
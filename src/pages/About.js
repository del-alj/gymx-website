import '../styles/pages/about.css';
import { FaUsers, FaTrophy, FaHeartbeat } from 'react-icons/fa';

const About = () => {
  const trainers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Head Trainer',
      specialty: 'Strength & Conditioning',
      image: '/public/assets/images/trainer-1.jpg',
      description: 'Alex has over 10 years of experience in fitness training and specializes in strength and conditioning programs.'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Yoga Instructor',
      specialty: 'Flexibility & Mindfulness',
      image: '/public/assets/images/trainer-2.jpg',
      description: 'Sarah is our dedicated yoga instructor with a passion for helping members improve flexibility and mindfulness.'
    },
    {
      id: 3,
      name: 'Mike Chen',
      role: 'Nutrition Coach',
      specialty: 'Weight Management',
      image: '/public/assets/images/trainer-3.jpg',
      description: 'Mike combines his knowledge of nutrition and exercise to create effective weight management programs.'
    },
    {
      id: 4,
      name: 'Jessica Rodriguez',
      role: 'Group Fitness Coach',
      specialty: 'HIIT & Cardio',
      image: '/public/assets/images/trainer-4.jpg',
      description: 'Jessica brings incredible energy to her HIIT and cardio classes, motivating everyone to push their limits.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>About PowerFit Gym</h1>
          <p>Building stronger bodies and healthier lives since 2010</p>
        </div>
      </div>
      
      <section className="section our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our <span>Story</span></h2>
              <p>
                PowerFit Gym was founded in 2010 with a simple mission: to create a welcoming environment where people of all fitness levels could pursue their health and wellness goals. What started as a small local gym has grown into a community of fitness enthusiasts dedicated to supporting each other.
              </p>
              <p>
                Over the years, we've expanded our facilities and services, but our core values remain the same. We believe fitness should be accessible to everyone, and that with the right guidance and support, anyone can transform their life through exercise and proper nutrition.
              </p>
              <p>
                Today, PowerFit Gym is proud to be the fitness home for thousands of members who come through our doors daily to push their limits and become their best selves.
              </p>
            </div>
            <div className="story-image">
              <img src="/assets/images/gym-about.jpg" alt="PowerFit Gym" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section our-values">
        <div className="container">
          <h2 className="section-title">Our <span>Values</span></h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Community</h3>
              <p>We foster a supportive environment where members motivate each other and celebrate successes together.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaTrophy />
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in our facilities, programs, and the service we provide to our members.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaHeartbeat />
              </div>
              <h3>Wellness</h3>
              <p>We believe in a holistic approach to fitness that incorporates physical, mental, and nutritional well-being.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section our-team">
        <div className="container">
          <h2 className="section-title">Meet Our <span>Team</span></h2>
          <div className="team-grid">
            {trainers.map(trainer => (
              <div key={trainer.id} className="trainer-card">
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} />
                </div>
                <div className="trainer-info">
                  <h3>{trainer.name}</h3>
                  <h4>{trainer.role}</h4>
                  <p className="specialty">Specialty: {trainer.specialty}</p>
                  <p>{trainer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Happy Members</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Weekly Classes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
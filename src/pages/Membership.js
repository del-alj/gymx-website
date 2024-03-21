import '../styles/pages/membership.css';
import MembershipCard from '../components/MembershipCard';

const Membership = () => {
  const membershipPlans = [
    {
      id: 1,
      title: 'Basic Plan',
      price: '$29.99',
      period: 'monthly',
      features: [
        'Access to gym facilities',
        'Basic equipment usage',
        'Locker room access',
        'Standard operating hours',
        'Free fitness assessment'
      ],
      isPopular: false
    },
    {
      id: 2,
      title: 'Premium Plan',
      price: '$49.99',
      period: 'monthly',
      features: [
        'Full gym access',
        'Free group classes',
        'Locker with personal key',
        'Extended hours access',
        'Monthly fitness assessment',
        'Nutrition consultation'
      ],
      isPopular: true
    },
    {
      id: 3,
      title: 'Elite Plan',
      price: '$79.99',
      period: 'monthly',
      features: [
        'All Premium features',
        'Personal trainer (2x/month)',
        'Exclusive classes access',
        '24/7 gym access',
        'Quarterly body composition analysis',
        'Custom workout plan',
        'Unlimited guest passes'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="membership-page">
      <div className="membership-header">
        <div className="container">
          <h1>Membership Plans</h1>
          <p>Choose the perfect plan for your fitness journey</p>
        </div>
      </div>
      
      <section className="section membership-plans">
        <div className="container">
          <div className="membership-grid">
            {membershipPlans.map(plan => (
              <MembershipCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section membership-info">
        <div className="container">
          <h2 className="section-title">Membership <span>Information</span></h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>Contract Details</h3>
              <p>Our memberships are on a month-to-month basis with no long-term contracts required. You can cancel anytime with a 30-day notice.</p>
            </div>
            
            <div className="info-card">
              <h3>Getting Started</h3>
              <p>New members receive a complimentary orientation session with one of our fitness experts to get familiar with our equipment and facilities.</p>
            </div>
            
            <div className="info-card">
              <h3>Payment Options</h3>
              <p>We accept all major credit cards, direct bank transfers, and cash payments. Memberships are automatically billed on the first of each month.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          
          <div className="faq-container">
            <div className="faq-item">
              <h3>Can I freeze my membership?</h3>
              <p>Yes, members can freeze their membership for up to 3 months per year for medical reasons or extended travel.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are there any additional fees?</h3>
              <p>There is a one-time registration fee of $49 for new members. This fee is waived during promotional periods.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I try before I buy?</h3>
              <p>Absolutely! We offer a free 1-day pass for prospective members. Contact us to schedule your visit.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I cancel my membership?</h3>
              <p>You can cancel by filling out a cancellation form at our front desk or by sending an email to our membership department.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
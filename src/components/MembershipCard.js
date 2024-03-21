import '../styles/components/membershipCard.css';
import { FaCheck } from 'react-icons/fa';

const MembershipCard = ({ plan }) => {
  return (
    <div className={`membership-card ${plan.isPopular ? 'popular' : ''}`}>
      {plan.isPopular && <div className="popular-badge">Most Popular</div>}
      <div className="card-header">
        <h3>{plan.title}</h3>
        <div className="price">
          <span className="amount">{plan.price}</span>
          <span className="period">/{plan.period}</span>
        </div>
      </div>
      
      <div className="card-body">
        <ul className="features">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <FaCheck className="icon" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="card-footer">
        <button className="btn join-btn">Join Now</button>
      </div>
    </div>
  );
};

export default MembershipCard;
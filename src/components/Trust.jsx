import {
  Heart,
  Award,
  Users,
  Clock,
  Sparkles,
  BookOpen,
  Dog, 
  PawPrint
} from "lucide-react";
import "./Trust.css";

export default function WhyTrustUs() {
  return (
    <section className="trust-section">
        {/* Decorative corner icons */}
            <div className="trust-decor decor-top-left">
            <Dog size={96} />
            </div>

            <div className="trust-decor decor-bottom-left">
            <PawPrint size={80} />
            </div>

            <div className="trust-decor decor-bottom-right">
            <PawPrint size={80} />
            </div>
      <div className="trust-container">
        {/* Heading */}
        <h2 className="trust-title">Why Pet Owners Trust Us</h2>
        <p className="trust-subtitle">
          We're not just another pet care facility. We're a team of dedicated
          animal lovers who treat every pet like our own.
        </p>

        {/* Stats */}
        <div className="trust-stats">
          <Stat icon={<Heart />} value="10,000+" label="Happy Pets ❤️" />
          <Stat icon={<Award />} value="15+" label="Years Experience 🏆" />
          <Stat icon={<Users />} value="50+" label="Expert Staff 👥" />
          <Stat icon={<Clock />} value="24/7" label="Support ⏰" />
        </div>

        {/* Story Card */}
        <div className="story-card">
          <div className="story-accent"></div>

          <h3 className="story-title">
            Our Story <BookOpen size={20} />
          </h3>

          <p className="story-text">
            We started PawCare in 2009 because we saw a need for quality,
            compassionate pet care in our neighborhood. What began as a small
            grooming shop has grown into a full-service pet care center, but our
            values haven't changed: treat every animal with respect, never cut
            corners, and always put the pet's wellbeing first.
          </p>

          <div className="story-features">
            <Feature
              title="Experienced Team"
              text="All our staff are certified professionals with years of hands-on experience."
            />
            <Feature
              title="Clean Facilities"
              text="We maintain high standards of cleanliness and safety in all our spaces."
            />
            <Feature
              title="Flexible Scheduling"
              text="Open early and late to fit your schedule, with weekend appointments available."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small reusable components */

function Stat({ icon, value, label }) {
  return (
    <div className="trust-stat">
      <div className="stat-icon">{icon}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="story-feature">
      <div className="feature-title">
        <Sparkles size={18} /> {title}
      </div>
      <p className="feature-text">{text}</p>
    </div>
  );
}

import {
  Scissors,
  Stethoscope,
  GraduationCap,
  Check
} from "lucide-react";
import "./WhatWeOffer.css";

export default function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Heading */}
        <h2 className="offer-title">What We Offer</h2>
        <p className="offer-subtitle">
          Full-service care for dogs and cats, all under one roof.
        </p>

        {/* Cards */}
        <div className="offer-grid">
          <ServiceCard
            active
            icon={<Scissors />}
            title="Pet Grooming"
            image="https://media.istockphoto.com/id/1021301002/photo/pomeraninan-pet-groomer.webp?a=1&b=1&s=612x612&w=0&k=20&c=QQcnDML3j0d-x1uYTaRXbcfLbsvUzXmsk2aGPSg1Mqo="
            desc="Professional grooming services to keep your pet looking and feeling their best."
            items={[
              "Bathing & Brushing",
              "Nail Trimming",
              "Hair Styling",
              "Ear Cleaning"
            ]}
          />

          <ServiceCard
            icon={<Stethoscope />}
            title="Veterinary Care"
            image="https://media.istockphoto.com/id/1214635081/photo/vet-examining-the-pet.webp?a=1&b=1&s=612x612&w=0&k=20&c=olPcaK5G5pnVNKFxmhsPCk-W8_s63sPuR3lJQaMJhsk="
            desc="Comprehensive medical care from routine checkups to emergency services."
            items={[
              "Health Checkups",
              "Vaccinations",
              "Surgery",
              "Emergency Care"
            ]}
          />

          <ServiceCard
            icon={<GraduationCap />}
            title="Pet Training"
            image="https://images.unsplash.com/photo-1684785332563-ebb3fbcd8008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMHBhcmt8ZW58MXx8fHwxNzcwNjI1Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            desc="Expert training programs to help your pet develop good behavior and social skills."
            items={[
              "Obedience Training",
              "Puppy Classes",
              "Behavior Modification",
              "Agility Training"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function ServiceCard({ icon, title, image, desc, items, active }) {
  return (
    <div className={`service-card ${active ? "active" : ""}`}>
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="card-icon">{icon}</div>
      </div>

      <div className="card-body">
        <h3>{title}</h3>
        <p className="card-desc">{desc}</p>

        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <Check size={16} /> {item}
            </li>
          ))}
        </ul>

        <a href="#" className="card-link">
          Book this service →
        </a>
      </div>
    </div>
  );
}

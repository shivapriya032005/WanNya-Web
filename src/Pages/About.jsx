import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-page">

        {/* Hero */}
        <div className="about-hero">
          <h1>About WanNya</h1>
          <p>
            A place where pets are family, and care comes from the heart 🐾
          </p>
        </div>

        {/* Story */}
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            WanNya was born from a simple yet powerful idea — pets deserve
            the same love, comfort, and attention that we give to our
            families. What started as a small passion project among pet
            lovers grew into a platform designed to simplify and enrich
            pet care.
          </p>
          <p>
            We noticed how difficult it was for pet parents to find
            trusted services, reliable information, and quality products
            in one place. WanNya bridges that gap by bringing everything
            together — thoughtfully and responsibly.
          </p>
        </div>

        {/* Inspiration */}
        <div className="about-section light">
          <h2>Our Inspiration</h2>
          <p>
            Every wagging tail, gentle purr, and curious paw inspires us.
            WanNya is inspired by real moments — late-night vet visits,
            first grooming appointments, joyful playtimes, and the quiet
            comfort pets give us every day.
          </p>
          <p>
            Our goal is to return that unconditional love by creating
            services and experiences that truly put pets first.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="about-section">
          <h2>Our Mission & Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <h4>🐶 Pet-First Always</h4>
              <p>
                Every decision we make prioritizes the health, happiness,
                and safety of pets.
              </p>
            </div>

            <div className="value-card">
              <h4>🤝 Trust & Transparency</h4>
              <p>
                We partner only with verified professionals and trusted
                service providers.
              </p>
            </div>

            <div className="value-card">
              <h4>💛 Care with Compassion</h4>
              <p>
                Empathy drives everything we do — from design to support.
              </p>
            </div>

            <div className="value-card">
              <h4>🌱 Growing Together</h4>
              <p>
                We continuously improve by listening to pet parents and
                learning from them.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="about-section light">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            WanNya is powered by a passionate team of developers,
            designers, veterinarians, and pet enthusiasts.
          </p>

          <div className="team-grid">
            <div className="team-card">
              <div className="avatar">👩‍💻</div>
              <h4>Product & Tech Team</h4>
              <p>
                Building reliable, user-friendly experiences with care
                and precision.
              </p>
            </div>

            <div className="team-card">
              <div className="avatar">🐾</div>
              <h4>Pet Care Experts</h4>
              <p>
                Veterinarians and trainers ensuring accuracy and safety.
              </p>
            </div>

            <div className="team-card">
              <div className="avatar">🎨</div>
              <h4>Design & UX</h4>
              <p>
                Creating warm, accessible, and intuitive designs.
              </p>
            </div>

            <div className="team-card">
              <div className="avatar">💬</div>
              <h4>Support Team</h4>
              <p>
                Always ready to help pet parents with care and patience.
              </p>
            </div>
          </div>
        </div>

      </section>

      
    </>
  );
};

export default About;

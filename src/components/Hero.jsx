import './Hero.css'
import { ChevronRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
        <div className="overlay"></div>

        <div className="container">
            <div className="hero-content">
            <h1>Professional Pet Care in Japan</h1>
            <p>
                From grooming to veterinary care, we've been looking after pets
                in our community since 2025.
            </p>

            <div className="hero-cta">
                <a className="btn primary" href="#services">See Our Services <ChevronRight size={16} /></a>
                <a className="btn secondary" href="tel:5551234567"><Phone size={16} /> Call</a>
            </div>
            </div>
        </div>
    </section>

  )
}

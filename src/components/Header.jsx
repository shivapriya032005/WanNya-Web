import './Header.css'
import { PawPrint } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <PawPrint size={20} color="var(--accent)" />
          <span className="brand">WanNya</span>
        </div>
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="/about">About</a>
          <a href="#services">Services</a>
          <a href="#shop">Shop</a>
          <a href="#bentos">Bentos</a>
          <button className="btn">Start Your Journey</button>
        </nav>
      </div>
    </header>
  )
}

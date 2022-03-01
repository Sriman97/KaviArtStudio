import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Kavi Art Studio</h1>
      </Link>
      <br />
      <Link to="/about-us">About Us</Link>
      <br />

      <Link to="/courses">Courses</Link>
      <br />

      <Link to="/gallery">Gallery</Link>
      <br />

      <Link to="/contact-us">Contact Us</Link>
    </div>
  )
}
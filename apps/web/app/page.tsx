export default async function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Our Website</h1>
      </div>
      <div className="features">
        <h2>Our Features</h2>
        <ul>
          <li>
            <i className="fas fa-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </div>
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <ul>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>John Doe</span>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>Jane Doe</span>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>Bob Smith</span>
          </li>
        </ul>
      </div>
      <footer>
        <p>&copy; 2023 Our Website</p>
      </footer>
    </div>
  );
}

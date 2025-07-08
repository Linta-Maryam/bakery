// About.js
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      {/* Our Story Section */}
      <section style={styles.section}>
        <img src="https://w0.peakpx.com/wallpaper/624/446/HD-wallpaper-bakery-store-building-bakery-store-shop.jpg" alt="Bakery" style={styles.image} />
        <div style={styles.text}>
          <h2>🍞 Our Story</h2>
          <p>
            Sweet Delights began in a cozy kitchen with a dream — to bring smiles with every bite.
            From one oven to a full bakery, our love has baked its way into hearts.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.sectionAlt}>
        <h2>💖 Why Choose Us</h2>
        <ul style={styles.list}>
          <li>🎂 100% Fresh Ingredients</li>
          <li>🍪 Baked with Love</li>
          <li>🧁 Custom Cakes & Pastries</li>
          <li>☕ Cozy Bakery Experience</li>
        </ul>
      </section>

      {/* Meet the Team Section */}
      <section style={styles.teamSection}>
        <h2>👩‍🍳 Meet the Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.card}>
            <img src="https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?s=612x612&w=0&k=20&c=vmDoulcE99YonSh-W70ZulSn6OV0MXSP_mO1PpYN5kM=" alt="Chef Anna" style={styles.teamImg} />
            <h4>Chef Anna</h4>
            <p>Pastry Head</p>
          </div>
          <div style={styles.card}>
            <img src="https://media.istockphoto.com/id/1135382312/photo/professional-chef-plating-gourmet-dish.jpg?s=612x612&w=0&k=20&c=932kpuNbeFLCWHh2GqzaNtYpHsStpavb86tTE8aovTY=" alt="Chef Leo" style={styles.teamImg} />
            <h4>Chef Leo</h4>
            <p>Chocolate Expert</p>
          </div>
          <div style={styles.card}>
            <img src="https://media.istockphoto.com/id/965551830/photo/portrait-of-a-young-woman-with-hat-and-glasses.jpg?s=612x612&w=0&k=20&c=Sf1PB1yr3U61RJF8e5BBW_PBGiwnmyGZ_i-jvJyLjXc=" alt="Chef Mia" style={styles.teamImg} />
            <h4>Chef Mia</h4>
            <p>Creative Baker</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff8fc',
    padding: '40px',
    fontFamily: 'sans-serif'
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '50px',
    flexWrap: 'wrap'
  },
  sectionAlt: {
    backgroundColor: '#fff0f5',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '50px'
  },
  image: {
    width: '300px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  text: {
    maxWidth: '500px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.1rem',
    lineHeight: '1.8'
  },
  teamSection: {
    textAlign: 'center'
  },
  teamGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
    flexWrap: 'wrap'
  },
  card: {
    width: '200px',
    padding: '15px',
    backgroundColor: '#fff0f5',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
  },
  teamImg: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px'
  }
};

export default About;

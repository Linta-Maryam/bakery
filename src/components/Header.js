import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ scrollRefs }) {
  const navigate = useNavigate();

  const scrollTo = (section) => {
    scrollRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    button: {
      backgroundColor: '#d6336c',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    header: {
      backgroundColor: '#fff0f5',
      padding: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'fixed',
      zIndex: '999',
      width: '98%',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#d6336c',
    },
    nav: {
      display: 'flex',
      gap: '15px',
    },
    actions: {
      display: 'flex',
      gap: '15px',
    },
    link: {
      background: 'none',
      border: 'none',
      margin: '0',
      padding: '5px 10px',
      color: '#d6336c',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s, color 0.3s',
    },
    no: {
      backgroundColor: 'none',
      border: 'none',
      padding: '0px',
      margin: '0px',
      font: 'inherit',
      cursor: 'pointer',
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>SWEET DELIGHTS 🎀</h1>
      <nav style={styles.nav}>
        <button onClick={() => scrollTo('hero')} style={{ ...styles.no, ...styles.link }}>Home</button>
        <button onClick={() => scrollTo('about')} style={{ ...styles.no, ...styles.link }}>About</button>
        <button onClick={() => scrollTo('menu')} style={{ ...styles.no, ...styles.link }}>Menu</button>
        <button onClick={() => scrollTo('contact')} style={{ ...styles.no, ...styles.link }}>Contact</button>
      </nav>
      <div style={styles.actions}>
        <button onClick={() => navigate('/login')} style={styles.button}>Login</button>
        <button style={styles.button}>Cart🛒</button>
      </div>
    </header>
  );
}

export default Header;

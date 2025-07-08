import React from 'react';

function Login() {
  const styles = {
    wrapper: {
      paddingTop: '100px', // to avoid overlapping with fixed header
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      minHeight: '100vh',
      backgroundColor: '#fff8fc',
    },
    container: {
      borderRadius: '20px',
      width: '30vw',
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      backgroundColor: '#fff0f5',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '30px',
      marginTop:'40px'
    },
    box: {
      border: '1px solid #d6336c',
      borderRadius: '6px',
      padding: '8px',
      height: '35px',
      width: '98%',
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#d6336c',
    },
    button: {
      height: '40px',
      width: '100%',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#d6336c',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    link: {
      textAlign: 'center',
      marginTop: '10px',
      color: '#d6336c',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.wrapper}>
      <form style={styles.container}>
        <div>
          <p style={styles.label}>Email</p>
          <input style={styles.box} type="email" />
        </div>

        <div>
          <p style={styles.label}>Password</p>
          <input style={styles.box} type="password" />
        </div>

        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#b22250')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#d6336c')}
        >
          LOGIN
        </button>

        <a href="#" style={styles.link}>Forgot Password?</a>
      </form>
    </div>
  );
}

export default Login;

import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '18px' }}>Sorry, the page you are looking for does not exist.</p>
      <p style={{ fontSize: '18px' }}>Please check the URL or go back to the homepage.</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px',
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = '/'}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;

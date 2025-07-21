import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid #e0e0e0', marginTop: '3rem', padding: '3rem 0 1.5rem 0', fontFamily: 'Inter, sans-serif', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '0 2rem' }}>
        {/* Contact */}
        <div style={{ minWidth: 200, marginBottom: 32 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Contact</h3>
          <div style={{ color: '#555', fontSize: 15, lineHeight: '1.8' }}>
            <div>Info@mysite.com</div>
            <div>Tel: 123-456-7890</div>
            <div>500 Terry Francine St</div>
            <div>San Francisco, CA 94158</div>
          </div>
        </div>
        {/* Navigation */}
        <div style={{ minWidth: 200, marginBottom: 32 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Navigation</h3>
          <div style={{ color: '#555', fontSize: 15, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span>Games</span>
            <span>Careers</span>
            <span>About</span>
            <span>Contact</span>
            <span>Accessibility</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Shipping Policy</span>
            <span>Refund Policy</span>
          </div>
        </div>
        {/* Social */}
        <div style={{ minWidth: 200, marginBottom: 32 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Social</h3>
          <div style={{ color: '#555', fontSize: 15, lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span>Discord</span>
            <span>Twitch</span>
            <span>Facebook</span>
            <span>YouTube</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
        {/* Find Us On */}
        <div style={{ minWidth: 200, marginBottom: 32 }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Find Us On</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <img src="/images/google-play.png" alt="Google Play" style={{ width: 140, height: 'auto' }} />
            <img src="/images/app-store.png" alt="App Store" style={{ width: 140, height: 'auto' }} />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #e0e0e0', marginTop: 32, paddingTop: 16, textAlign: 'center', color: '#888', fontSize: 14 }}>
        © 2035 by Tripo. Powered and secured by <a href="https://wix.com" style={{ color: '#888', textDecoration: 'underline' }}>Wix</a>
      </div>
    </footer>
  );
};

export default Footer; 
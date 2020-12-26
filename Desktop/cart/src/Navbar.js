import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart-icon" />
        <span style={styles.cartCount}>3</span>   
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 42,
    marginRight: 30
  },
  nav: {
    height: 50,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -297,
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 14,
    top: -9
  }
};


export default Navbar;
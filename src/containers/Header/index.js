// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Header from 'src/components/Header';
import { setActiveItem } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  nav: state.nav,
  activeItem: state.activeItem,

});

const mapDispatchToProps = dispatch => ({
  setItem: (name) => {
    dispatch(setActiveItem(name));
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// export
export default HeaderContainer;

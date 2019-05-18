import { connect } from 'react-redux';
import { fetchClonno } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    setupApp: () => {
      dispatch(fetchClonno());
    },
  };
};

export default connect(null, mapDispatchToProps);

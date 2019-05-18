import { connect } from 'react-redux';
import { getClonno } from '../../utils/redux-selectors';

const mapStateToProps = state => {
  return {
    clonno: getClonno(state),
  };
};

export default connect(mapStateToProps, null);

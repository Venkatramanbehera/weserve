import {connect} from 'react-redux';
import { RootState, TypedDispatch } from '../../../../redux/redux-store';
import Individual from '../components/Individual';
import { IndividualDTO } from '../services/types';

interface StateProps {
  allIndividual: Array<IndividualDTO>
  loading: boolean;
}

interface DispatchProps {

}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    allIndividual:state.individual.allIndividual,
    loading: state.login.loading,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {};
};

export interface IndividualProps extends StateProps, DispatchProps {}
export const IndividualComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Individual);

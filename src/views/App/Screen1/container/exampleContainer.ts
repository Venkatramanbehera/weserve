import {connect} from 'react-redux';
import {RootState, TypedDispatch} from '../../../../redux/redux-store';
import Example from '../components/Example';
import {fetchQuotes} from '../services/exampleSlice';
import {Quote} from '../services/types';

interface StateProps {
  quotes: Array<Quote>;
  error: string;
  loading: boolean;
}

interface DispatchProps {
  getAllQuotes: () => void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    quotes: state.example.quotes,
    error: state.example.error,
    loading: state.example.loading,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    getAllQuotes: () => {
      dispatch(fetchQuotes());
    },
  };
};

export interface ExampleProps extends StateProps, DispatchProps {}
export const ExampleComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

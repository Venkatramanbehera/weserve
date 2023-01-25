import {connect} from 'react-redux';
import LogIn from '../../Login/components/Login';
import {RootState, TypedDispatch} from '../../../../redux/redux-store';
import {login} from '../services/loginSlice';
import {LoginDTO} from '../services/types';
interface StateProps {
  isLogin: boolean;
  error: string;
  loading: boolean;
}

interface DispatchProps {
  userLogin(data: LoginDTO): void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLogin: state.login.isLogin,
    error: state.login.error,
    loading: state.login.loading,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    userLogin: (data: LoginDTO) => {
      dispatch(login(data));
    },
  };
};

export interface LoginProps extends StateProps, DispatchProps {}
export const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);

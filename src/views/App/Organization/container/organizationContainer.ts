import {connect} from 'react-redux';
import {RootState, TypedDispatch} from '../../../../redux/redux-store';
import Organization from '../components/Organization';
import {OrganizationDTO} from '../services/types';

interface StateProps {
  allOrganization: Array<OrganizationDTO>;
  loading: boolean;
}

interface DispatchProps {}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    allOrganization: state.organization.allOrganization,
    loading: state.login.loading,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {};
};

export interface OrganizationProps extends StateProps, DispatchProps {}
export const OrganizationComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Organization);

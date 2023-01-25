import {connect} from 'react-redux';
import {RootState, TypedDispatch} from '../../../../../redux/redux-store';
import {getAllIndividual} from '../../../../../views/App/Individual/services/individualSlice';
import {IndividualDTO} from '../../../../../views/App/Individual/services/types';
import {getAllOrganization} from '../../../../../views/App/Organization/services/organizationSlice';
import {OrganizationDTO} from '../../../../../views/App/Organization/services/types';
import {UserDetailsDTO} from '../../../../../views/Auth/Login/services/types';
import HomeTab from '../home.tab.routes';

interface StateProps {
  allOrganization: Array<OrganizationDTO>;
  allIndividual: Array<IndividualDTO>;
  loading: boolean;
  userDetails: UserDetailsDTO;
}

interface DispatchProps {
  getAllOrganization(): void;
  getAllIndividual(): void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    allOrganization: state.organization.allOrganization,
    allIndividual: state.individual.allIndividual,
    loading: state.login.loading,
    userDetails: state.login.userDetails,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    getAllOrganization: () => {
      dispatch(getAllOrganization());
    },
    getAllIndividual: () => {
      dispatch(getAllIndividual());
    },
  };
};

export interface HomeProps extends StateProps, DispatchProps {}
export const HomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeTab);

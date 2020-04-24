import { connect } from 'react-redux';
import {
  doSendTip,
  makeSelectTitleForUri,
  makeSelectClaimForUri,
  selectIsSendingSupport,
  selectBalance,
  SETTINGS,
} from 'lbry-redux';
import WalletSendTip from './view';
import { doOpenModal } from 'redux/actions/app';
import { withRouter } from 'react-router';
import { makeSelectClientSetting } from 'redux/selectors/settings';

const select = (state, props) => ({
  isPending: selectIsSendingSupport(state),
  title: makeSelectTitleForUri(props.uri)(state),
  claim: makeSelectClaimForUri(props.uri, false)(state),
  balance: selectBalance(state),
  instantTipEnabled: makeSelectClientSetting(SETTINGS.INSTANT_PURCHASE_ENABLED)(state),
  instantTipMax: makeSelectClientSetting(SETTINGS.INSTANT_PURCHASE_MAX)(state),
});

const perform = dispatch => ({
  openModal: (modal, props) => dispatch(doOpenModal(modal, props)),
  sendSupport: (amount, claimId, isSupport) => dispatch(doSendTip(amount, claimId, isSupport)),
});

export default withRouter(connect(select, perform)(WalletSendTip));

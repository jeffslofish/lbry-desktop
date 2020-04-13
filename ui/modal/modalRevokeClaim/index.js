import { connect } from 'react-redux';
import { doHideModal } from 'redux/actions/app';
import { doAbandonTxo, selectTransactionItems } from 'lbry-redux';
import ModalRevokeClaim from './view';

const select = state => ({
  transactionItems: selectTransactionItems(state),
});

const perform = dispatch => ({
  closeModal: () => dispatch(doHideModal()),
  abandonTxo: txo => dispatch(doAbandonTxo(txo)),
});

export default connect(select, perform)(ModalRevokeClaim);

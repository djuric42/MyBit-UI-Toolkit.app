import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import 'antd/lib/style/css';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import AddressWrapper from './styledAddressWrapper';
import AddressLoader from './styledAddressLoader';
import AddressText from './styledAddressText';

const antIcon = <Icon type="loading" spin />;

const Address = ({ userName, className }) => (
  <div className={className}>
    {!userName ? (
      <AddressLoader>
        <Spin indicator={antIcon} />
        <span>Loading account</span>
      </AddressLoader>
    ) : (
      <AddressWrapper>
        <Jazzicon diameter={39} seed={jsNumberForAddress(userName)} />
        <AddressText>{userName}</AddressText>
      </AddressWrapper>
    )}
  </div>
);

Address.defaultProps = {
  userName: undefined,
};

Address.propTypes = {
  userName: PropTypes.string,
  className: PropTypes.string,
};

Address.defaultProps = {
  className: '',
};

export default Address;

import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { EmailContext } from 'context/Context';
import { emailReducer } from 'reducers/emailReducer';
import rawEmails from 'data/email/emails';

const InboxProvider = ({ children }) => {
  const [emailState, emailDispatch] = useReducer(emailReducer, {
    emails: rawEmails,
    allEmails: rawEmails,
    filters: ['all', 'unread', 'star', 'attachments', 'archive', 'snooze'],
    currentFilter: 'all'
  });

  return (
    <EmailContext.Provider value={{ emailState, emailDispatch }}>
      {children}
    </EmailContext.Provider>
  );
};

InboxProvider.propTypes = { children: PropTypes.node };

export default InboxProvider;

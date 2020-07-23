import React from 'react';

const Snackbar = ({ report, type }) => {

  let icon;

  switch (type) {
    case "success":
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="valleForm__snackbar__icon">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#7bcc02"/>
        </svg>
      )
      break;
    case "error":
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="valleForm__snackbar__icon">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#f4ee42"/>
        </svg>
      )
      break;
  }

  return (
    <span className = { "valleForm__snackbar valleForm__snackbar--open" }>
      { icon }
      { report }
    </span>
  );

}

export default Snackbar;
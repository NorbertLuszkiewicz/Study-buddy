import React, { useCallback, useContext, useState } from 'react';

const SuccessActionContext = React.createContext({});

export const SuccessActionProvider = ({ children }) => {
  const [action, setAction] = useState(null);

  const dispatchAction = useCallback((message) => {
    setAction(message);
    console.log(message, 'dddddsssss');
    setTimeout(() => {
      setAction(null);
    }, 5000);
  }, []);

  return <SuccessActionContext.Provider value={{ action, dispatchAction }}>{children}</SuccessActionContext.Provider>;
};

export const useSuccessAction = () => {
  const actionContext = useContext(SuccessActionContext);

  if (!actionContext) {
    throw Error('useSuccessAction needs to be used inside SuccessActionContext');
  }

  return actionContext;
};

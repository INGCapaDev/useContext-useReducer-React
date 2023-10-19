import React from 'react';

export const createContext = <T extends NonNullable<unknown>>() => {
  const Context = React.createContext<T | undefined>(undefined);
  const useContext = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(
        'useContext must be inside a Provider and a value must be provided'
      );
    }

    return context;
  };
  return [useContext, Context.Provider] as const;
};

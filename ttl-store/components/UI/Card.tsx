'use client';

import React, { useContext, createContext } from 'react';

export type Card = {
  title: string;
  body: string;
  button: string;
}

export type CardProps = {
  children: JSX.Element | JSX.Element[];
  props? : Card;
  className?: string;
};

const CardContext = createContext<Card | undefined>(undefined);
const useCardContext = () => useContext<Card | undefined>(CardContext);
function Card({children, props, className} : CardProps)  {
  return (
    <CardContext.Provider value={props}>
      <div className={`bg-default-blur p-8 rounded-md ${className}`}>
        {children}
      </div>
    </CardContext.Provider>
  )
}

function H2({children} : {children : React.ReactNode})  {
  const props = useCardContext();
  return (
    <h2 className="text-2xl font-bold mb-2 text-white">
      {props?.title || children}
    </h2>
  )
};

function Para ({children} : {children : React.ReactNode}) {
  const props = useCardContext();
  return (
    <p className="mt-2">
      {props?.body || children}
    </p>
  )
};

function Button ({content, callBack} : {content : string, callBack : () => void}) {
  const props = useCardContext();
  return (
    <button onClick={() => callBack()}  className="bg-primary-600 text-white rounded-md mt-2 py-2 px-4">
      {props!.button || content}
    </button>
  )
}


export default Card;
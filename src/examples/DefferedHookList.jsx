import React, { useDeferredValue, useEffect, useMemo } from "react";

export const DefferedHookList = ({ input }) => {
  const LIST_SIZE = 20000;
  const defferedInput = useDeferredValue(input);
  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defferedInput}</div>);
    }
    return l;
  }, [defferedInput]);
  useEffect(() => {
    console.log(`input: ${input} \ndeferredInput: ${defferedInput}`);
  }, [input, defferedInput]);
  return list;
};

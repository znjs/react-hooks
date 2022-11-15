import React, { useLayoutEffect, useRef, useState } from "react";

export const LayoutHook = () => {
  const [showPopup, setShowPopup] = useState(true);
  const popup = useRef();
  const button = useRef();

  // useEffect(() => {
  useLayoutEffect(() => {
    if (popup.current === null || button.current === null) return;
    const { bottom } = button.current.getBoundingClientRect() || 0;
    popup.current.style.top = `${bottom + 25}px`;
  }, [showPopup]);

  return (
    <div>
      <h2>useLayout Hook</h2>
      <div>
        <button ref={button} onClick={() => setShowPopup((prev) => !prev)}>
          popup
        </button>
        {showPopup && (
          <div style={{ position: "absolute" }} className="mx-auto text-center" ref={popup}>
            <p>this is a pop up</p>
          </div>
        )}
      </div>
    </div>
  );
};

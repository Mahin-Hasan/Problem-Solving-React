import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

const Toggle = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  return (
    <ToggleContext.Provider value={{ isActive, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

const Active = ({ children }) => {
  const { isActive } = useContext(ToggleContext);
  return isActive ? children : null;
};

const Inactive = ({ children }) => {
  const { isActive } = useContext(ToggleContext);
  return !isActive ? children : null;
};

const ToggleButton = () => {
  const { toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>Toggle</button>;
};

// Assign subcomponents to the main component
Toggle.Active = Active;
Toggle.Inactive = Inactive;
Toggle.ToggleButton = ToggleButton;

export default Toggle;

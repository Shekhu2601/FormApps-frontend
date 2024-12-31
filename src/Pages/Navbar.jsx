import React, { useState } from 'react';
import './nav.css'; // Import the CSS file

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`toggle-circle ${isToggled ? 'active' : ''}`}> </div>
    </div>
  );
};

export default ToggleButton;

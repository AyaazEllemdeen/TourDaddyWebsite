import React, { useEffect } from 'react';

const RezdyWidget = () => {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://tourdaddyllc.rezdy.com/pluginJs';
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '1000px' }}>
      <iframe
        seamless=""
        width="100%"
        height="1000px"
        frameBorder="0"
        className="rezdy"
        src="https://tourdaddyllc.rezdy.com/catalog/502052/full-day-group-tours?iframe=true"
      ></iframe>
    </div>
  );
};

export default RezdyWidget;

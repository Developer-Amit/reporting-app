import React from 'react';

interface IframeReportProps {
  src: string;
  title: string;
}

const IframeReport: React.FC<IframeReportProps> = ({ src, title }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <iframe
        src={src}
        title={title}
        style={{ width: '100%', height: '500px', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeReport;

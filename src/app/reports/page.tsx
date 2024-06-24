// pages/reports.tsx

import React from 'react';
import Layout from '../../components/Layout';
import IframeReport from '../../components/reporting/IframeReport';

const Reports: React.FC = () => {
  const reportUrl = 'https://app.sigmacomputing.com/embed/1-6nUeyS01uQ8WSo5dLqakRx?:nodeId=MTe6JoiOnG&:fullScreen=true'; // Replace with your actual report URL

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-10">Reports</h1>
      <IframeReport src={reportUrl} title="My Report" />
    </Layout>
  );
};

export default Reports;

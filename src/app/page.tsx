import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the home page of the application.</p>
    </Layout>
  );
};

export default Home;
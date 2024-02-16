import React from 'react';
import UserInterface from '@/components/UserInterface';

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap items-start justify-center min-h-screen bg-gray-100">
      <div className="my-4">
        <UserInterface backendName="go" />
      </div>
    </div>
  );
};

export default Home;

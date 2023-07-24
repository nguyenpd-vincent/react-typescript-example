import React, { ReactNode } from 'react';
import Header from '../common/Header';

interface MainLayoutProps {
    children: ReactNode;
  }

  const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;

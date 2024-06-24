// components/Layout.tsx

import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-800 text-white p-6">
        <div className="text-2xl font-bold mb-4">Navigation</div>
        <ul>
          <li className="mb-2">
            <Link href="/">
              <div className="block p-2 rounded hover:bg-gray-700">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/reports">
              <div className="block p-2 rounded hover:bg-gray-700">Reports</div>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;

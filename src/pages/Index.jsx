import React from 'react';
import { Home, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Button variant="ghost"><Home className="mr-2" size={16} />Home</Button></li>
              <li><Button variant="ghost"><User className="mr-2" size={16} />Profile</Button></li>
              <li><Button variant="ghost"><Settings className="mr-2" size={16} />Settings</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to My App</h2>
          <p className="text-gray-600">
            This is a bare-bones application that you can modify and build upon. 
            Start by editing this content or adding new components.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 My App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
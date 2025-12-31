import React from 'react';
import { Shield } from 'lucide-react';

export default function DirectIPBlockPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-red-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Direct IP Access Denied
            </h1>
            <p className="text-lg text-gray-600">
              Access via direct IP address is not permitted for security reasons.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Status</p>
                  <p className="text-sm text-gray-600">Access Forbidden</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">Error Code</p>
                  <p className="text-sm text-gray-600">403</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Reason:</span> Direct IP access is blocked
              </p>
              <p className="text-xs text-gray-500">
                This website must be accessed through its proper domain name.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">What can you do?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Use the proper domain name instead of the IP address</li>
              <li>• If you accessed this page via the domain, contact the website administrator.</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            © 2025 Ghost143 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
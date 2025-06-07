'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-base-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <a
            href="mailto:contact@prograpassion.com"
            className="text-primary hover:text-accent transition-colors"
          >
            contact@prograpassion.com
          </a>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} PrograPassion. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 
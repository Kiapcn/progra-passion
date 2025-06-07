'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import type { Selection } from '@/types';

interface SelectionCardProps {
  selection: Selection;
  initialOpen?: boolean;
}

export default function SelectionCard({ selection, initialOpen = false }: SelectionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(initialOpen);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, handleEscape]);

  useEffect(() => {
    if (modalRef.current && overlayRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        if (isModalOpen) {
          gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: 'power2.out' }
          );
          gsap.fromTo(
            contentRef.current,
            { scale: 0.95, opacity: 0, y: 20 },
            { 
              scale: 1, 
              opacity: 1, 
              y: 0, 
              duration: 0.4, 
              ease: 'back.out(1.7)',
              clearProps: 'all'
            }
          );
        } else {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in'
          });
          gsap.to(contentRef.current, {
            scale: 0.95,
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: 'back.in(1.7)'
          });
        }
      });

      return () => ctx.revert();
    }
  }, [isModalOpen]);

  return (
    <>
      <article className="card bg-base-100 shadow-xl h-full transition-all hover:shadow-2xl">
        <figure className="relative h-48 w-full overflow-hidden">
          <Image
            src={selection.imageUrl}
            alt={selection.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{selection.title}</h2>
          <p className="text-gray-600 line-clamp-2">{selection.description}</p>
          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary"
              aria-label={`Voir les détails de ${selection.title}`}
            >
              Voir les détails
            </button>
          </div>
        </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div 
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Overlay */}
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            ref={contentRef}
            className="relative z-10 w-full max-w-2xl rounded-lg bg-base-100 p-6 shadow-xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 btn btn-ghost btn-sm"
              aria-label="Fermer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={selection.imageUrl}
                alt={selection.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            <h2 id="modal-title" className="text-2xl font-bold mb-4">
              {selection.title}
            </h2>
            <p className="text-gray-600 mb-6">{selection.description}</p>

            {selection.items.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Formations incluses :</h3>
                <ul className="space-y-2">
                  {selection.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg bg-base-200 p-4"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm whitespace-nowrap"
                      >
                        Voir la formation
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
} 
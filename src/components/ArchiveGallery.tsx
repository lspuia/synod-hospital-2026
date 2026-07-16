'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const archiveImages = [
  '1.JPG',
  '2.JPG',
  'Dr. G.P.Roberts.JPG',
  'Dr. John Williams.JPG',
  'Dr. Peter Fraser.JPG',
  'Fraser te nupa.JPG',
  'Image-01.JPG',
  'Image-01_2.JPG',
  'Image-02.JPG',
  'Image-03.JPG',
  'Image-04.JPG',
  'Image-05.JPG',
  'Image-06.JPG',
  'Image-07.JPG',
  'Image-08.JPG',
  'Image-09.JPG',
  'Image-10.JPG',
  'Image-11.JPG',
  'Image-12.JPG',
  'Image-13.JPG',
  'Image-14.JPG',
  'Image-15.JPG',
  'Image-16.JPG',
  'Image-17.JPG',
  'Image-18.JPG',
  'Image-19.JPG',
  'Image-20.JPG',
  'Image-21.JPG',
  'Image-22.JPG',
  'Image-23.JPG',
  'Image-24.JPG',
  'Image-25.JPG',
  'Image-26.JPG',
  'Image-27.JPG',
  'Image-28.JPG',
  'Image-29.JPG',
  'Image-30.JPG',
  'Image-31.JPG',
  'Image-32.JPG',
  'Image-33.JPG',
  'Image-34.JPG',
  'Image-35.JPG',
  'Image-36.JPG',
  'Image-37.JPG',
  'Image-38.JPG',
  'Image-39.JPG',
  'Image-40.JPG',
  'Image-41.JPG',
  'Image-42.JPG',
  'Image-43.JPG',
  'Image-44.JPG',
  'Image-45.JPG',
  'Image-46.JPG',
  'Image-47.JPG',
  'Image-48.JPG',
  'Image-49.JPG',
  'Image-50.JPG',
  'Image-51.JPG',
  'Image-52.JPG',
  'Image-53.JPG',
  'Image-54.JPG',
  'Image-55.JPG',
  'Image-56.JPG',
  'Image-57.JPG',
  'Image-58.JPG',
  'Image-59.JPG',
  'Image-60.JPG',
  'Image-61.JPG',
  'Image-62.JPG',
  'Image-63.JPG',
  'Image-64.JPG',
  'Image-65.JPG',
  'Image-66.JPG',
  'Image-67.JPG',
  'Image-68.JPG',
  'Image-69.JPG',
  'Image-70.JPG',
  'Image-71.JPG',
  'Image-72.JPG',
  'Image-73.JPG',
  'Image-74.JPG',
  'Image-75.JPG',
  'Image-76.JPG',
  'Image-77.JPG',
  'Image-78.JPG',
  'Image-79.JPG',
  'Image-80.JPG',
  'Image-81.JPG',
  'Image-82.JPG',
  'Image-83.JPG',
  'Image-85.jpg',
  'Miss A.D.Haries.JPG',
  'Miss Eirlys Williams.JPG',
  'Miss Imogen P.Roberts.JPG',
  'Miss May Bounds.JPG',
  'Miss Molly Parker.JPG',
  'Miss W.M.Jones.JPG',
  'Miss. G.M.Evans.JPG',
  'Nurses.jpg',
  'Pi Muani Feli.jpg',
  'Pi muani te.jpg',
  'Pi puii farewell.jpg',
  'Pict0011.JPG',
  'Pict0012.JPG',
  'Pict0013.JPG',
  'Pict0014.JPG',
  'Pict0016.JPG',
  'Pict0017.JPG',
  'Pict0018.JPG',
  'Pict0019.JPG',
  'Pict0020.JPG',
  'Pict0021.JPG',
  'Pu Daka farewell.jpg',
  'R.K.Nghakliana.jpg',
  'group.jpg',
  'hosp 1957.jpg',
  'hospital 010.jpg',
  'hospital 011.jpg',
  'hospital 013.jpg',
  'hospital 014.jpg',
  'nurses - 32.jpg',
  'nurses 2.jpg',
  'nurses 3.jpg',
  'old lawmna ward.jpg',
];

// Preview images - hand-picked interesting ones (12 images)
const previewImages = [
  'Dr. John Williams.JPG',
  'Miss. G.M.Evans.JPG',
  'hosp 1957.jpg',
  'Nurses.jpg',
  'Fraser te nupa.JPG',
  'old lawmna ward.jpg',
  'Dr. G.P.Roberts.JPG',
  'Miss Eirlys Williams.JPG',
  'R.K.Nghakliana.jpg',
  'nurses - 32.jpg',
  'Pu Daka farewell.jpg',
  'group.jpg',
];

function getDisplayName(filename: string): string {
  return filename.replace(/\.(JPG|jpg)$/, '');
}

export default function ArchiveGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % archiveImages.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + archiveImages.length) % archiveImages.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, goNext, goPrev]);

  return (
    <>
      <style>{`
        .archive-preview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        @media (min-width: 600px) {
          .archive-preview-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 900px) {
          .archive-preview-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
      {/* Preview Grid */}
      <div className="archive-preview-grid">
        {previewImages.map((img) => (
          <button
            key={img}
            onClick={() => openGallery(archiveImages.indexOf(img))}
            style={{
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: 'var(--surface)',
              borderRadius: '4px',
              overflow: 'hidden',
              aspectRatio: '1',
              position: 'relative',
            }}
          >
            <Image
              src={`/archive_pics/${encodeURIComponent(img)}`}
              alt={getDisplayName(img)}
              fill
              sizes="(min-width: 900px) 25vw, (min-width: 600px) 33vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {/* Browse All Link */}
      <button
        onClick={() => openGallery(0)}
        style={{
          background: 'none',
          border: '1px solid var(--rule)',
          padding: '12px 24px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '15px',
          cursor: 'pointer',
          color: 'var(--ink)',
          borderRadius: '4px',
        }}
      >
        Browse all {archiveImages.length} photos
      </button>

      {/* Gallery Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={closeGallery}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 24px',
              color: '#fff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', opacity: 0.7 }}>
              {currentIndex + 1} / {archiveImages.length}
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '16px' }}>
              {getDisplayName(archiveImages[currentIndex])}
            </span>
            <button
              onClick={closeGallery}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                cursor: 'pointer',
                padding: '4px 12px',
                lineHeight: 1,
              }}
              aria-label="Close gallery"
            >
              &times;
            </button>
          </div>

          {/* Image Container */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 60px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={goPrev}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                fontSize: '32px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Previous image"
            >
              &#8249;
            </button>

            {/* Image */}
            <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%', width: '100%', height: 'calc(100vh - 140px)' }}>
              <Image
                src={`/archive_pics/${encodeURIComponent(archiveImages[currentIndex])}`}
                alt={getDisplayName(archiveImages[currentIndex])}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#fff',
                fontSize: '32px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>

          {/* Footer */}
          <div
            style={{
              padding: '16px 24px',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '13px',
              textAlign: 'center',
            }}
          >
            Use arrow keys to navigate, Esc to close
          </div>
        </div>
      )}
    </>
  );
}

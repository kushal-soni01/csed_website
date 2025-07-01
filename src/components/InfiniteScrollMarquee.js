// InfiniteScrollMarquee.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
// Removed: import './InfiniteScrollMarquee.css'; // This import caused the error

const InfiniteScrollMarquee = ({
  items = [],
  title = "Our Team",
  subtitle = "Meet the amazing people behind our success",
  speed = 1,
  itemWidth = 170 // Adjusted default item width to accommodate larger images and spacing
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const animationFrameId = useRef(null); // Changed from useState to useRef
  const containerRef = useRef(null);

  // Default items if none provided
  const defaultItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1494790108755-2616c96fff9e?w=200&h=200&fit=crop&crop=face",
      text: "Sarah Johnson"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      text: "Mike Chen"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      text: "Emma Wilson"
    }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;
  // Duplicate items enough times to ensure seamless looping during drag and auto-scroll
  // We need at least two full sets for the loop to work correctly, plus some buffer
  const infiniteItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];
  const totalWidth = displayItems.length * itemWidth; // Total width of one full set of original items

  // Function to start the automatic scrolling animation
  const startAutoScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      setCurrentTranslate(prev => {
        let newTranslate = prev - speed;
        if (newTranslate <= -totalWidth) {
          newTranslate = 0;
        }
        return newTranslate;
      });
      animationFrameId.current = requestAnimationFrame(animate); // Update ref directly
    };

    // Clear any existing animation frame before starting a new one
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(animate); // Start animation
  }, [speed, totalWidth]); // Dependencies for startAutoScroll

  // Effect for auto-scrolling
  useEffect(() => {
    // Only animate if not currently dragging
    if (!isDragging) {
      startAutoScroll();
    }

    // Cleanup function to stop animation when component unmounts or dragging starts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isDragging, startAutoScroll]); // Removed animationId from dependencies

  // Mouse down handler for initiating drag
  const handleMouseDown = useCallback((e) => {
    e.preventDefault(); // Prevent default browser drag behavior (e.g., image drag)
    setIsDragging(true);
    setStartX(e.clientX); // Record initial mouse X position
    // Pause auto-scroll when dragging starts
    if (animationFrameId.current) { // Check ref directly
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null; // Clear ref
    }
  }, []); // No dependency on animationId anymore

  // Mouse move handler for dragging
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return; // Only move if dragging is active

    e.preventDefault(); // Prevent text selection
    const currentX = e.clientX;
    const diff = currentX - startX; // Calculate horizontal difference

    setCurrentTranslate(prev => {
      let newTranslate = prev + diff; // Apply difference to current translation

      // Wrap around for infinite scrolling during drag
      // If translated too far right (positive), shift left by totalWidth
      while (newTranslate > 0) {
        newTranslate -= totalWidth;
      }
      // If translated too far left (negative beyond two sets), shift right by totalWidth
      // This ensures we always have content to drag into view
      while (newTranslate <= -totalWidth * 2) {
        newTranslate += totalWidth;
      }

      return newTranslate;
    });

    setStartX(currentX); // Update startX for the next move event
  }, [isDragging, startX, totalWidth]);

  // Mouse up handler for ending drag
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Resume auto-scroll when dragging ends
    startAutoScroll(); // Call startAutoScroll to resume
  }, [startAutoScroll]); // Dependency on startAutoScroll

  // Mouse leave handler for ending drag if mouse leaves the container
  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      // Resume auto-scroll if dragging stopped by leaving
      startAutoScroll(); // Call startAutoScroll to resume
    }
  }, [isDragging, startAutoScroll]); // Dependencies on isDragging and startAutoScroll

  // Wheel event handler for horizontal scrolling with mouse wheel
  const handleWheel = useCallback((e) => {
    e.preventDefault(); // Prevent vertical page scroll
    const wheelDelta = e.deltaY * 0.5; // Adjust sensitivity

    setCurrentTranslate(prev => {
      let newTranslate = prev - wheelDelta; // Apply wheel delta

      // Wrap around for infinite scrolling
      while (newTranslate > 0) {
        newTranslate -= totalWidth;
      }
      while (newTranslate <= -totalWidth * 2) {
        newTranslate += totalWidth;
      }

      return newTranslate;
    });
  }, [totalWidth]);

  // Global mouse event listeners for dragging, ensures drag continues even if mouse leaves container
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <>
      <style>
        {`
        /* InfiniteScrollMarquee.css */

        .infinite-scroll-container {
          width: 100%;
          background: linear-gradient(to right, #dbeafe, #faf5ff);
          padding: 3rem 0;
          overflow: hidden;
        }

        .header-section {
          margin-bottom: 2rem;
          text-align: center;
        }

        .main-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: #6b7280;
        }

        .instructions {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        }

        .scroll-wrapper {
          position: relative;
          overflow: hidden; /* This hides any content that goes beyond the wrapper's bounds */
        }

        .scroll-container {
          display: flex;
          cursor: grab;
          user-select: none;
          width: max-content; /* Allows content to define its width */
          transition: none; /* No CSS transition for transform, handled by JS */
        }

        .scroll-container:active {
          cursor: grabbing;
        }

        .scroll-item {
          flex-shrink: 0;
          margin: 0 1.5rem; /* 1.5rem = 24px on each side */
          text-align: center;
          /* Removed transform transition here to prevent conflicts with JS animation */
        }

        /* Hover effect for the entire item, but without scaling */
        .scroll-item:hover {
          /* No transform: scale here to prevent clipping */
        }

        .image-container {
          position: relative;
          margin-bottom: 1rem;
          /* Ensure enough space for the scaled border/shadow if any */
          padding: 4px; /* Add a small padding to ensure border/shadow doesn't get clipped by its own container */
        }

        .circular-image {
          width: 8rem; /* Increased image size to 8rem (128px) */
          height: 8rem; /* Increased image size to 8rem (128px) */
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden; /* Ensures image stays within circle */
          border: 4px solid white; /* Initial border color */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition for hover */
        }

        /* Hover effect for the circular image: change border color and add stronger shadow */
        .scroll-item:hover .circular-image {
          border-color: #3b82f6; /* Tailwind blue-500 */
          box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.2), 0 6px 10px -3px rgba(0, 0, 0, 0.1);
          /* Removed transform: scale here */
        }

        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          -webkit-user-drag: none;
        }

        .glow-effect {
          position: absolute;
          inset: 0;
          width: 8rem; /* Matched image size */
          height: 8rem; /* Matched image size */
          margin: 0 auto;
          border-radius: 50%;
          background: linear-gradient(to right, rgba(96, 165, 250, 0.2), rgba(168, 85, 247, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none;
        }

        .scroll-item:hover .glow-effect {
          opacity: 1;
        }

        .text-container {
          padding: 0 0.5rem;
        }

        .item-text {
          font-size: 0.875rem;
          font-weight: 500;
          color: #1f2937;
          white-space: nowrap; /* Keep text on one line */
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .infinite-scroll-container {
            padding: 2rem 0;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .scroll-item {
            margin: 0 1rem;
          }

          .circular-image {
            width: 6rem; /* Slightly smaller on mobile */
            height: 6rem;
          }

          .glow-effect {
            width: 6rem; /* Slightly smaller on mobile */
            height: 6rem;
          }
        }
        `}
      </style>

      <div className="infinite-scroll-container">
        <div className="header-section">
          <h2 className="main-title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
          {/* <p className="instructions">
            Click and drag to scroll • Use mouse wheel for horizontal scroll
          </p> */}
        </div>

        <div className="scroll-wrapper">
          <div
            ref={containerRef}
            className="scroll-container"
            style={{
              transform: `translateX(${currentTranslate}px)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
          >
            {infiniteItems.map((item, index) => (
              <div
                key={`${item.id}-${Math.floor(index / displayItems.length)}-${index}`}
                className="scroll-item"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="image-container">
                  <div className="circular-image">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="item-image"
                      draggable={false}
                    />
                  </div>
                  <div className="glow-effect"></div>
                </div>

                <div className="text-container">
                  <p className="item-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollMarquee;

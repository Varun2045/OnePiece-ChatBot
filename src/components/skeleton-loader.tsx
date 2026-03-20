"use client";

const SkeletonLoader = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px' }}>
    {[...Array(3)].map((_, i) => (
      <div key={i} style={{
        display: 'flex',
        justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
        gap: '10px'
      }}>
        {i % 2 === 1 && (
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
            backgroundSize: '200% 100%',
            animation: 'skeleton-shimmer 1.5s infinite'
          }} />
        )}
        <div style={{
          maxWidth: '72%',
          height: '40px',
          borderRadius: i % 2 === 0 ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
          background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-shimmer 1.5s infinite'
        }} />
        {i % 2 === 0 && (
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)',
            backgroundSize: '200% 100%',
            animation: 'skeleton-shimmer 1.5s infinite'
          }} />
        )}
      </div>
    ))}
  </div>
);

export default SkeletonLoader;

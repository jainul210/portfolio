'use client';
export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          top: '-200px',
          left: '-200px',
          filter: 'blur(60px)',
          opacity: 0.8,
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)',
          top: '-100px',
          right: '-150px',
          filter: 'blur(60px)',
          opacity: 0.7,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)',
          top: '50%',
          left: '30%',
          filter: 'blur(60px)',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #c7d2fe 0%, transparent 70%)',
          bottom: '-100px',
          left: '10%',
          filter: 'blur(60px)',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          bottom: '-50px',
          right: '5%',
          filter: 'blur(60px)',
          opacity: 0.6,
        }}
      />
    </div>
  );
}

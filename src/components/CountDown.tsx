import { useEffect, useState } from 'react';

function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date(target).getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, targetDate - now);

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className='grid grid-cols-4 gap-3 text-center my-6'>
      {[
        { label: 'Ngày', value: time.d },
        { label: 'Giờ', value: time.h },
        { label: 'Phút', value: time.m },
        { label: 'Giây', value: time.s },
      ].map((item) => (
        <div key={item.label} className='rounded-xl bg-rose-50 p-3'>
          <div className='text-2xl font-bold text-rose-600'>{item.value}</div>
          <div className='text-xs text-gray-500'>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
export default Countdown;

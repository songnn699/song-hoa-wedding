import './App.css';
import PhotoAlbum from './components/Album';
import Countdown from './components/CountDown';
import WeddingMap from './components/GoogleMap';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSV';
import Timeline from './components/Timeline';
import './index.css';

export default function App() {
  return (
    <div className='min-h-screen bg-[#fffaf5] px-4 py-10 flex justify-center'>
      <div className='max-w-xl mx-auto space-y-10'>
        {/* Header */}
        <div className='text-center pt-8'>
          <h1 className='text-4xl font-bold text-rose-600'>Men and Women</h1>
          <p className='text-sm text-gray-600'>14.12.2025</p>
        </div>

        {/* Countdown */}
        <Countdown target='2025-12-14T10:00:00' />

        {/* Intro */}
        <div className='text-center text-gray-700'>
          <p>Họ và tên cô dâu – chú rể</p>
        </div>

        <LoveStory />

        {/* Thông tin */}
        <div className='text-gray-700 space-y-2'>
          <p>
            <b>⏰ Thời gian:</b> 10:00 · 20/10/2025
          </p>
          <p>
            <b>📍 Địa điểm:</b> Nhà hàng ABC – TP.HCM
          </p>
        </div>

        {/* Album */}
        <PhotoAlbum />

        <Timeline />

        {/* Map */}
        <WeddingMap />

        <RSVP />
        <button
          className='
          mt-8 w-full py-3 rounded-full
          bg-rose-500 text-white font-semibold
          hover:bg-rose-600 transition
        '
        >
          Xác nhận tham dự
        </button>

        <p className='mt-6 text-xs text-gray-400'>
          ❤️ Gentlemen · Save the Date
        </p>
      </div>
    </div>
  );
}

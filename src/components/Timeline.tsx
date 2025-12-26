const timeline = [
  { time: '10:00', text: 'Chào đón khách' },
  { time: '10:30', text: 'Khai tiệc cưới' },
  { time: '11:00', text: 'Ảnh & games' },
];

function Timeline() {
  return (
    <div className='space-y-4'>
      {timeline.map((e, i) => (
        <div key={i} className='flex items-center gap-3'>
          <div className='w-16 font-bold text-rose-500'>{e.time}</div>
          <div>{e.text}</div>
        </div>
      ))}
    </div>
  );
}
export default Timeline;
function WeddingMap() {
  return (
    <div className='mt-8 rounded-2xl overflow-hidden shadow'>
      <iframe
        title='Wedding location'
        src='https://www.google.com/maps?q=10.776889,106.700806&z=15&output=embed'
        className='w-full h-65 border-0'
        loading='lazy'
      />
    </div>
  );
}
export default WeddingMap;

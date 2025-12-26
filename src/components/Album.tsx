import img1 from '../assets/couple1.jpg';
import img2 from '../assets/couple2.jpg';
import img3 from '../assets/couple3.jpg';
import img4 from '../assets/couple4.jpg';

function PhotoAlbum() {
  const images = [img1, img2, img3, img4];

  return (
    <div className='grid grid-cols-2 gap-3 my-8'>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt='Wedding'
          className='aspect-square rounded-2xl object-cover shadow hover:scale-105 transition'
        />
      ))}
    </div>
  );
}
export default PhotoAlbum;
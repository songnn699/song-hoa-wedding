import { STORIES_BLOG } from '../constants/blogContent';

function LoveStory() {
  return (
    <div className='space-y-16'>
      {STORIES_BLOG.map((story, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-8 items-center`}
        >
          <img
            src={story.image}
            alt={story.title}
            className='w-full md:w-1/2 rounded-2xl shadow-lg object-cover'
          />

          <div className='md:w-1/2'>
            <p className='text-sm text-rose-400 mb-1'>{story.date}</p>
            <h2 className='text-2xl font-bold mb-3'>{story.title}</h2>
            <p className='leading-relaxed text-gray-700'>{story.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default LoveStory;

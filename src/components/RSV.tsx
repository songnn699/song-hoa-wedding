function RSVP() {
  return (
    <form className='space-y-3 p-4 bg-white rounded-xl shadow-lg'>
      <input
        className='w-full border px-3 py-2 rounded'
        placeholder='Tên bạn'
      />
      <select className='w-full border px-3 py-2 rounded'>
        <option>Đến</option>
        <option>Xin lỗi, bận rồi</option>
      </select>
      <button
        type='submit'
        className='w-full bg-rose-500 text-white py-2 rounded-lg'
      >
        Gửi phản hồi
      </button>
    </form>
  );
}
export default RSVP;

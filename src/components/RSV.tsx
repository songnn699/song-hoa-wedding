import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RSVP() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [attend, setAttend] = useState('Đến');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    padding:         '0.9rem 0',
    borderRadius:    0,
    border:          'none',
    borderBottom:    '1px solid var(--black)',
    backgroundColor: 'transparent',
    color:           'var(--black)',
    fontFamily:      'var(--font-body)',
    fontSize:        '1.05rem',
    fontWeight:      400,
    outline:         'none',
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ padding: '3rem 0', textAlign: 'center' }}
      >
        <p style={{
          fontFamily:  'var(--font-display)',
          fontSize:    'clamp(1.6rem, 3.5vw, 2.2rem)',
          fontStyle:   'italic',
          fontWeight:  400,
          color:       'var(--black)',
          margin:      '0 0 0.5rem',
        }}>
          Cảm ơn, {name}!
        </p>
        <p style={{
          fontFamily:  'var(--font-body)',
          fontSize:    '1.05rem',
          color:       'var(--gray-mid)',
          fontWeight:  400,
          margin:      0,
        }}>
          {attend === 'Đến'
            ? 'Chúng tôi rất vui khi được đón bạn.'
            : 'Chúng tôi rất tiếc khi bạn không thể đến.'}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <div>
        <label style={{
          display:       'block',
          fontFamily:    'var(--font-body)',
          fontSize:      '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color:         'var(--gray-mid)',
          fontWeight:    500,
          marginBottom:  '0.5rem',
        }}>
          Tên của bạn
        </label>
        <input
          style={inputStyle}
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder='Nhập họ tên'
        />
      </div>

      <div>
        <label style={{
          display:       'block',
          fontFamily:    'var(--font-body)',
          fontSize:      '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color:         'var(--gray-mid)',
          fontWeight:    500,
          marginBottom:  '0.5rem',
        }}>
          Phản hồi
        </label>
        <select
          style={inputStyle}
          value={attend}
          onChange={e => setAttend(e.target.value)}
        >
          <option>Đến</option>
          <option>Xin lỗi, bận rồi</option>
        </select>
      </div>

      <motion.button
        type='submit'
        whileHover={{ backgroundColor: 'var(--off-black)' }}
        whileTap={{ scale: 0.98 }}
        style={{
          padding:         '1.1rem 3rem',
          backgroundColor: 'var(--black)',
          color:           'var(--white)',
          border:          'none',
          fontFamily:      'var(--font-body)',
          fontSize:        '0.78rem',
          textTransform:   'uppercase',
          letterSpacing:   '0.25em',
          fontWeight:      500,
          alignSelf:       'flex-start',
          transition:      'background-color 0.2s',
        }}
      >
        Gửi phản hồi
      </motion.button>
    </motion.form>
  );
}

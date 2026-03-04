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

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          textAlign:       'center',
          padding:         '3rem 2rem',
          borderRadius:    '1.25rem',
          backgroundColor: 'var(--card)',
          border:          '1px solid var(--blush)',
          boxShadow:       '0 4px 24px rgba(201,115,122,0.08)',
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>♥</div>
        <p style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '1.6rem',
          fontStyle:   'italic',
          color:       'var(--rose)',
          fontWeight:  300,
          margin:      0,
        }}>
          Cảm ơn, {name}!
        </p>
        <p style={{
          fontFamily:  'var(--font-body)',
          fontSize:    '0.88rem',
          color:       'var(--brown-mid)',
          marginTop:   '0.5rem',
          fontWeight:  300,
        }}>
          {attend === 'Đến'
            ? 'Chúng tôi rất vui khi được đón bạn.'
            : 'Chúng tôi rất tiếc khi bạn không thể đến.'}
        </p>
      </motion.div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width:           '100%',
    padding:         '0.75rem 1rem',
    borderRadius:    '0.65rem',
    border:          '1px solid var(--blush)',
    backgroundColor: '#fff',
    color:           'var(--warm-brown)',
    fontFamily:      'var(--font-body)',
    fontSize:        '0.9rem',
    fontWeight:      300,
    outline:         'none',
    transition:      'border-color 0.2s',
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      style={{
        display:         'flex',
        flexDirection:   'column',
        gap:             '0.9rem',
        padding:         '2rem 1.75rem',
        borderRadius:    '1.25rem',
        backgroundColor: 'var(--card)',
        border:          '1px solid var(--blush-light)',
        boxShadow:       '0 4px 24px rgba(201,115,122,0.07)',
      }}
    >
      <input
        style={inputStyle}
        placeholder='Tên của bạn'
        value={name}
        onChange={e => setName(e.target.value)}
        required
        onFocus={e  => (e.target.style.borderColor = 'var(--rose)')}
        onBlur={e   => (e.target.style.borderColor = 'var(--blush)')}
      />

      <select
        style={inputStyle}
        value={attend}
        onChange={e => setAttend(e.target.value)}
      >
        <option>Đến</option>
        <option>Xin lỗi, bận rồi</option>
      </select>

      <motion.button
        type='submit'
        whileHover={{ scale: 1.02, backgroundColor: 'var(--rose-dark)' }}
        whileTap={{ scale: 0.97 }}
        style={{
          width:          '100%',
          padding:        '0.85rem',
          borderRadius:   '2rem',
          border:         'none',
          backgroundColor:'var(--rose)',
          color:          '#fff',
          fontFamily:     'var(--font-body)',
          fontSize:       '0.75rem',
          fontWeight:     400,
          textTransform:  'uppercase',
          letterSpacing:  '0.22em',
          transition:     'background-color 0.2s',
        }}
      >
        Gửi phản hồi
      </motion.button>
    </motion.form>
  );
}

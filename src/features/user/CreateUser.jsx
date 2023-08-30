import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Selamat datang bosku! Yuk kasih tau nama kamu 😎
      </p>

      <input
        type="text"
        placeholder="Nama Lengkap"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72 mt-5"
      />
    </form>
  );
}

export default CreateUser;

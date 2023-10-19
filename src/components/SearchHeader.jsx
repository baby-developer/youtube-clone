import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="flex items-center p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex gap-2 items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold text-3xl">YouTube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex justify-center w-full">
        <input
          className="w-7/12 p-2 outline-none text-gray-50 bg-black"
          type="search"
          placeholder="Search..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="bg-zinc-600 px-4"
          type="submit"
          aria-label="Search by keyword"
        >
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';

export default function Avatar() {
  const avatarURL = useSelector();

  return (
    <div>
      <img src={avatarURL} alt="User avatar" />
    </div>
  );
}

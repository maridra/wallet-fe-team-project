import React from "react";
import zxcvbn from "zxcvbn";
import s from '../RegisterForm/PasswordStrength.module.scss';

const PasswordStrength = ({ password }) => {
  const result = zxcvbn(password);
  const num = (result.score * 100) / 4;

  const progressColor = () => {
    switch (result.score) {
      case 0:
        return 'none';
      case 1:
        return '#FF6596';
      case 2:
        return '#FED057';
      case 3:
        return '#80d564';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: progressColor()
  })

  return (
    <>
      <div className={s.progressBar}>
        <div className={s.progress} style={changePasswordColor()}></div>
      </div>
    </>
)
}

export default PasswordStrength;
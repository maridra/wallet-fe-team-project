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
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
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
      <div className={s.progress}>
        <div className={s.progress} style={changePasswordColor()}></div>
      </div>
    </>
)
}

export default PasswordStrength;
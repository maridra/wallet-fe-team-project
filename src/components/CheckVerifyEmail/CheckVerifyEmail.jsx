import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import authOperations from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import s from "../CheckVerifyEmail/CheckVerifyEmail.module.scss";

const CheckVerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const param = useParams();
  const verificationToken = param.verificationToken;
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (verificationToken === token) {
      dispatch(authOperations.verifyEmail({ verificationToken }))
        .then((response) => {
          const { status } = response.payload;
          if (status === "success") {
            setVerified(true);
          }
        }).catch(() => {
          setVerified(false);
        })
    }
  }, [dispatch, verificationToken, token])


  return (
    <div>
      {verified ? (
        <div className={s.containerCheck}>
          <h1 className={s.textMsg}>Email verified successfully</h1>
          <Link to="/login">
            <button className={s.btn}>LOGIN</button>
          </Link>
        </div>
      ) : (
        <h1 className={s.textMsg}>404 Not Found</h1>
      )}
    </div>
  )
}

export default CheckVerifyEmail;
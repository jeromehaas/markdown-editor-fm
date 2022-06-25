import { Icon } from "components/01-atoms/icon/icon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  updateLoginFormInput,
  resetLoginFormInput,
  submitLoginForm,
} from "redux/actions/login-form";

const LoginForm = () => {
  // We do not need to fire a Redux action everytime the user clicks a button and cause React to re-render. This is inefficient because the UI does not change.
  // If we keep the user input in the local component state, we can avoid not needed re-renders and changes to the global state. The global state does not need to know about incomplete changes.
  // For example: A user is creating an account on a Signup page. We do not need to make an API call everytime the user types a letter for their name or phone number.
  // We only need to do that when the user has finished typing and is ready to submit the entire form.

  const [currentInput, setCurrentInput] = useState("");

  const handleClick = (e, input) => {
    e.preventDefault(); // this will prevent a re-render everytime you click a button
    setCurrentInput(currentInput + input);
  };

  const handleSubmit = () => {
    dispatch(submitLoginForm(currentInput)); // update the store when the user has finished inputting the entire password
    setCurrentInput(""); // reset the local state, the store does not need to know about this value
  };

  const dispatch = useDispatch();
  const router = useRouter();
  // const loginForm = useSelector((state) => state.loginForm);
  const session = useSelector((state) => state.session);

  // Previously, this ran everytime the user clicked a button, now we only need to run this when the user is finished.
  useEffect(() => {
    if (currentInput.length === 6) {
      handleSubmit();
    }
  }, [currentInput]);

  useEffect(() => {
    if (session.isLoggedIn) {
      router.push("/dashboard");
    }
  }, [session]);

  return (
    <div className="login-form">
      <div className="login-form__wrapper">
        <form className="login-form__dial-wrapper">
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "1")}
          >
            1
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "2")}
          >
            2
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "3")}
          >
            3
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "4")}
          >
            4
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "5")}
          >
            5
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "6")}
          >
            6
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "7")}
          >
            7
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "8")}
          >
            8
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "9")}
          >
            9
          </button>
          <button
            className="login-form__dial-button"
            onClick={(e) => handleClick(e, "0")}
          >
            0
          </button>
        </form>
        <div className="login-form__dots-wrapper">
          <div
            className={`login-form__dot ${
              currentInput.length >= 1 ? "login-form__dot--active" : ""
            }`}
          ></div>
          <div
            className={`login-form__dot ${
              currentInput.length >= 2 ? "login-form__dot--active" : ""
            }`}
          ></div>
          <div
            className={`login-form__dot ${
              currentInput.length >= 3 ? "login-form__dot--active" : ""
            }`}
          ></div>
          <div
            className={`login-form__dot ${
              currentInput.length >= 4 ? "login-form__dot--active" : ""
            }`}
          ></div>
          <div
            className={`login-form__dot ${
              currentInput.length >= 5 ? "login-form__dot--active" : ""
            }`}
          ></div>
          <div
            className={`login-form__dot ${
              currentInput.length >= 6 ? "login-form__dot--active" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export { LoginForm };

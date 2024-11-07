import { RxExclamationTriangle } from "react-icons/rx";

const AuthErrorPage: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <RxExclamationTriangle className="icon" />

          <p>{"Oops, something went wrong."}</p>
        </div>
        <div>
          <p>
            {"To go back to the sign in page, "}

            <a
              href="/api/auth/signin"
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
import { RxExclamationTriangle } from "react-icons/rx";

const AuthErrorPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-950">
      <div className="bg-primary rounded-lg p-8 text-white">
        <div className="">
          <RxExclamationTriangle className="icon" color="yellow"  size={40}/>

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
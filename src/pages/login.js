import Topbar from "@/components/Topbar";
import bg from "../../public/grey_badge.png";

export default function Login() {
  return (
    <>
      <Topbar />
      <div className="main flex flex-col items-center">
        <h1 className="text-2xl my-5">Welcome, Jason.eth</h1>
        <div className="form-details my-5 flex flex-col items-center space-y-11">
          <div
            className="rounded-full border border-black bg-no-repeat bg-cover h-44 w-44 flex items-center justify-center"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <label
              htmlFor="pfp-upload"
              className="font-fredoka text-xl underline cursor-pointer font-light"
            >
              Pick a pfp
              <input type="file" id="pfp-upload" style={{ display: "none" }} />
            </label>
          </div>
          <div className="text-center">
            <label htmlFor="handle-input">Pick a handle:</label>
            <br />
            <div className="input-box-handle w-64 h-24 h-100 bg-white flex justify-center items-center border-2 border-black my-2">
              <input
                type="text"
                id="handle-input"
                className="w-48 border-b-2 border-black focus:outline-0"
              />
            </div>
          </div>
          <div className="text-center">
            <label htmlFor="email-input">Set email:</label>
            <br />
            <div className="input-box-handle w-64 h-24 h-100 bg-white flex justify-center items-center border-2 border-black my-2">
              <input
                type="text"
                id="email-input"
                className="w-48 border-b-2 border-black focus:outline-0"
              />
            </div>
          </div>
          <button className="bg-black text-white w-64 h-28 text-xl">
            Let&apos;s go
          </button>
        </div>
      </div>
    </>
  );
}

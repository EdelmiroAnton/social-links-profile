import "./App.css";
import profile_img from "../assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <>
      <main className="bg-backgroundCard w-[327px] h-[501px] rounded-2xl ">
        <div className="mt-6">
          <img
            src={profile_img}
            alt="profile image"
            className="rounded-full m-auto w-[80px]"
          />
        </div>

        <p className="text-white text-center text-[1.125rem] font-normal mt-6">
          Jessica Randall
        </p>
        <p className="text-fontGreen text-center text-[0.625rem] font-semibold mt-1">
          London, United Kingdom
        </p>
        <p className=" text-gray-300 text-center text-[0.5625rem] font-normal mt-4">
          "Front-end developer and avid reader."
        </p>
      </main>
    </>
  );
}

export default App;

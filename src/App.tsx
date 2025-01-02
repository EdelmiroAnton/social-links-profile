import "./App.css";
import profile_img from "../assets/images/avatar-jessica.jpeg";

function App() {
  const links: string[] = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <>
      <main className="bg-backgroundCard w-[310px] h-[550px] rounded-2xl mr-3 ml-3">
        <div className="mt-7">
          <img
            src={profile_img}
            alt="profile image"
            className="rounded-full m-auto w-[80px]"
          />
        </div>
        <section>
          <p className="text-white text-center text-[1.4375rem] font-normal mt-6">
            Jessica Randall
          </p>
          <p className="text-fontGreen text-center text-[0.8125rem] font-semibold mt-1">
            London, United Kingdom
          </p>
          <p className=" text-gray-300 text-center text-[0.8125rem] font-normal mt-5">
            "Front-end developer and avid reader."
          </p>
        </section>
        <ul className="max-w-full w-[270px] mx-auto mt-6">
          {links.map((el) => (
            <li className="bg-backgroundLinks text-white text-center text-[0.75rem] font-semibold mt-4 mb-3 p-1 rounded-lg h-10 content-center">
              {el}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;

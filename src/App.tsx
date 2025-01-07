import "./App.css";
import profile_img from "../src/assets/images/avatar-jessica.jpeg";

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
      <main className="bg-backgroundCard w-[310px] h-[550px] rounded-2xl mr-3 ml-3  desktop:w-[360px] desktop:h-[600px]">
        <div className="mt-7">
          <img
            src={profile_img}
            alt="profile image"
            className="rounded-full m-auto w-[80px] desktop:w-[100px]"
          />
        </div>
        <h1 className="text-white text-center text-[1.4375rem] font-normal mt-6 desktop:text-[1.75rem]">
          Jessica Randall
        </h1>
        <p className="text-fontGreen text-center text-[0.8125rem] font-semibold mt-1 desktop:text-[0.9375rem]">
          London, United Kingdom
        </p>
        <p className=" text-gray-300 text-center text-[0.8125rem] font-normal mt-5 desktop:text-[0.9375rem]">
          "Front-end developer and avid reader."
        </p>
        <section aria-labelledby="region1">
          <ul
            id="region1"
            className="max-w-full w-[270px] mx-auto mt-6 desktop:w-[300px]"
          >
            {links.map((el, i) => (
              <li
                key={i}
                className="bg-backgroundLinks text-white text-center text-[0.8125rem] font-semibold mt-4 mb-3 p-1 rounded-lg h-10 content-center hover:bg-fontGreen hover:cursor-pointer hover:pointer  hover:transition hover:ease-in-out hover:duration-300 hover:text-backgroundLinks  desktop:h-11 desktop:text-[0.9375rem]"
              >
                {el}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;

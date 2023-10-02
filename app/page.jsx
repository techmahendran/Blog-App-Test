/* eslint-disable react/no-unescaped-entities */
"use client";

const HomePage = () => {
  const handleBtn = () => {
    alert("My Sample Blog Sites");
  };

  return (
    <>
       <section className="mt-5 p-[60px] sm:p-[80px] md:p-[78px] text-center bg-[url('./assets/home.jpg')] bg-no-repeat bg-cover bg-center text-white">
        <h1 className="text-4xl text-center md:text-5xl xl:text-6xl leading-[45px] uppercase md:leading-[75px]">
          I'm Front End Develper and My Sample{" "}
          <span className="text-[#4cc9ce] font-bold">Blog Site</span>
        </h1>
        <button
          onClick={handleBtn}
          className="mt-10 bg-bgcolor hover:scale-[1.1] ease-in duration-300 p-2 rounded-lg"
        >
          Get Started
        </button>
      </section>
    </>
  );
};
export default HomePage;

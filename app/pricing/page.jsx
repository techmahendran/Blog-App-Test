import Image from "next/image";
import image_1 from "../assets/pricing_img/fontend.jpeg";
import image_2 from "../assets/pricing_img/react.jpeg";
import image_3 from "../assets/pricing_img/next_js.png";

export const metadata = {
  title: "Welcome Skill Page",
};

const page = () => {
  return (
    <>
      <div className="flex items-center flex-wrap py-10">
        <div className="w-[280px] m-3 grow bg-white p-4 rounded-md shadow-lg text-center hover:-translate-y-5 transition">
          <Image
            src={image_1}
            alt="Picture of the author"
            className=" w-[100px] mx-auto h-[100px] rounded-full"
          ></Image>
          <h1 className="text-[25px] pt-4">Front End Develper</h1>
          <p className="pt-4">
            A front-end developer builds the front-end portion of websites and
            web applications—the part users see and interact with. A front-end
            developer creates websites and applications using web languages such
            as HTML, CSS, and JavaScript that allow users to access and interact
            with the site
          </p>
        </div>

        <div className="w-[280px] m-3 grow bg-white p-4 rounded-md shadow-lg text-center hover:-translate-y-5 transition">
          <Image
            src={image_2}
            alt="Picture of the author"
            className=" w-[100px] mx-auto h-[100px] rounded-full block"
          ></Image>
          <h1 className="text-[25px] pt-4">React</h1>
          <p className="pt-4">
            A React developer uses their programming skills to create
            JavaScript-based applications for web or mobile environments. The
            building user interfaces (UI). It is the dream of every aspiring
            ReactJS developer to find ReactJS jobs that are flexible, full of
            growth opportunities and exposure.
          </p>
        </div>

        <div className=" w-[280px] m-3 grow bg-white p-4 rounded-md shadow-lg text-center hover:-translate-y-5 transition">
          <Image
            src={image_3}
            alt="Picture of the author"
            className=" w-[100px] mx-auto h-[100px] rounded-full"
          ></Image>
          <h1 className="text-[25px] pt-4">Next js</h1>
          <p className="pt-4">
            Though both React and Next. js help create effective web user
            interfaces, Next js is more feature-rich and opinionated than React.
            It is especially well-suited for websites focused on search engine
            optimization (SEO) or pre-rendering. Next js is undeniably the
            future of React development.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;

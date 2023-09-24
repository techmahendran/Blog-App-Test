import Image from "next/image";
import image_3 from "../assets/about_img.jpeg";

export const metadata = {
  title: "Welcome About Page",
};

const AboutPage = () => {
  return (
    <>
      <h1 className=" text-2xl font-bold mt-6 text-center md:text-left">
        AboutPage
      </h1>
      <div className="flex justify-between items-center flex-wrap pt-4">
        <div className="text-[20px] max-w-[600px] text-center md:text-left md:max-w-[500px] lg:max-w-[600px] pb-4 mr-1">
          <p>
            Nature is made of everything we see around us – trees, flowers,
            plants, animals, sky, mountains, forests and more. Human beings
            depend on nature to stay alive. Nature helps us breathe, gives us
            food, water, shelter, medicines, and clothes. We find many colors in
            nature which make the Earth beautiful.Nature holds a balance between
            diverse ecosystems for smooth functioning. It consists of air,
            water, plants, animals, human life, and many more. Nature provides
            us with water to drink, air to breathe, food to eat, clothes to
            wear, and a shelter to live in. Imbalance in nature can be
            life-threatening to all.Everything we see around us constitutes
            nature, including the sun, the moon, trees, flowers, fruits, human
            beings, birds, animals, etc. In nature, everyone depends on one
            another to keep the ecosystem healthy. For survival, every creature
            is interrelated and reliant on one another.
          </p>
        </div>

        <div className="w-[330px] h-[330px] md:w-[224px] md:h-full object-cover shadow-md mx-auto md:text-left">
          <Image
            src={image_3}
            alt="about"
            className=" w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;

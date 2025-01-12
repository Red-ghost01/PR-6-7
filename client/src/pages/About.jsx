import aboutimage from "../assets/images/image_2022_03_21T09_50_51_653Z.webp";

const About = () => {
  return (
    <div className={`bg-[#0A0D13] py-12 md:px-[140px] sm:px-[70px] px-[30px] relative`}>
      <div className={`text-white grid md:grid-cols-2 grid-cols-1 m-auto max-w-[1800px]`} >
        <div className="mt-[10%]">
          <h1 className="text-[42px] font-bold pb-[30px]">About Us</h1>
          <p className="pr-4 text-[16px] md:text-[24px]">
            At CISC, we believe that technology should empower your business –
            not complicate it. <br />
            That’s why we’re dedicated to providing innovative, reliable, and
            responsive IT solutions that keep your operations running smoothly
            and securely. <br />
            <br />
            With a local team of experienced professionals and a commitment to
            rapid response, CISC is the IT company Perth businesses can rely on
            for seamless IT management. …
          </p>
          <div className="bg-[#1F242E] text-white md:w-[160%] w-full  mt-4 flex justify-around  z-50 relative items-center">
            <div className="text-center py-7">
              <p className="md:text-[48px] text-[24px]">268+</p>
              <p className="md:text-[18px] text-[9px]">Global Client</p>
            </div>
            <div className="w-[2px] h-[60px] bg-[#2B313C]"></div>
            <div className="text-center my-7">
              <p className="md:text-[48px] text-[24px]">176+</p>
              <p className="md:text-[18px] text-[9px]">Pool of Talent</p>
            </div>
            <div className="w-[2px] h-[60px] bg-[#2B313C]"></div>
            <div className="text-center py-7">
              <p className="md:text-[48px] text-[24px]">96+</p>
              <p className="md:text-[18px] text-[9px]">Happy Customers</p>
            </div>
          </div>
          <div className="flex items-center mt-[46px] w-[196px] h-[50px] text-black bg-[#F49F0A] rounded">
            <button
              className="flex items-center justify-center w-[70%] h-full bg-transparent focus:outline-none"
              aria-label="Get in touch"
            >
              Read More
            </button>
            <div className="flex justify-center items-center w-[30%] h-full text-[30px] bg-[#EB9400] rounded">
              &#8594;
            </div>
          </div>
        </div>
        {/* Moved image to below the text */}
        <div className="md:block hidden ">
          <img
            src={aboutimage}
            alt="Image description"
            className="w-full h-full object-cover z-0"
          />
        </div>
      </div>
        <div className="block md:hidden h-full absolute top-0 left-0 opacity-25 overflow-hidden">
          <img
            src={aboutimage}
            alt="Image description"
            className="w-screen h-full object-cover overflow-hidden"
          />
        </div>
    </div>
  );
};

export default About;
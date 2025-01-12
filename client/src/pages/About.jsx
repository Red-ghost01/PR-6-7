import aboutimage from "../assets/images/image_2022_03_21T09_50_51_653Z.webp";

const About = () => {
  return (
    <div className={`bg-[#0A0D13] md:bg-[url(${aboutimage})]`}>
      <div className=" text-white grid md:grid-cols-2 grid-cols-1 max-w-[1800px] m-auto pt-14 px-[70px]">
        <div>
          <h1 className="text-[42px] font-bold pb-[30px]">About Us</h1>
          <p className="pr-4 text-[16px]">
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
          <div className="flex items-center mt-[46px] w-[196px] h-[50px] text-black bg-[#F49F0A] rounded">
            <button
              className="flex items-center justify-center w-[70%] h-full  bg-transparent focus:outline-none"
              aria-label="Get in touch"
            >
              Read More
            </button>
            <div className="flex justify-center items-center w-[30%] h-full text-[30px] bg-[#EB9400] rounded">
              &#8594;
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <img
            src={aboutimage}
            alt="Image description"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

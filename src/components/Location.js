import { useEffect } from "react";

function Location() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div
      className="my-10 mt-32 flex flex-col items-center justify-center p-3"
      data-aos="zoom-in"
    >
      <div className="mb-10 flex flex-col items-center justify-center md:w-1/2">
        <p className="text-2xl font-bold text-amber-800">Address</p>
        <p className="text-xl font-semibold text-zinc-500">
          Majhitar, Rangpo 737132, India
        </p>
        <br></br>
        <p className="text-2xl font-bold text-amber-800">Contact</p>
        <p className="text-xl font-semibold text-zinc-500">+91 99XXXXXX01</p>
        <br></br>
        <p className="text-2xl font-bold text-amber-800">Mail Us</p>
        <p className="text-xl font-semibold text-zinc-500">
          infocbreak@gmail.com
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.0374211413337!2d88.49713844544816!3d27.186560630205996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a06ac69bbb23%3A0x642538c9347486a4!2sCoffee%20Break!5e0!3m2!1sen!2sin!4v1704023461772!5m2!1sen!2sin"
        loading="lazy"
        className="h-[400px] w-full md:h-[600px] md:w-1/2"
        gestureHandling={"none"}
        iwloc="addr"
      ></iframe>
    </div>
  );
}

export default Location;

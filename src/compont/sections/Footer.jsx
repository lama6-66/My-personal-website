import phone from "../../assets/phone.png";
import linkedin from "../../assets/linkedin.png";

function Footer() {
  return (
    <footer
      className="mt-[80px]
        "
    >
      <div
        className="flex justify-center items-center gap-[20px]

        "
      >
        <a href="https://www.linkedin.com/in/lama-aljuaid-a334473a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios">
          <img
            src={linkedin}
            className="
                w-10
                h-10
                rounded-full
            "
          />
        </a>

        <a href="tel:966539702996" 
        >
          <img
            src={phone}
            className="
                w-[40px]
            "
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

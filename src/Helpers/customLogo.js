import Image from "next/image";

const CustomLogo = () => (
  <div as='logo'>
    <Image
      src='https://seeklogo.com/images/S/startech-logo-0BF29AE753-seeklogo.com.png'
      alt='Logo'
      width={117}
      height={92}
      style={{
        width: "6rem",
        height: "100%",
      }}
      priority={true}
    />
  </div>
);

export default CustomLogo;


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/finallogo.png';
import { QRCodeCanvas } from 'qrcode.react';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 xsm:justify-center text-base-content md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 ">
      <aside className='col-auto'>
        <img src={logo} alt="" />
        <p>Car Doctor Service Ltd.<br />Providing reliable tech since 1992</p>
        <div className="card-actions ">
          <FaFacebookF className="w-[30px] h-[30px] p-2 bg-[#395185] text-white rounded-full" />
          <FaTwitter className="w-[30px] h-[30px] p-2 bg-[#55ACEE] text-white rounded-full" />
          <FaInstagram className="w-[30px] h-[30px] p-2 bg-[#774ADF] text-white rounded-full" />
          <FaLinkedinIn className="w-[30px] h-[30px] p-2 bg-[#0A66C2] text-white rounded-full" />
        </div>
      </aside>
      <nav className='col-auto'>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className='col-auto'>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className='col-auto'>
        <header className="footer-title">Visit My Portfolio</header>
        <div>
          <QRCodeCanvas
            value="https://mahmudul607.netlify.app"
            size={200} // Size of the QR code
            level="H" // Error correction level (L, M, Q, H)
            bgColor="#ffffff" // Background color
            fgColor="#000000" // Foreground color
            includeMargin={true} // Include white margin around the QR code
            renderAs="svg" // Output format (svg, canvas, img)
          />

        </div>
        {/* <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a> */}
      </nav>
    </footer>
  );
};

export default Footer;
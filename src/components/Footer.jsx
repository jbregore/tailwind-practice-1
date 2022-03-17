import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const FooterInfo = ({title, subtitle}) => {
  return (
    <div className="pl-4">
      <h6 className="font-bold uppercase pt-2">{title}</h6>
      <ul>
        {subtitle.map((item, index) => (
          <li key={index} className="py-1">{item}</li>
        ))}
        {/* <li className="py-1">Marketing</li>
        <li className="py-1">Analytics</li>
        <li className="py-1">Commerce</li>
        <li className="py-1">Data</li>
        <li className="py-1">Cloud</li> */}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerInfo = [
    {
      id: 1,
      title: "Solutions",
      subtitle: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"]
    },
    {
      id: 2,
      title: "Support",
      subtitle: ["Pricing", "Documentation", "Guides", "API Status"]
    },
    {
      id: 3,
      title: "Company",
      subtitle: ["About", "Blog", "Jobs", "Press", "Partners"]
    },
    {
      id: 4,
      title: "Legal",
      subtitle: ["Claim", "Privacy", "Terms", "Policies", "Conditions"]
    }
  ];


  return (
    <div
      className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2"
    >
      <div
        className="max-w-[1240px] mx-auto grid grid-cols-2
      md:grid-cols-6 border-b-2 border-gray-600 py-8"
      >
        {footerInfo.map((item, index) => (
          <FooterInfo key={index} title={item.title} subtitle={item.subtitle}/>
        ))}
        {/* <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claim</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div> */}

        <div className="col-span-2 pt-8 md:pt-2 ">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles and resources sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 text-slate-700 outline-none"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 ">Subscribe</button>
          </form>
        </div>
      </div>

      <div
        className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto 
       justify-between sm:flex-row text-center 
      text-gray-500 "
      >
        <p className="py-4">2022 Jb Regore. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;

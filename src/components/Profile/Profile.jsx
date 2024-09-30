import React, { useEffect, useState } from "react";
import { baseURL, baseURLimg } from "../../api";
import axios from "axios";
import ProfileAbout from "./ProfileAbout";
import ProfileProduct from "./ProfileProduct";
// import ProfileContactArea from "./ProfileContactArea";
import { IndivalContact } from "../contact/Indivialcontactform";
import JsonData from "../../data/data.json";
import ScrollToTopButton from "../scrool/scroll";
const Profile = (props) => {
  var url = new URL(window.location.href);
  var string = url + "";
  const short = string.split("/").pop();
  localStorage.setItem("short", short);
  const [user, setUser] = useState([]);
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [productimages, setProductImages] = useState([]);

  useEffect(() => {
    axios({
      url: baseURL + "/getUserByShort/" + short,
      method: "GET",
    }).then((res) => {
      setUser(res.data.profiles);
      setProductImages(res.data.productimages);
    });
  }, [short]);

  console.log("this is user", user);
  const data =
    user.length > 0
      ? {
          title: "Send Enquiry",
          phonename1: user[0].mobile,
          email: user[0].email,
          address: user[0].address,
        }
      : { phonename1: "", email: "", address: "" };

  console.log(data);
  return (
    <>
      {user.map((users) => (
        <div style={{ marginTop: "50px" }}>
          <ProfileAbout
            name={users.name}
            image={users.image}
            category={users.category}
            about={productimages.product_about_us}
            product={users.product}
            experience={users.experience}
          />
          <ProfileProduct productimages={productimages} />
          <IndivalContact data={data} />
          <ScrollToTopButton />
        </div>
      ))}
    </>
  );
};

export default Profile;

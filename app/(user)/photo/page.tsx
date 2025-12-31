
"use client";
import React, { useState } from "react";
import PresetCard from "../../components/PresetCard";
import { useRouter, useSearchParams } from "next/navigation";
import vol1 from "../../../public/images/fflogo.jpg";
 const socialLinks = {
  url: "/",
  instagram: "https://www.instagram.com/freeze_frame_studio/",
  maps: "https://maps.app.goo.gl/h9dYCV8drRKAxi4VA",
};
function Photo() {
  const router = useSearchParams();
  const [name, url] = [router?.get("name"), router?.get("url")];
  const [isURL, setIsURL] = useState(false);
  const text = isURL ? "See Your Photos" : "Follow Us To View Photos";
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

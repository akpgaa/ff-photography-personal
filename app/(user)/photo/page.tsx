"use client";
import React, { useState } from "react";
import PresetCard from "../../components/PresetCard";
import { useSearchParams } from "next/navigation";
import vol1 from "../../../public/images/ff/images/Media3.jpeg";

const socialLinks = {
  url: "/",
  instagram: "https://www.instagram.com/freeze_frame_studio/",
  maps: "https://maps.app.goo.gl/h9dYCV8drRKAxi4VA",
};

function PhotoAlbum() {
  const router = useSearchParams();
  const [name, url] = [router?.get("name"), router?.get("url")];
  const [isURL, setIsURL] = useState(false);
  const text = isURL ? "See Your Photos" : "Follow Us To View Photos";

  const newUrl = isURL ? url : socialLinks.instagram;
  return (
    <div className="w-full px-4 lg:px-8">
      <h1 className="font-ovo text-5xl mb-8 mt-5">Photos</h1>

      <div className="grid xl:grid-cols-2 xl:space-x-2">
        <PresetCard
          downloadLocation="image"
          staticImage={vol1}
          buttonText={text}
          url={newUrl ?? ""}
          isURL={isURL}
          handleClick={() => setIsURL(true)}
          title={name ?? ""}
          subtitle="Best Photography"
          description={`Here is your photo's link—click on it to access your pictures. We hope you enjoy the captured moments! For more inspiration,
      delve into the world of photography with our curated collection. Click to get lost in the art and discover insightful photography 
      quotes that capture the essence of the craft. Happy exploring!`}
        />
      </div>
    </div>
  );
}

export default PhotoAlbum;

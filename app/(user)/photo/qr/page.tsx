"use client";
import QRCode from "react-qr-code";
import { useState } from "react";

export default function QrPage() {
  const [functionName, setFunctionName] = useState("");
  const [url, setUrl] = useState("");

  function handleChange(e: any) {
    if (e.target.name == "Name") setFunctionName(e.target.value);
    if (e.target.name == "url") setUrl(e.target.value);
  }
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  let qrLink = "";
  // Client-side-only code
  if (origin) {
    qrLink = `${origin}/photo?url=${url}&name=${functionName}`;
  }
  return (
    <div className="px-4 lg:px-8">
      <h1 className="font-ovo text-5xl mb-8 mt-5">QR</h1>
      <div className="border-b rounded w-2/6 mx-auto my-8"></div>

      <div className=" w-full mb-24">
        <div className="py-lg-md d-flex">
          <div className="flex-1">
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <div>Function Name</div>
              <input
                style={{
                  border: "1px solid gray",
                  padding: "8px",
                  borderRadius: "4px",
                }}
                id="exampleText"
                name="Name"
                type="textarea"
                onChange={handleChange}
              />
              <div>URL</div>
              <input
                style={{
                  border: "1px solid gray",
                  padding: "8px",
                  borderRadius: "4px",
                }}
                id="exampleText"
                onChange={handleChange}
                name="url"
                type="text"
              />
              <br /> <br />
              <a
                href={qrLink}
                style={{ fontWeight: "bold", cursor: "pointer" }}
                target="_blank"
                rel="noopener"
              >
                {qrLink}
              </a>
              <br />
            </div>
          </div>
          <div className="flex-1">
            <QRCode
              size={512}
              style={{
                height: "auto",
                maxWidth: "400px",
                width: "300px",
              }}
              value={qrLink}
              viewBox={`0 0 256 256`}
            />
          </div>
          \
        </div>
      </div>
    </div>
  );
}

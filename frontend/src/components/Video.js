"use client";
import { CldVideoPlayer } from "next-cloudinary";
import { Container } from "./assets";

export const Video = () => {
  const cloudinaryVideoUrl =
    "https://res.cloudinary.com/dqhguhv7o/video/upload/h_550,w_1920/v1723199061/dance-2_tmiafj.mp4"; // Replace with your Cloudinary video URL
  const cloudinaryCaptionUrl =
    "https://res.cloudinary.com/your-cloud-name/raw/upload/v1234567890/captions.vtt"; // Replace with your Cloudinary captions URL
  return (
    <Container>
      <div>Video</div>
      {/* <CldVideoPlayer
        style={{ width: "100%", height: "auto", maxWidth: "1920px" }}
        src="https://res.cloudinary.com/dqhguhv7o/video/upload/v1723171042/samples/sea-turtle.mp4"
      /> */}
      <div className="w-full h-[550px] overflow-hidden">
        <video width="100%" height="550" controls preload="none">
          <source src={cloudinaryVideoUrl} type="video/mp4" />
          <track
            src={cloudinaryCaptionUrl}
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      </div>
    </Container>
  );
};

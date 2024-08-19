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
      {/* <iframe
        className="bg-cover"
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/are1cHzyeWs?si=dALcaLFtuEeJ9GwI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
    </Container>
  );
};
{
  /* <video width="100%" height="550" controls preload="none">
          <source src="https://www.youtube.com/watch?v=c2M-rlkkT5o&t=464s" type="video/mp4" />
          <track
            src={cloudinaryCaptionUrl}
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video> */
}
{
  /* <CldVideoPlayer
        style={{ width: "100%", height: "auto", maxWidth: "1920px" }}
        src="https://res.cloudinary.com/dqhguhv7o/video/upload/v1723171042/samples/sea-turtle.mp4"
      /> */
}

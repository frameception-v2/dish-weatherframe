import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-[#87CEEB]">
        <div tw="flex flex-col items-center bg-white/90 p-12 rounded-2xl shadow-2xl">
          <h1 tw="text-6xl font-bold text-[#1E3A8A] mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-2xl text-center text-[#1E3A8A] max-w-[500px]">{PROJECT_DESCRIPTION}</h3>
          <div tw="flex mt-8">
            <div tw="text-6xl mr-4">🌤️</div>
            <div tw="text-6xl">🌧️</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

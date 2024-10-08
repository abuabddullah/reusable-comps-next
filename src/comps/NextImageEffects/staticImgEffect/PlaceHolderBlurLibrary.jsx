import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const PlaceHolderBlurLibrary = async({ src }) => {
    const buffer = await fs.readFile(`./public${src}`);
    const { base64, color } = await getPlaiceholder(buffer);
  return (
    <div className="border p-3 rounded-lg shadow-lg">
      <p>Plaiceholder Blur By Library</p>
      <div
      //   className="w-[250px] h-[250px] relative"
      >
        <Image
          src={src}
          alt="default blur Img eff"
          //   fill
          width={250}
          height={250}
          //   className="object-cover"
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
    </div>
  );
};

export default PlaceHolderBlurLibrary;

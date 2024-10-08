import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const DynPlaceHolderBlurLibrary = async({ src }) => {
    const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
    const { base64 } = await getPlaiceholder(buffer);
  return (
    <div className="border p-3 rounded-lg shadow-lg">
      <p>Dynamic PlaiceHolder Blur Library</p>
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

export default DynPlaceHolderBlurLibrary;

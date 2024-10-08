import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const DynPlaceHolderColorLibrary = async ({ src }) => {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64, color } = await getPlaiceholder(buffer);
  return (
    <div className="border p-3 rounded-lg shadow-lg">
      <p>Dynamic PlaiceHolder Color Library</p>
      <div
        //   className="w-[250px] h-[250px] relative"
        //   className={`bg-[${color.hex}]`}
        style={{ background: color.hex }}
      >
        <Image
          src={src}
          alt="default blur Img eff"
          //   fill
          width={250}
          height={250}
          //   className="object-cover"
        />
      </div>
    </div>
  );
};

export default DynPlaceHolderColorLibrary;

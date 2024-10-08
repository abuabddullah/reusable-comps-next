
"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const DynSrcCustOpctPlcLibr = ({ src }) => {
  // React Intersection Observer setup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="border p-3 rounded-lg shadow-lg">
      <p>Dynamic PlaiceHolder Color Library</p>
      <div
        ref={ref}
        // className="relative w-[250px] h-[250px] bg-[#e9c6b0]"
        style={{ background: "#e9c6b0" }}
      >
        <Image
          src={src}
          alt="default blur Img eff"
          width={250}
          height={250}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        />
      </div>
    </div>
  );
};

export default DynSrcCustOpctPlcLibr;

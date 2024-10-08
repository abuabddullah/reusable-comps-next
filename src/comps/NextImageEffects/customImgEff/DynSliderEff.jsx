// "use client";
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";

// const DynSliderEff = ({ src }) => {
//   // React Intersection Observer setup
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   return (
//     <div className="border p-3 rounded-lg shadow-lg">
//       <p>Dynamic Slider Eff</p>
//       <div
//         ref={ref}
//         className="hidden"
//       >
//         <Image
//           src={src}
//           alt="default blur Img eff"
//           width={250}
//           height={250}
//           style={{
//             opacity: inView ? 1 : 0,
//           }}
//         />
//         <div className="bg-red-200 w-full h-full relative z-[1] top-0"
//         style={{
//           left: inView ? "100%" : "0%",
//           transition: "opacity 0.5s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
//         }}
//         >

//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynSliderEff;

"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const DynSliderEff = ({ src }) => {
  // React Intersection Observer setup
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="border p-3 rounded-lg shadow-lg">
      <p>Dynamic Slider Eff</p>
      <div
        ref={ref}
        className="overflow-hidden" // Added width and height
      >
        <Image
          src={src}
          alt="default blur Img eff"
          width={250}
          height={250}
          style={{
            opacity: inView ? 1 : 0,
          }}
        />

        <div
          style={{
            backgroundColor: "#e9c6b0",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
            top: 0,
            left: inView ? "100%" : "0%",
            transition: "left 0.2s cubic-bezier (0.3, 0.2, 0.2, 0.8)",
          }}
        />
      </div>
    </div>
  );
};

export default DynSliderEff;

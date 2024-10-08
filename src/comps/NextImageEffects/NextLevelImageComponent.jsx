import "./../../app/globals.css";
import defaultblurImg from "././../../../public/images/defaultblur.png";
import DynSliderEff from "./customImgEff/DynSliderEff";
import DynSrcCustOpctPlcLibr from "./customImgEff/DynSrcCustOpctPlcLibr";
import DynPlaceHolderBlurLibrary from "./dynamicImgEff/DynPlaceHolderBlurLibrary";
import DynPlaceHolderColorLibrary from "./dynamicImgEff/DynPlaceHolderColorLibrary";
import DefaultBlur from "./staticImgEffect/DefaultBlur";
import PlaceHolderBlurLibrary from "./staticImgEffect/PlaceHolderBlurLibrary";
import PlaceHolderColorLibrary from "./staticImgEffect/PlaceHolderColorLibrary";

const NextLevelImageComponent = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4 my-12">
      <div className="border p-4">
        <h1 className="mb-2 font-bold">Static: local m/c images </h1>
        <div className="grid grid-cols-1 gap-4">
          <DefaultBlur src={defaultblurImg} />{" "}
          {/* img need to be imported first */}
          <PlaceHolderBlurLibrary
            src={"/images/plaiceHolderBlurLibrary.png"}
          />{" "}
          {/* img can be directly accessed from public folder*/}
          <PlaceHolderColorLibrary
            src={"/images/plaiceHolderColorLibrary.png"}
          />{" "}
          {/* img can be directly accessed from public folder*/}
        </div>
      </div>

      <div className="border p-4">
        <h1 className="mb-2 font-bold">dynamic: img from db images </h1>
        <div className="grid grid-cols-1 gap-4">
          <DynPlaceHolderBlurLibrary
            src={
              "https://visitsirmione.com/wp-content/uploads/2020/04/8x5-tecnologia.jpg"
            }
          />{" "}
          {/* img can be directly accessed from db by url*/}
          <DynPlaceHolderColorLibrary
            src={
              "https://visitsirmione.com/wp-content/uploads/2020/04/8x5-tecnologia.jpg"
            }
          />{" "}
          {/* img can be directly accessed from db by url*/}
        </div>
      </div>

      <div className="border p-4">
        <h1 className="mb-2 font-bold">dynamic+animated entry img effect </h1>
        <div className="grid grid-cols-1 gap-4">
          <DynSrcCustOpctPlcLibr
            src={
              "https://visitsirmione.com/wp-content/uploads/2020/04/8x5-tecnologia.jpg"
            }
          />
          <DynSliderEff
            src={
              "https://visitsirmione.com/wp-content/uploads/2020/04/8x5-tecnologia.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NextLevelImageComponent;

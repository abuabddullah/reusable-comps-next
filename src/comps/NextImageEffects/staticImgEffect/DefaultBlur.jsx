import Image from 'next/image'

const DefaultBlur = ({ src }) => {
  return (
    <div className="border p-3 rounded-lg shadow-lg">
      <p>Default Blur</p>
      <div className="">
        <Image
          src={src}
          alt="default blur Img eff"
          width={250}
          height={250}
          placeholder="blur"
        />
      </div>
    </div>
  )
}

export default DefaultBlur

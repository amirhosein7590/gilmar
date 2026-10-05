import Image from "next/image"

function PackageSlide() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="relative w-full max-w-100 aspect-3/4">
        
        <Image
          src="/images/Residence-1.jpg"
          alt="package slide"
          fill
          className="object-cover"
          style={{
            maskImage: 'url(/images/packages-pattern.png)',
            WebkitMaskImage: 'url(/images/packages-pattern.png)',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />

        <div className="absolute top-14 -left-1/7 z-10 text-right">
          <p className="text-sm font-abar-semi-bold">
            تجربه‌ی اقامتی اصیل در
            <br />
            دل طبیعت شمال
          </p>
        </div>

      </div>
    </div>
  )
}

export default PackageSlide
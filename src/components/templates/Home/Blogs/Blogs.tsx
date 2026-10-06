import Background from "@/components/modules/Background"
import BlogCard from "@/components/modules/BlogCard"
import { blogCards } from "@/constants/ui/Blog/blogs"
import Image from "next/image"

function Blogs() {
  return (
    <div className="residence-container relative flex flex-col my-20">
      <Background
        className="absolute w-1/2 h-1/2 left-0 top-0 -z-1"
        src="/images/vector-bg.svg"
      />

      <div className="text-container flex flex-col  items-center gap-y-5">
        <Image
          width={84}
          height={52}
          alt="icon container 3"
          src="/images/icon-container-3.svg"
        />
        <p className="title text-[32px] font-bold font-abar-extra-bold text-center">
مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش        
</p>
        <span className="text-[14px] font-abar-semi-bold text-[#4C4C4D] text-center ">
         در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید.
        </span>
      </div>

      {/* Blog Cards */}
      
            <div className="residence-carts-container flex justify-center items-center gap-x-6">
              {blogCards.map(({ description, id, imageSrc, title }) => (
                <BlogCard
                  key={id}
                  description={description}
                  title={title}
                  imageSrc={imageSrc}
                />
              ))}
            </div>
      </div>
  )
}

export default Blogs
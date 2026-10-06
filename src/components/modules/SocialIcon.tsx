import { memo } from "react"
import { Button } from "./Button/Button"

function SocialIcon({imageSrc } : {imageSrc : string}) {
  return (
      <Button
      type="button"
      href="#"
      className="w-11 h-11 rounded-full bg-no-repeat bg-light-green-background bg-center "
      style={{backgroundImage : `url('${imageSrc}')`}}
      > 
      </Button>
  )
}

export default memo(SocialIcon)
import { Images } from "~/services/property"
const { width } = useWindowSize()
interface ISize {
  70: ''
  200: ''
  350: ''
  1000: ''
}

export const useImageSize = (images: Images): string => {
  images.links.map((image) => {
    const size = Number(image.size.replace("px", ""));
    console.log("🚀 ~ file: imageSize.ts ~ line 7 ~ images.links.map ~ size", size)
    // switch (size) {
    //   case 70:
    //     if(width.value<70)
    //     return image.href
    //   case 200:
    //     if(width.value>=70)
    //     return image.href
    //   case 350:
    //     if(width.value>=70)
    //     return image.href
    //   case 1000:
    //     if(width.value>=1000)
    //     return image.href
    // }
  })
  return ''
}

import { cn } from "@/lib/utils"
import { featureFont } from "../_utils/font_utils"


export const RemautLogo = () => {
    return(
        <div className={cn("text-xl md:text-2xl p-2",featureFont.className)}>Remaut.</div>
    )
}
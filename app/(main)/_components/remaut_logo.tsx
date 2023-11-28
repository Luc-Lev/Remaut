import { cn } from "@/lib/utils"
import { featureFont } from "../_utils/font_utils"


export const RemautLogo = () => {
    return(
        <div className={cn("text-3xl md:text-4xl p-2",featureFont.className)}>Remaut.</div>
    )
}
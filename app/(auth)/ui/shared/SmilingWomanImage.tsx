import Image from "next/image";
import { ImageSmilingWoman } from "@/public/images/landingPage/images";
import React from "react";

const SmilingWomanImage = () => {
    return (
        <div className="relative hidden lg:block lg:h-full">
            <Image
                src={ImageSmilingWoman}
                alt="smiling woman with shopping bags"
                fill
                sizes="100%"
                className="absolute inset-0 w-full h-full object-cover"
                priority
                loading="eager"
            />
        </div>
    );
};

export default SmilingWomanImage;

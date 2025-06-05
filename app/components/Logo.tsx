import Image from "next/image"
export default function Logo() {
    return (
        <Image
            src="/keizerlogo.svg"
            alt="Faizz profile picture"
            width={80}
            height={80}
            priority
            className="size-44"
            quality={100}
        />

    )
}

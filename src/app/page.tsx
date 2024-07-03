import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[50px] py-[10px] flex flex-col gap-y-[30px] sm:gap-y-[20px]">
        <header className="mt-5 flex flex-wrap justify-between items-center text-3xl sm:text-9xl font-black">
            <div className="">
                BOLD
            </div>
            <div className="">
                BLOBS
            </div>
        </header>
        <main className="w-full h-[400px] sm:h-[300px] rounded-lg overflow-hidden">
            <div className="w-full h-full relative">
                <Image
                    src="/george-bale-Rb0p4eKPQWA-unsplash.jpg"
                    alt="Descriptive alt text"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
        </main>
        <footer className="flex gap-y-2 sm:gap-0 flex-col sm:flex-row flex-wrap justify-between items-center text-xl sm:text-3xl sm:flex-nowrap font-medium">
            <div>
                PRIVATE &
            </div>
            <div className="text-2xl sm:text-6xl text-center">
                QUICK DESCRIPTION <br/> OF PRESENTATION
            </div>
            <div>
                CONFIDENTIAL
            </div>
        </footer>
    </div>
  );
}

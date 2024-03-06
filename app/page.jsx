import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image 
          src="/posterAssets/images/backgrounds/1.png" 
          alt="Image 2" 
          width={135}
          height={113}
          className="inset-0 clip-mask w-[135px] h-[113px]"
          style={{
            WebkitMaskImage: "url('/posterAssets/images/backgrounds/posterDBgShape.svg')",
            WebkitMaskPosition: "center center",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat"
          }}
        />
      </div>
    </main>
  );
}

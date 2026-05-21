
function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center"
    >
      {/* Title */}
      <h1 className="text-3xl lg:text-5xl font-normal text-center text-[#a88866]">คุณอยากถามเรื่องอะไร ?</h1>

      {/* Ornamental HR */}
      <div className="mt-5 relative w-[250px] lg:w-[400px] h-[2px]">
        {/* Main Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a88866] to-transparent" />
        {/* TIP */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#a88866]" />
        <div className="absolute left-[110px] lg:left-[185px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#a88866]" />
        <div className="absolute right-[110px] lg:right-[185px] top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#a88866]" />
      </div>

      {/* Subtitle */}
      <p className="mt-5 text-sm lg:text-lg text-center text-stone-500 ">
        เลือกหัวข้อหรือพิมพ์คำถามที่คุณอยากรู้ในตอนนี้
        <br/>
        หรือคุณจะข้ามขั้นตอนนี้ไปก่อนก็ได้
        </p>
    </section>
  )
}

export default HeroSection

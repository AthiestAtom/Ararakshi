import VideoBackground from "@/components/common/VideoBackground";

const IndexSimple = () => {
  
  return (
    <div className="min-h-screen relative">
      <VideoBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-20 pb-32 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-2xl">
              ARARAKSHI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexSimple;

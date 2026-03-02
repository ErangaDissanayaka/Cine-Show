type Trailer = {
  id: string;
  image: string;
  videoUrl: string;
};

const [currentTrailer, setCurrentTrailer] = useState<Trailer>({
  id: "trailer-1",
  image: "/images/trailer-1.jpg",
  videoUrl: "https://example.com/trailer-1.mp4",
});

const handleTrailerChange = (trailer: Trailer) => {
  setCurrentTrailer({
    id: trailer.id, // make sure id is included whenever setting Trailer
    image: trailer.image,
    videoUrl: trailer.videoUrl,
  });
};

<ReactPlayer
  src={currentTrailer.videoUrl} // use src (not url) for your installed version
  controls={false}
  className="mx-auto max-w-full"
  width="960px"
  height="540px"
/>

<p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
  {/* ... */}
</p>
export default function MarqueeGallery({ images }) {
  const doubled = [...images, ...images];

  return (
    <section className="bg-background overflow-hidden py-12">
      <div className="animate-marquee">
        {doubled.map((img, i) => (
          <div key={i} className="w-[400px] h-[500px] flex-shrink-0 mr-8">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${img.src}')` }}
              role="img"
              aria-label={img.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

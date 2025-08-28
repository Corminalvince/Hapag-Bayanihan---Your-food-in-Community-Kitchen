const stats = [
  { number: "15+", label: "Community Kitchens" },
  { number: "1,200+", label: "Meals Delivered" },
  { number: "50+", label: "Active Drivers" },
  { number: "300+", label: "Families Helped" }
];

const Stats = () => {
  return (
    <section className="py-16 bg-earth-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hero-yellow mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
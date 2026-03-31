const STATS = [
  { value: '500+', label: 'Homes Sold', icon: '🏠', description: 'Across Northern Virginia' },
  { value: '$340M+', label: 'Total Sales Volume', icon: '💰', description: 'In closed transactions' },
  {
    value: '7 Days',
    label: 'Avg. Days on Market',
    icon: '⚡',
    description: 'Well below the regional average',
  },
  {
    value: '98.6%',
    label: 'List-to-Sale Ratio',
    icon: '📈',
    description: 'Sellers get close to asking price',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-800" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Proven Results
          </p>
          <h2
            id="stats-heading"
            className="font-display font-bold text-white text-3xl sm:text-4xl"
          >
            Numbers That Speak for Themselves
          </h2>
          <p className="text-white/60 mt-3 text-base max-w-xl mx-auto">
            Consistent performance across every Northern Virginia market.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ value, label, icon, description }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div
                className="text-3xl mb-3"
                aria-hidden="true"
                role="img"
              >
                {icon}
              </div>
              <p className="font-display font-bold text-white text-3xl sm:text-4xl leading-none mb-2">
                {value}
              </p>
              <p className="text-accent font-semibold text-sm mb-1">{label}</p>
              <p className="text-white/50 text-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

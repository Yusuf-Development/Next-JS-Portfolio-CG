function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-4">
      <p className="mb-1 text-base text-cg-black">{label}</p>
      <div className="relative h-10 w-full bg-[#D9D9D9]">
        <div
          className="flex h-full items-center bg-cg-sapphire pl-3"
          style={{ width: `${value}%` }}
        >
          <span className="text-sm font-semibold text-white">{value}%</span>
        </div>
      </div>
    </div>
  );
}

export function TimeTestedSection() {
  return (
    <section className="w-full bg-[#F1F1F1] py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="mb-4 text-center text-[36px] font-normal text-cg-black">
          Skills built through real-world experience
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-cg-black">
          Years of hands-on work across data science, machine learning, and
          analytics — reflected in the tools I reach for every day.
        </p>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-2">
          {/* Languages & Data */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-cg-black">
              Languages &amp; Data
            </h3>
            <Bar label="Python" value={95} />
            <Bar label="SQL" value={90} />
            <Bar label="R" value={75} />
          </div>

          {/* ML & Frameworks */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-cg-black">
              ML &amp; Frameworks
            </h3>
            <Bar label="TensorFlow / PyTorch" value={85} />
            <Bar label="Scikit-learn" value={90} />
            <Bar label="Pandas / NumPy" value={95} />
          </div>
        </div>
      </div>
    </section>
  );
}

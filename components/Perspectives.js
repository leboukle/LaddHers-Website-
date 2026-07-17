/**
 * Editorial typography composition — six perspectives staggered across
 * three rows, not a grid of matching stat cards. No card boundaries, no
 * equal spacing: typography and position carry the design. Every figure
 * is a verified external statistic on women, money, and financial access
 * (never LaddHers member data); source cited quietly beside each.
 * Re-check figures against their sources periodically, as these update
 * year to year.
 */
export default function Perspectives() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto w-full max-w-editorial px-6 py-14 md:px-10 md:py-20">
        <h2 className="font-serif text-3xl md:text-4xl">Perspectives</h2>
        <p className="mt-2 max-w-narrow text-sm leading-snug text-ivory/70 md:text-base">
          Conversation starters on women, wealth, financial confidence, and
          access.
        </p>

        <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-5 md:col-start-1">
              <p className="font-serif text-5xl leading-none text-ivory md:text-6xl">
                $30T
              </p>
              <p className="mt-2 max-w-[15rem] text-sm leading-snug text-ivory/70">
                in U.S. baby boomer assets
                <br />
                is projected to shift
                <br />
                toward women by 2030.
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wide2 text-ivory/40">
                Source: McKinsey
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8 md:mt-10">
              <p className="font-serif text-5xl leading-none text-ivory md:text-6xl">
                79%
              </p>
              <p className="mt-2 max-w-[15rem] text-sm leading-snug text-ivory/70">
                Nearly four in five
                <br />
                adults worldwide now
                <br />
                have a financial account.
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wide2 text-ivory/40">
                Source: World Bank Global Findex
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-5 md:col-start-2">
              <p className="font-serif text-5xl leading-none text-fuchsia-light md:text-6xl">
                77%
              </p>
              <p className="mt-2 max-w-[15rem] text-sm leading-snug text-ivory/70">
                Women trail slightly —
                <br />
                the gender gap is
                <br />
                narrowing, not closed.
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wide2 text-ivory/40">
                Source: World Bank Global Findex
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-8">
              <p className="font-serif text-3xl leading-tight text-ivory md:text-4xl">
                Financial literacy
              </p>
              <p className="mt-2 max-w-[14rem] text-sm leading-snug text-ivory/70">
                is one of the strongest
                <br />
                predictors of lasting
                <br />
                financial confidence.
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wide2 text-ivory/40">
                Source: OECD
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-4 md:col-start-1 md:mt-6">
              <p className="font-serif text-3xl leading-tight text-ivory md:text-4xl">
                The Great
                <br />
                Wealth Transfer
              </p>
              <p className="mt-2 max-w-[14rem] text-sm leading-snug text-ivory/70">
                In Europe alone,{" "}
                <span className="text-fuchsia-light">$11.4T</span> is
                projected
                <br />
                to shift to women by 2030.
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wide2 text-ivory/40">
                Source: McKinsey, 2025
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="font-serif text-5xl leading-none text-ivory md:text-6xl">
                68.5%
              </p>
              <p className="mt-2 max-w-[15rem] text-sm leading-snug text-ivory/70">
                of the global gender
                <br />
                gap closed in 2024 —
                <br />
                progress, not parity.
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wide2 text-ivory/40">
                Source: World Economic Forum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

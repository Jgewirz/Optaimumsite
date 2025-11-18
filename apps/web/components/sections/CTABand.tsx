import { CalendlyButton } from '@/components/CalendlyButton'
import homeContent from '@/content/home.json'

export function CTABand() {
  const { cta } = homeContent

  return (
    <section className="py-16 bg-optaimum-blue">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {cta.headline}
          </h2>
          <div className="mt-8">
            <CalendlyButton
              text={cta.buttonText}
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-optaimum-blue shadow-sm hover:bg-gray-100 transition-colors"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
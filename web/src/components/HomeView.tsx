import { AsyncImg } from './AsyncImg'
import { ContactFooter } from './ContactFooter'

const accent = 'var(--accent)'
const alt = 'var(--alt-text)'
const silver = 'var(--silver)'

function SectionHeader({ regular, italic, subtitle }: { regular: string; italic: string; subtitle: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 8 }}>
      <div>
        <span style={{ fontSize: 32, fontWeight: 700, color: alt }}>{regular} </span>
        <span className="font-playfair-italic" style={{ fontSize: 32, color: accent }}>
          {italic}
        </span>
      </div>
      <p style={{ fontSize: 14, color: 'rgba(194,194,194,0.6)', margin: '6px 0 0', maxWidth: 360, marginLeft: 'auto', marginRight: 'auto' }}>
        {subtitle}
      </p>
    </div>
  )
}

function ProjectCard({
  imageURL,
  year,
  title,
  description,
  tag,
}: {
  imageURL: string
  year: string
  title: string
  description: string
  tag: string
}) {
  return (
    <article>
      <div style={{ borderRadius: 10, overflow: 'hidden', height: 220 }}>
        <AsyncImg src={imageURL} alt="" style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{ paddingTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span className="font-playfair" style={{ fontSize: 14, color: alt }}>
            {year}
          </span>
          <span style={{ width: 36, height: 1, background: accent }} />
          <span style={{ fontSize: 12, color: silver }}>{tag}</span>
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: alt, margin: '12px 0 8px' }}>{title}</h3>
        <p style={{ fontSize: 14, color: silver, margin: 0 }}>{description}</p>
      </div>
    </article>
  )
}

function HireCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      style={{
        width: 220,
        padding: 20,
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <p style={{ fontSize: 15, fontWeight: 600, color: alt, margin: '0 0 8px' }}>{title}</p>
      <p style={{ fontSize: 13, color: silver, margin: 0 }}>{subtitle}</p>
    </div>
  )
}

export function HomeView() {
  const avatars = [
    { url: 'https://api.builder.io/api/v1/image/assets/TEMP/ed8d44266c9d1d9f893f9763ddbcc5cff66ea5e9?width=106', rot: 4 },
    { url: 'https://api.builder.io/api/v1/image/assets/TEMP/5dbf2206d7c8f71d7f74c1cd2305c5386224897a?width=106', rot: -3 },
    { url: 'https://api.builder.io/api/v1/image/assets/TEMP/cf63ba854b23193123c9e7beab8c170e76beaad0?width=106', rot: 2 },
  ]

  const lowKeyUrls = [
    'https://api.builder.io/api/v1/image/assets/TEMP/cnlP0uhHTQ1WDjUM6zrdxLQYo.png?width=600',
    'https://api.builder.io/api/v1/image/assets/TEMP/7958dad5bc8983910a8ac2db016311723525282d?width=600',
    'https://api.builder.io/api/v1/image/assets/TEMP/23f3c254e9cddb50a09575a20ca17b6ddfb6bb05?width=600',
    'https://api.builder.io/api/v1/image/assets/TEMP/af58c2cd71efaabff6075adceb73194e6912bde0?width=600',
  ]

  const sketchedUrls = [
    'https://api.builder.io/api/v1/image/assets/TEMP/3d2f61ad8fcca95650b61ab762e96e7ed6803a14?width=360',
    'https://api.builder.io/api/v1/image/assets/TEMP/29e77a6c5658d7cdb2d637c818dba5f0f09e9f9b?width=360',
    'https://api.builder.io/api/v1/image/assets/TEMP/ed8d44266c9d1d9f893f9763ddbcc5cff66ea5e9?width=360',
    'https://api.builder.io/api/v1/image/assets/TEMP/5dbf2206d7c8f71d7f74c1cd2305c5386224897a?width=360',
  ]

  const lifeUrls = [
    'https://api.builder.io/api/v1/image/assets/TEMP/b0d41df2a201ee3df6238e08ce9839ce167de636?width=500',
    'https://api.builder.io/api/v1/image/assets/TEMP/303913f64e6ddad2031bc901faf5b7569d4ec5aa?width=500',
    'https://api.builder.io/api/v1/image/assets/TEMP/6a32820820c70cf97328a15ca3b5745abe1ef0e4?width=500',
    'https://api.builder.io/api/v1/image/assets/TEMP/cf63ba854b23193123c9e7beab8c170e76beaad0?width=500',
  ]

  return (
    <div style={{ background: '#000' }}>
      <section style={{ paddingBottom: 40 }}>
        <div style={{ padding: '40px 24px 0' }}>
          <h1 className="font-playfair-italic" style={{ fontSize: 'clamp(28px, 8vw, 36px)', fontWeight: 400, lineHeight: 1.2, margin: 0 }}>
            <span style={{ color: alt }}>I&apos;m </span>
            <span style={{ color: accent }}>Bhakti Dangri</span>
          </h1>
          <p style={{ fontSize: 15, color: silver, lineHeight: 1.55, margin: '14px 0 0', maxWidth: 400 }}>
            Need a developer? I&apos;ll build it. Need a designer? I&apos;ve got that too.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 0, padding: '24px 24px 16px', marginLeft: -6 }}>
          {avatars.map((a) => (
            <div
              key={a.url}
              style={{
                width: 44,
                height: 44,
                marginLeft: -12,
                borderRadius: 10,
                overflow: 'hidden',
                border: '2px solid rgb(240,240,240)',
                transform: `rotate(${a.rot}deg)`,
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              <AsyncImg src={a.url} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px 24px', color: alt }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          </svg>
          <span style={{ fontSize: 14, color: silver }}>@bhaktidangri</span>
        </div>

        <div style={{ padding: '0 24px', borderRadius: 12, overflow: 'hidden', height: 240 }}>
          <AsyncImg
            src="https://api.builder.io/api/v1/image/assets/TEMP/23f3c254e9cddb50a09575a20ca17b6ddfb6bb05?width=600"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <SectionHeader
          regular="Main"
          italic="Plots"
          subtitle="Grab a coffee, take your time, each one's got its own story arc."
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '0 20px' }}>
          <ProjectCard
            imageURL="https://api.builder.io/api/v1/image/assets/TEMP/23f3c254e9cddb50a09575a20ca17b6ddfb6bb05?width=800"
            year="'24"
            title="Streamlining Travel Planning: Itinerary to Touchdown"
            description="Designed an intelligent platform that centralizes itinerary building, bookings, budget management, and real-time trip control — crafted for seamless, stress-free travel experiences at every stage."
            tag="SaaS • Travel"
          />
          <ProjectCard
            imageURL="https://api.builder.io/api/v1/image/assets/TEMP/af58c2cd71efaabff6075adceb73194e6912bde0?width=800"
            year="'24"
            title="Redesigning the B2B Analytics Dashboard"
            description="A comprehensive redesign of a complex data analytics platform to improve usability, reduce cognitive load, and help teams make faster, smarter decisions."
            tag="B2B • Analytics"
          />
          <ProjectCard
            imageURL="https://api.builder.io/api/v1/image/assets/TEMP/7958dad5bc8983910a8ac2db016311723525282d?width=800"
            year="'23"
            title="Plant App — A Healthcare E-Discovery for Alpine"
            description="Mobile-first design for an AI-powered plant discovery and care app, blending clean visual language with intuitive interactions."
            tag="Mobile • Health"
          />
          <ProjectCard
            imageURL="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=800"
            year="'23"
            title="AI Testing Agent — Atto by Testsigma"
            description="Designed end-to-end UX flows for an AI-powered testing agent platform used by engineering teams worldwide."
            tag="AI • SaaS"
          />
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <SectionHeader regular="Low-Key" italic="Stars." subtitle="Not spotlighted, but still stellar." />
        <div className="horizontal-scroll" style={{ paddingLeft: 20, paddingRight: 20 }}>
          {lowKeyUrls.map((url) => (
            <div key={url} style={{ width: 260, height: 180, borderRadius: 12, overflow: 'hidden' }}>
              <AsyncImg src={url} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: alt, margin: 0 }}>
            You Should <span className="font-playfair-italic" style={{ color: accent, fontWeight: 400 }}>Hire Me!</span>
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(194,194,194,0.6)', margin: '6px 0 0' }}>The reasons are all here.</p>
        </div>
        <div className="horizontal-scroll" style={{ paddingLeft: 20, paddingRight: 20 }}>
          <HireCard title="I turn sketches into reality" subtitle="From idea to prototype in record time" />
          <HireCard title="I help the users first" subtitle="Always designing with empathy" />
          <HireCard title="I create and craft with code" subtitle="Design + dev — a rare combo" />
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <SectionHeader regular="Sketched" italic="& Said" subtitle="Things I've drawn and words I've placed in the world." />
        <div className="grid-4" style={{ padding: '0 20px' }}>
          {sketchedUrls.map((url) => (
            <div key={url} style={{ height: 90, borderRadius: 8, overflow: 'hidden' }}>
              <AsyncImg src={url} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: alt, margin: 0 }}>
            Life <span className="font-playfair-italic" style={{ color: accent, fontWeight: 400 }}>Around</span> Me
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(194,194,194,0.6)', margin: '4px 0 0' }}>Bits of the world that catch my eye.</p>
        </div>
        <div className="grid-2" style={{ padding: '0 20px' }}>
          {lifeUrls.map((url) => (
            <div key={url} style={{ height: 160, borderRadius: 10, overflow: 'hidden' }}>
              <AsyncImg src={url} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
          ))}
        </div>
      </section>

      <ContactFooter />
    </div>
  )
}

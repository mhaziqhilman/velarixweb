/** Single source of truth for the site copy. Wording is Velarix's own; only typography and section heads were edited. */

export const company = {
  name: 'Velarix Technology',
  legalName: 'Velarix Technology Sdn. Bhd.',
  registration: '1606168-X',
  tagline: 'Digitizing the Future',
  email: 'velarix.technology@gmail.com',
  location: 'Klang Valley, Malaysia',
  founded: 'February 2025',
  siteUrl: 'https://velarixtechnology.com',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Careers', href: '#careers' },
]

export const facts = [
  { label: 'Founded', value: 'February 2025' },
  { label: 'Ownership', value: 'Bumiputera-led' },
  { label: 'Based in', value: 'Klang Valley, Malaysia' },
  { label: 'Leadership track record', value: 'PETRONAS and key government sectors' },
]

export const brandSteps = [
  'var(--color-brand-amber)',
  'var(--color-brand-orange)',
  'var(--color-brand-flame)',
  'var(--color-brand-red)',
  'var(--color-brand-crimson)',
]

export type FigureKey = 'automation' | 'data' | 'cloud'

export type Service = {
  id: string
  short: string
  title: string
  headline: string
  figure: FigureKey
  description: string
  focus: string[]
  cta: string
}

export const services: Service[] = [
  {
    id: 'digital-transformation',
    short: 'Automation',
    title: 'Digital Transformation & Automation',
    headline: 'We digitize the workflow. Your teams move faster.',
    figure: 'automation',
    description:
      'We specialize in converting traditional business workflows into digitized, automated systems that boost efficiency and consistency. Through digital transformation, we simplify manual operations, connect distributed teams, and enable decision-makers to act faster and smarter. Our approach merges process automation, system modernization, and adaptive analytics to create seamless digital ecosystems.',
    focus: [
      'Workflow Automation',
      'Business Process Optimization',
      'Robotic Process Integration',
      'Enterprise System Digitalization',
    ],
    cta: 'Talk about automation',
  },
  {
    id: 'data-modernization',
    short: 'Data',
    title: 'Data Modernization',
    headline: 'We modernize the data. It becomes your core asset.',
    figure: 'data',
    description:
      'Data Modernization is about transforming outdated data systems into powerful digital assets. Velarix redefines how organizations collect, store, and interpret information — ensuring data becomes the core of innovation. We design pipelines that power analytics, integrate various data sources, and ensure data integrity across platforms.',
    focus: [
      'Data Warehousing & Migration',
      'Real-Time Data Pipelines',
      'Data Governance & Security',
      'Predictive Insights Enablement',
    ],
    cta: 'Talk about data',
  },
  {
    id: 'cloud-infrastructure',
    short: 'Cloud',
    title: 'Cloud Integration & Infrastructure',
    headline: 'We build the cloud. It scales with you.',
    figure: 'cloud',
    description:
      'We build reliable, scalable, and secure cloud infrastructures to support continuous digital growth. Whether it’s transitioning from on-premise systems or optimizing hybrid architectures, our cloud solutions focus on flexibility, cost-efficiency, and long-term resilience.',
    focus: [
      'Cloud Infrastructure Design',
      'Hybrid & Multi-Cloud Strategy',
      'DevOps & Containerization',
      'Continuous Monitoring & Optimization',
    ],
    cta: 'Talk about cloud',
  },
]

/** The twelve things Velarix turns conventional work into — drawn from the service focus areas. */
export const outcomes = services.flatMap((s) => s.focus)

export const about = {
  who: 'Founded in February 2025, Velarix Technology Sdn. Bhd. is a proudly Bumiputera-led digital solutions company based in Klang Valley. Our leadership team brings together a strong portfolio of experience, having worked with major clients such as PETRONAS and key government sectors.',
  mission:
    'Our mission is to help organizations and individuals embrace digitalization — transforming conventional ways of working into intelligent, data-driven, and automated systems. By riding the wave of modern innovation, we help businesses and communities elevate productivity and creativity in the era of accelerated technological advancement.',
  belief: 'We believe in unlocking human potential through technology.',
  careers:
    'We are continuously growing and welcome passionate individuals who aspire to expand their potential in the digital domain. If you are driven to innovate, explore, and contribute to the nation’s modernization journey, Velarix Technology is the place to be.',
}

export const capabilities = {
  intro:
    'We deliver digital solutions that simplify complexity and drive smarter operations. By integrating data, automation, and modern platforms, we help organizations accelerate their digital transformation journey and achieve greater efficiency across their systems.',
  items: [
    {
      title: 'Data',
      text: 'Integrate the data scattered across an organization so analytics and decisions run on one trusted source.',
      color: 'var(--color-brand-amber)',
    },
    {
      title: 'Automation',
      text: 'Replace manual, repetitive operations with automated processes that run consistently, every time.',
      color: 'var(--color-brand-flame)',
    },
    {
      title: 'Modern platforms',
      text: 'Modernize legacy systems and move them onto cloud-ready platforms that keep scaling as you grow.',
      color: 'var(--color-brand-red)',
    },
  ],
}

export const contact = {
  lede: 'Have a project in mind or want to collaborate? Let’s bring your digital ideas to life. Reach out and our team will respond soon.',
}

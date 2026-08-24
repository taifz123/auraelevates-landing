// AuraElevates - central site configuration.
// Update PAYHIP_URL here to change every purchase CTA across the site.
// Update INSTAGRAM_URL here to change every Instagram link across the site.

const CONFIG = {
  brand: {
    name: 'AuraElevates',
    tagline: 'Stay steady when life moves.',
    // Attached brand logo (faceless mark on midnight navy).
    logo: '/brand/logo.jpg',
    favicon: '/favicon.png',
  },
  // Primary conversion target. Every "Get the guide" CTA opens this URL.
  payhipUrl: '[placeholder]',
  instagram: {
    url: 'https://www.instagram.com/auraelevates/',
    handle: '@auraelevates',
  },
  nav: [
    { label: 'How It Works', href: '#method' },
    { label: 'What You Get', href: '#product' },
    { label: 'Instagram', href: 'https://www.instagram.com/auraelevates/', external: true },
  ],
  seo: {
    title: 'AuraElevates: Stay steady when life moves.',
    description:
      'A practical guide to better posture, balance and confidence while standing on buses and trains.',
    url: 'https://www.auraelevatesco.com/',
    ogImage: '/og-image.jpg',
  },
}

export default CONFIG

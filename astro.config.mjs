// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/custom.css',
        // Paths to Geist variable fonts:
        '@fontsource/geist/400.css',
        '@fontsource/geist/500.css',
        '@fontsource/geist/600.css',
        '@fontsource/geist/700.css',
      ],
      title: 'FormWire Docs',
      // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        { label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
        { label: 'Guides', items: [{ autogenerate: { directory: 'guides' } }] },
        { label: 'Frameworks', items: [{ autogenerate: { directory: 'frameworks' } }] },
        { label: 'Integrations', items: [{ autogenerate: { directory: 'integrations' } }] },
        { label: 'Billing', items: [{ autogenerate: { directory: 'billing' } }] },
        { label: 'Security & Privacy', slug: 'security-and-privacy' },
        { label: 'FAQ', slug: 'faq' },
      ],
    }),
  ],
  site: "https://docs.formwire.app"
});
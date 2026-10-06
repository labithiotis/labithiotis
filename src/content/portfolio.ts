export const profile = {
  name: 'Darren Labithiotis',
  softwareStartYear: 2012,
  email: 'darren@labithiotis.co.uk',
  github: 'https://github.com/labithiotis',
  linkedin: 'https://www.linkedin.com/in/labithiotis',
  resume: 'https://www.toptal.com/developers/resume/darren-labithiotis',
} as const;

export const projects = [
  {
    slug: 'hablo',
    name: 'Hablo',
    title: 'Travel industry platform',
    role: 'CTO',
    description:
      'I built Hablo’s travel industry platform from scratch. As CTO, I now lead its engineering while building a new platform for Visit California and custom AI agents.',
    image: '/images/work/hablo.webp',
    imageAlt: 'The original Hablo home feed, with industry posts, events, and organization tools.',
    preview: '/images/refresh/hablo-preview.webp',
    previewAlt: 'The current Hablo platform interface, from the official Hablo website.',
    tags: ['Travel tech', 'Platform engineering', 'AI agents'],
    symbol: 'chat',
    color: 'hablo',
    url: 'https://myhablo.com',
    chapters: [
      {
        title: 'A platform for the travel industry',
        text: 'Hablo connects travel professionals, organizations, and destinations through industry posts, events, and learning. It gives the travel trade a shared place to exchange updates, build connections, and discover destinations and products.',
      },
      {
        title: 'Built from scratch',
        text: 'I built the original Hablo platform from the ground up, taking it from the initial architecture to a working product within three months. It included accounts, connections, posts, search, and organizations with roles and permissions. I used TypeScript throughout, with React and GraphQL on the frontend, Auth0 for authentication, and a NestJS and PostgreSQL backend hosted on Google Cloud.',
      },
      {
        title: 'Monitoring and delivery',
        text: 'For the original platform in 2020, I added production tooling to monitor platform health, user activity, and errors in real time. I also set up the monorepo’s delivery pipeline, with pre-production environments and checks before production deployment. Cypress covered end-to-end flows, while Jest covered unit tests.',
      },
      {
        title: 'Images and the loading experience',
        text: 'The original platform needed to show image-rich feeds without waiting for every full-resolution asset to download. I built a staged image-loading component in React using Cloudinary: a small, blurred preview appeared first, followed by the full-resolution image when it was ready.',
      },
      {
        title: 'Leading the platform',
        text: 'As CTO, I combine technical direction with engineering across the platform and its learning products. My work includes content workflows, personalization, mobile experiences, reliability, and release quality.',
      },
      {
        title: 'Visit California and custom AI agents',
        text: 'I’m now building a new platform for Visit California and developing custom AI agents, alongside my ongoing leadership and engineering work at Hablo.',
      },
    ],
  },
  {
    slug: 'divriots',
    name: 'divRIOTS',
    title: 'Figma tools for data and content',
    role: 'Core developer',
    description:
      'As a core developer at divRIOTS, I built six Figma plugins from the ground up. The company’s tools reached over two million users.',
    image: '/images/work/divriots.webp',
    imageAlt: 'data.to.design running inside Figma, mapping a dataset into an ecommerce design.',
    preview: '/images/refresh/divriots-preview.webp',
    previewAlt: 'Product data mapped into populated Figma designs, from the live data.to.design demonstration.',
    tags: ['Figma plugins', 'Data workflows', 'Design tools'],
    symbol: 'cube',
    color: 'divriots',
    url: 'https://divriots.com',
    chapters: [
      {
        title: 'image.to.design',
        logo: '/images/plugins/imageToDesign.webp',
        text: 'I built image.to.design to import images into Figma and convert them into editable designs. It gives designers an editable starting point from an existing image, saving them from rebuilding the design by hand.',
      },
      {
        title: 'ai.to.design',
        logo: '/images/plugins/aiToDesign.webp',
        text: 'I built ai.to.design to generate editable designs from text prompts inside Figma. It turns a written idea into a design that the user can edit and develop further within their existing workflow.',
      },
      {
        title: 'data.to.design',
        logo: '/images/plugins/dataToDesign.webp',
        text: 'I built data.to.design to connect real content sources to Figma and map their data and images onto design layers. Designers can populate screens with actual product content, test different records, and see how a layout handles real information.',
      },
      {
        title: 'psd.to.design',
        logo: '/images/plugins/psdToDesign.webp',
        text: 'I built psd.to.design to import Adobe Photoshop PSD files into Figma with editable layers. It lets teams continue working on existing Photoshop designs in Figma without rebuilding the document from a flat image.',
      },
      {
        title: 'office.to.design',
        logo: '/images/plugins/officeToDesign.webp',
        text: 'I built office.to.design to import office documents into Figma as editable designs. Existing document content becomes a starting point for visual design work, reducing the need to copy and reconstruct it manually.',
      },
      {
        title: 'Lorem Ipsum',
        logo: '/images/plugins/loremIpsum.webp',
        text: 'I built Lorem Ipsum to fill Figma text layers with placeholder copy or fake data. Designers can populate a layout quickly and check how it works with content before the final copy is ready.',
      },
      {
        title: 'UI library contribution',
        text: 'Alongside product work, I contributed a merged change to the company’s public Figma plugin UI library.',
      },
    ],
  },
  {
    slug: 'kernel',
    name: 'Kernel',
    title: 'Data service for Figma',
    role: 'Principal developer of the data service',
    description: 'A service for importing product data and mapping content to Figma design layers.',
    image: '/images/work/kernel.webp',
    imageAlt: 'The Kernel Figma plugin applying mapped product data to design layers.',
    preview: '/images/work/kernel.webp',
    previewAlt: 'The Kernel plugin mapping data into Figma layers.',
    tags: ['Figma', 'Full stack', 'Data service'],
    symbol: 'stack',
    color: 'kernel',
    url: 'https://www.toptal.com/developers/resume/darren-labithiotis',
    linkLabel: 'Read the original profile',
    chapters: [
      {
        title: 'Data imports',
        text: 'Between 2021 and 2023, I was the principal developer of Kernel’s full-stack data service. It imported content from sources such as Google Sheets, JSON, and CSV, then let designers select their datasets and apply real text and images to Figma layers. I built the import and management APIs that supported those workflows.',
      },
      {
        title: 'Permissions, versioning, and publishing',
        text: 'I implemented access controls using Auth0 roles and policies, alongside the dataset versioning and publishing system. The versioning system retained strict database constraints as content changed and new versions were published.',
      },
      {
        title: 'Figma plugin and authentication',
        text: 'I built the plugin’s component library from scratch to match the supplied Figma designs. Its interface let designers choose data sources and apply their content within Figma. I also helped build the Auth0 PKCE authentication flow so it worked within the constraints of the Figma plugin environment.',
      },
      {
        title: 'Image processing',
        text: 'I implemented an image-job system that used BullMQ to queue and batch Cloudinary uploads.',
      },
      {
        title: 'Testing and delivery',
        text: 'I added end-to-end tests, including mocks for the Figma environment, and built microservices with a CI/CD pipeline. Releases used GitHub version tags and passed through linting, compilation, unit tests, integration tests, and deployment. The stack included TypeScript, React, NestJS, Prisma, and Google Cloud.',
      },
    ],
  },
  {
    slug: 'zed-themes',
    name: 'Zed Themes',
    title: 'Theme browser and editor for Zed',
    role: 'Creator & maintainer',
    description:
      'A visual theme browser and editor for Zed, with search, live editing, and GitHub theme synchronization.',
    image: '/images/work/zed-themes.webp',
    imageAlt: 'The Zed Themes website showing the theme collection and editor previews.',
    preview: '/images/refresh/zed-preview.webp',
    previewAlt: 'A live Kaimandres theme preview from Zed Themes.',
    tags: ['Zed', 'Developer tools', 'Open source'],
    symbol: 'code',
    color: 'zed',
    url: 'https://zed-themes.com',
    chapters: [
      {
        title: 'Theme browsing and editing',
        text: 'I built Zed Themes as an independent product for browsing and creating themes for the Zed code editor.',
      },
      {
        title: 'Editor features',
        text: 'The product has grown through search, GitHub theme synchronization, undo and redo, mobile editing controls, token highlighting, and support for JSONC files.',
      },
      {
        title: 'Open source',
        text: 'The source code and development history are public.',
      },
    ],
  },
  {
    slug: 'triptease',
    name: 'Triptease',
    title: 'Hotel eCommerce platform',
    role: 'Senior software engineer',
    description:
      'At Triptease, I worked on Price Fighter’s OTA price collection, the messaging platform, and disparity dashboards to help hotels compete on price and win direct bookings.',
    image: '/images/work/triptease.webp',
    imageAlt: 'The Triptease hotel price-check experience from my work at the company.',
    preview: '/images/refresh/triptease-preview.webp',
    previewAlt: 'Triptease’s current guest insights interface, from its official website.',
    tags: ['OTA prices', 'Messaging', 'Dashboards'],
    symbol: 'desktop',
    color: 'triptease',
    url: 'https://www.triptease.com',
    chapters: [
      {
        title: 'Helping hotels win direct bookings',
        text: 'Triptease helps hotels increase direct bookings and reduce their dependence on online travel agencies. Its platform combines hotel pricing information, guest data, and marketing tools so hotels can understand their competition and improve the booking experience on their own websites. I worked there as a senior software engineer from 2016 to 2020.',
      },
      {
        title: 'Price Fighter and OTA price collection',
        text: 'On the Price Fighter team, I built a service that collected hotel prices from online travel agencies, or OTAs, in real time and handled hundreds of requests per minute. I also built the React price-check widget and its backend. It ran in an iframe on hotel websites, showing guests how a hotel’s direct rate compared with OTA offers. My public resume records its deployment on more than 10,000 hotel websites at the time.',
      },
      {
        title: 'Messaging platform',
        text: 'I worked on the messaging platform used on hotel websites, helping hotels communicate with visitors during the booking journey. I developed pop-up widgets that ran on clients’ sites in isolation, so their interfaces and behavior did not interfere with the host website.',
      },
      {
        title: 'Disparity dashboards',
        text: 'I worked on dashboards that helped hotels see price disparities between their own direct rates and OTA offers. These interfaces made the collected pricing data useful to hotel teams by showing where other channels were undercutting them. The wider client platform let hotels configure their products and measure performance through dashboards and analytics.',
      },
      {
        title: 'Client platform and branding',
        text: 'I co-built the client platform used by hotel customers and several internal teams, including a reusable component library with data lists, dropdowns, and typography. I also designed and built the branding service behind the dashboards. It kept an immutable history of branding changes and used a CDN for delivery.',
      },
      {
        title: 'Analytics and sales tooling',
        text: 'I built an analytics service that collected events from Triptease’s products and handled hundreds of requests per second, using queues and serverless functions for reliable processing. I also created a tool that gathered hotel listings by country from travel-agent websites and enriched them with other public sources for the sales team.',
      },
    ],
  },
] as const;

export type ProjectSlug = (typeof projects)[number]['slug'];
export type Project = (typeof projects)[number] & { readonly linkLabel?: string };

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: ProjectSlug) {
  return projects[(projects.findIndex((project) => project.slug === slug) + 1) % projects.length];
}

export const featuredProjectSlugs = ['hablo', 'divriots', 'triptease'] as const satisfies readonly ProjectSlug[];
export const featuredProjects = featuredProjectSlugs.map((slug) => {
  const project = findProject(slug);
  if (!project) throw new Error(`Missing featured project: ${slug}`);
  return project;
});

export const sideProjects = [
  {
    name: 'Upsy',
    description: 'Service status, incident history, and notifications.',
    url: 'https://upsy.sh',
    label: 'Service monitoring',
    symbol: 'status',
    slug: 'upsy',
    image: '/images/refresh/upsy-preview.webp',
    imageAlt: 'A captured Upsy service dashboard with status history. This is a preview, not a live status report.',
  },
  {
    name: 'PriceFox',
    description: 'Product price tracking and alerts.',
    url: 'https://pricefox.app',
    label: 'Price tracking',
    symbol: 'price',
    slug: 'pricefox',
    image: '/images/refresh/pricefox-preview.webp',
    imageAlt:
      'Illustration of PriceFox price alerts using its live website’s example prices. This is not a live offer.',
  },
  {
    name: 'Zed Themes',
    description: 'Preview and edit Zed themes.',
    url: 'https://zed-themes.com',
    label: 'Zed Themes Viewer',
    symbol: 'code',
    slug: 'zed-themes',
    image: '/images/refresh/zed-preview.webp',
    imageAlt: 'The Kaimandres theme rendered by the live Zed Themes preview service.',
  },
  {
    name: 'MusicDL',
    description: 'CLI music downloads and playlist sync.',
    url: 'https://musicdl.app',
    label: 'CLI for music',
    symbol: 'music',
    slug: 'musicdl',
    image: '/images/refresh/musicdl-preview.webp',
    imageAlt: 'The MusicDL command-line interface shown in its current repository documentation.',
  },
  {
    name: 'Vizzo',
    description: 'Render TanStack Charts to image files.',
    url: 'https://vizzo.dev',
    label: 'Charts for CLI & Agents',
    symbol: 'chart',
    slug: 'vizzo',
    image: '/images/refresh/vizzo-preview.webp',
    imageAlt: 'An example chart rendered with Vizzo, using illustrative data.',
  },
] as const;

export const contributions = [
  {
    name: 'Varlock',
    description: 'Failure handling in the Wrangler integration',
    url: 'https://github.com/dmno-dev/varlock/pull/637',
  },
  {
    name: 'Prisma NestJS GraphQL',
    description: 'Support for Prisma v4',
    url: 'https://github.com/unlight/prisma-nestjs-graphql/pull/123',
  },
  {
    name: 'divRIOTS plugin UI',
    description: 'Menu display behavior',
    url: 'https://github.com/divriots/create-figma-plugin-ui/pull/14',
  },
  { name: 'Mantine', description: 'Global font-size behavior', url: 'https://github.com/mantinedev/mantine/pull/403' },
] as const;

type CareerEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights?: readonly string[];
  projectSlug?: ProjectSlug;
};

export const career: readonly CareerEntry[] = [
  {
    period: 'Today',
    company: 'Hablo',
    projectSlug: 'hablo',
    role: 'CTO',
    description:
      'Hablo connects the travel industry through posts, events, learning, and professional networks. As CTO, I lead technical direction and continue to build the product.',
    highlights: [
      'Building a new platform for Visit California and developing custom AI agents.',
      'Engineering across the travel platform, learning products, content workflows, and mobile experiences.',
      'Leading delivery, reliability, and release quality as the platform develops.',
    ],
  },
  {
    period: 'Recent work',
    company: 'divRIOTS',
    projectSlug: 'divriots',
    role: 'Core developer',
    description: 'Built six Figma plugins from the ground up at a company whose tools reached over two million users.',
    highlights: [
      'Built image.to.design and ai.to.design for image imports and prompt-generated editable designs.',
      'Built data.to.design to connect real content sources and populate Figma layers with their data and images.',
      'Built psd.to.design and office.to.design to import existing documents into editable Figma designs.',
      'Built Lorem Ipsum for placeholder content and contributed to the public Figma plugin UI library.',
    ],
  },
  {
    period: '2021–2023',
    company: 'Kernel',
    projectSlug: 'kernel',
    role: 'Senior software engineer',
    description:
      'Principal developer of a full-stack data service and Figma plugin. Kernel let designers use real product content instead of manually replacing placeholders.',
    highlights: [
      'Built import and management APIs for Google Sheets, JSON, and CSV, with access controls, versioning, and publishing.',
      'Created the Figma plugin component library and helped integrate Auth0 authentication within the plugin environment.',
      'Implemented queued image processing with BullMQ and Cloudinary.',
      'Added end-to-end tests and a microservices delivery pipeline with validation, tests, and deployment.',
    ],
  },
  {
    period: '2020–2021',
    company: 'Yara',
    role: 'Senior React Native engineer',
    description:
      'Worked on AtFarm, a React Native app for farmers. I helped prepare the app for release through feature delivery, refactoring, and improvements to stability.',
    highlights: [
      'Delivered key features and new UI flows for the app’s release.',
      'Refactored the app for new GraphQL APIs and ensured it worked offline.',
      'Updated React Native versions and moved older class components to functional components and hooks.',
      'Added end-to-end tooling and automated repetitive development tasks, including fetching development tokens.',
    ],
  },
  {
    period: '2020',
    company: 'Hablo',
    projectSlug: 'hablo',
    role: 'Lead software engineer',
    description:
      'Built the original Hablo platform from the ground up, taking the initial architecture to a working product within three months.',
    highlights: [
      'Delivered accounts, connections, posts, search, and organizations with complex roles and permissions.',
      'Built with TypeScript, React, GraphQL, Auth0, NestJS, and PostgreSQL.',
      'Added real-time monitoring and a CI pipeline with pre-production environments and end-to-end checks.',
      'Built staged image loading with Cloudinary so small previews appeared before full-resolution images.',
    ],
  },
  {
    period: '2016–2020',
    company: 'Triptease',
    projectSlug: 'triptease',
    role: 'Senior software engineer',
    description:
      'Built hotel technology to help guests compare rates and hotels increase direct bookings. My work spanned Price Fighter, messaging, disparity dashboards, and client platforms.',
    highlights: [
      'Built real-time OTA price collection and a price-check widget used on more than 10,000 hotel websites at the time, as recorded in my public resume.',
      'Worked on the messaging platform, isolated website widgets, and dashboards showing direct-rate disparities.',
      'Co-built the client platform, reusable UI components, and a branding service with a history of changes.',
      'Built analytics ingestion handling hundreds of requests per second, using queues and serverless functions.',
    ],
  },
  {
    period: '2013–2016',
    company: 'Bopple',
    role: 'Head of development & frontend engineer',
    description:
      'Helped deliver a mobile ordering platform and the tools venues needed to operate it, combining frontend engineering with development-team management.',
    highlights: [
      'Managed a team spanning iOS, Android, Java backend development, and frontend engineering.',
      'Built an HTML5 app for venue staff to process orders placed through the mobile apps.',
      'Created the back-office CMS for venues to manage their accounts and product catalogues.',
    ],
  },
  {
    period: '2009–2013',
    company: 'Waterfront',
    role: 'Software artist & project management',
    description:
      'Branded games and visual production for set-top boxes, combining software art with project management.',
  },
] as const;

# Darren Labithiotis's work history

Compiled on 2 October 2026 for the portfolio redesign. This is the public, high-level record. Detailed evidence from private repositories stays in `.local/research/`, which is excluded from Git and the website build.

## Profile

Darren is CTO at Hablo and a hands-on product engineer based in the Austrian mountains. His career combines technical leadership, full-stack web development, developer tooling, mobile applications, and an earlier background in game design and visual art.

The current role is confirmed by Darren and his [GitHub profile](https://github.com/labithiotis). Earlier roles and project descriptions come from his [public Toptal resume](https://www.toptal.com/developers/resume/darren-labithiotis), the supplied historical CV, and project artifacts. On 6 October 2026, Darren supplied further first-hand details of his Hablo, divRIOTS, and Triptease work. Those confirmations are recorded below.

Darren specified 2012 as the start year for his software experience. The homepage calculates the displayed years
from the current UTC year, using that shared start year in the hero, experience strip, and About copy. This gives
14+ years in 2026 and 15+ in 2027; earlier games and visual-design work remains recorded separately.

## What was reviewed

- The supplied Darren_Labithiotis_CV.pdf, an older CV covering work through approximately 2015.
- The full public Toptal resume, including employment, project descriptions, education, and certifications.
- The live Toptal profile was checked again on 6 October 2026 to expand the career timeline and project pages.
  Its structured employment entries and project descriptions confirm the details below. The fetched page and
  extracted source data stay in the ignored `.local/workExpansion/` folder.
- Local divRIOTS screenshots, product recordings, and the `webcomponents-editor` monorepo snapshot.
- Local Hablo platform screenshots and recordings.
- Local Kernel application and Figma plugin screenshots and recordings.
- All accessible GitHub pull requests authored by `labithiotis`, created from 1 January 2021 through the research date.
- Public owned-repository metadata and the implementation context of selected contributions.

GitHub returned 320 PRs: 297 merged, 16 closed without merging, and 7 open. Pagination completed and the archive checked result count and uniqueness. The window spans more than five years. Search only includes repositories accessible to the authenticated account; historical private repositories that are no longer accessible are a coverage gap. In particular, the small number of accessible divRIOTS PRs must not be interpreted as the full extent of that work.

The private archive contains every returned PR's title, URL, dates, state, description, repository visibility, and
change-size metadata. Closed proposals and open work are kept separate from merged contributions.

## Selected highlights

### Hablo: technical leadership and a travel industry platform

**Current role:** CTO. **Earlier documented role:** lead software engineer in 2020.

Darren built the original Hablo platform from scratch, as confirmed in October 2026. His public resume documents the initial architecture and delivery within three months, including accounts, connections, posts, search, organizations, roles, permissions, production monitoring, and deployment checks.

The public project description names TypeScript, React, Apollo/GraphQL, Auth0, NestJS, PostgreSQL, and Google Cloud.
The employment entry records real-time monitoring, monorepo CI, pre-production deployments, end-to-end checks, and
a React component that loads a small, blurred Cloudinary preview before the full-resolution image. Cypress and Jest
are listed for end-to-end and unit testing respectively.

Recent GitHub evidence shows continued hands-on work across the platform, travel learning products, personalization, content workflows, reliability, mobile delivery, and release quality. These are summarized at product level because the repositories are private.

His current work includes building a new platform for Visit California and developing custom AI agents. Darren confirmed both in October 2026; they are ongoing work, not claims of a completed launch.

This is the strongest lead case study for a CTO profile: product delivery, architectural responsibility, ongoing engineering, and leadership in one sustained project.

**Sources:** Darren's October 2026 confirmations, [GitHub profile](https://github.com/labithiotis), [Hablo](https://myhablo.com), Toptal's Hablo employment and project sections, supplied Hablo product screenshots, and the local private PR ledger.

### divRIOTS: tools that connect design and engineering

Darren confirmed in October 2026 that he was a core developer at divRIOTS and built image.to.design, ai.to.design, data.to.design, psd.to.design, office.to.design, and Lorem Ipsum from the ground up. He also confirmed that the company's tools reached over two million users. This is a company-level historical figure, not a claim that each plugin had that many users. Exact employment dates remain unconfirmed.

The official product descriptions explain the six plugins:

- **image.to.design:** imports images and converts them into editable Figma designs.
- **ai.to.design:** generates designs from text prompts.
- **data.to.design:** connects real content sources and maps their data and images onto Figma layers.
- **psd.to.design:** imports Photoshop PSD files into Figma with editable layers.
- **office.to.design:** imports office documents as editable Figma designs.
- **Lorem Ipsum:** fills text layers with placeholder copy or fake data.

Supplied recordings, screenshots, and the local monorepo snapshot provide further context for the tooling and conversion workflows.

There is also a merged public contribution to the company's Figma plugin UI library.

**Sources:** Darren's October 2026 confirmations, [GitHub profile](https://github.com/labithiotis), supplied divRIOTS recordings and screenshots, local monorepo snapshot, the official [divRIOTS plugin catalogue](https://divriots.com) and [data.to.design](https://data.to.design), and [create-figma-plugin-ui PR #14](https://github.com/divriots/create-figma-plugin-ui/pull/14).

### Kernel: real product data inside Figma

**Documented role:** senior software engineer, 2021 to 2023. Toptal describes Darren as the principal developer of the full-stack data service.

Kernel let designers bring data from sources such as Google Sheets, JSON, CSV, and APIs into Figma, then map it to design layers and images. Darren's documented work includes the import service, data management, access controls, publishing and versioning, the plugin's component library, image processing, authentication, end-to-end testing, and the delivery pipeline.

The live employment entry adds specifics: Auth0 roles and policies for access controls; versioning and publishing
that retain database constraints; a plugin component library built from scratch; queued Cloudinary image uploads
using BullMQ; and an Auth0 PKCE flow adapted to Figma's plugin constraints. Darren added end-to-end tests with Figma
environment mocks. The microservices delivery pipeline used GitHub version tags and included linting, compilation,
unit tests, integration tests, and deployment.

For the public portfolio, lead with the practical outcome: designers could work with realistic product content instead of manually replacing placeholders.

**Sources:** Toptal's Kernel employment and experience sections, supplied Kernel application and plugin screenshots, and the public [Prisma integration contribution](https://github.com/unlight/prisma-nestjs-graphql/pull/123).

### Yara: AtFarm mobile delivery

**Documented role:** senior React Native engineer, 2020 to 2021.

Darren worked on AtFarm, a mobile app for farmers, and oversaw release preparation through key feature delivery and
new UI flows. The public project description records migration to new GraphQL APIs, offline behavior, and React
Native version updates. The employment entry describes moving class components to functional components and hooks,
refactoring to resolve bugs, adding end-to-end tooling, and automating repetitive developer tasks such as fetching
development tokens.

**Source:** the live [Toptal resume](https://www.toptal.com/developers/resume/darren-labithiotis), Yara employment and
AtFarm project descriptions, checked 6 October 2026.

### Bopple: mobile ordering and venue operations

**Documented role:** head of development, 2013 to 2016, with earlier frontend work recorded in the supplied CV.

Darren managed a team with iOS, Android, Java backend, and frontend developers delivering a mobile ordering platform.
He built an HTML5 app for venue staff to process orders placed through the customer apps, and a back-office CMS for
venues to manage their accounts and products. These are separate customer, staff, and venue-management workflows.

**Sources:** the live [Toptal resume](https://www.toptal.com/developers/resume/darren-labithiotis), Bopple employment
entry, checked 6 October 2026, and the supplied historical CV.

### Zed Themes: an independent developer product

**Evidence window:** 2024 to 2026.

Darren built and maintained a theme browser and visual editor for the Zed code editor. Merged work includes creating themes, search, theme synchronization with GitHub, undo and redo, mobile editing controls, token highlighting, and JSONC support.

This is a useful counterpoint to team projects: a complete product built around a developer's everyday tool, with ongoing attention to editing experience and correctness.

**Sources:** [Zed Themes](https://zed-themes.com), [repository](https://github.com/labithiotis/zed-themes), and merged PRs [#48](https://github.com/labithiotis/zed-themes/pull/48), [#108](https://github.com/labithiotis/zed-themes/pull/108), [#121](https://github.com/labithiotis/zed-themes/pull/121), [#129](https://github.com/labithiotis/zed-themes/pull/129), [#140](https://github.com/labithiotis/zed-themes/pull/140), [#150](https://github.com/labithiotis/zed-themes/pull/150), and [#155](https://github.com/labithiotis/zed-themes/pull/155).

### Upsy: service status in one place

**Evidence window:** 2026.

An independent product that brings service status, incident history, dashboards, and notifications together. Reviewed work covers provider search, history, status accuracy, mobile usability, notifications, and delivery quality.

The public case study should explain the product and Darren's ownership without exposing private implementation details or claiming uptime figures.

**Sources:** [Upsy](https://upsy.sh), personal Cloudflare deployment context, and the private PR ledger.

### PriceFox: price tracking and reliable data collection

**Evidence window:** 2025 to 2026.

Darren's work includes a browser extension, the application's data layer, price extraction, and the reliability of ongoing monitoring. Recent work strengthens the handling of inconsistent retailer data, retries, monitoring lifecycle, and operational visibility.

Present this as a price-monitoring product and engineering project. Keep implementation and security details in the private archive.

**Sources:** [PriceFox](https://pricefox.app), personal Cloudflare deployment context, and the private PR ledger.

### Triptease: production hotel technology

**Documented role:** senior software engineer, 2016 to 2020.

Darren built the price-check widget and the backend that collected online travel agent prices in real time. His public resume reports deployment on more than 10,000 hotel websites. It also describes work on branding management, the client platform, a reusable component library, analytics ingestion, and sales-data tooling.

The live employment entry records hundreds of requests per minute for the pricing service. The widget project
description identifies React and iframe isolation on hotel websites. Darren co-built the client platform and its
component library, and designed a branding service with immutable change history and CDN delivery. He also built
analytics ingestion handling hundreds of requests per second with queues and serverless functions, and a sales tool
that gathered hotel listings by country and enriched them with other public sources. These are historical
responsibilities and scale figures from his time at Triptease, not measurements of today's products.

In October 2026, Darren confirmed that his OTA price-collection work was on the Price Fighter team. He also worked on the messaging platform and disparity dashboards that showed hotels differences between their direct rates and OTA offers. Triptease's current public website describes a hotel platform combining pricing information, guest data, and marketing tools to increase direct bookings; this overview does not imply Darren built later products.

Triptease's official product descriptions include personalized website messaging for hotel visitors. This provides
the product context for the messaging chapter, without attributing current features to Darren's earlier work.

The 10,000+ figure is a historical claim from the public resume, not a current measurement. Use that qualification wherever the figure appears.

**Sources:** Darren's October 2026 confirmations, Toptal's Triptease employment and experience sections, [Triptease](https://triptease.com), and original site screenshots.

## Career chapters

| Period | Role or project | Evidence-backed work |
| --- | --- | --- |
| Current | CTO, Hablo | Built the original platform from scratch; current Visit California platform and custom AI agent work. Exact CTO start date is not established. |
| Recent, dates unconfirmed | Core developer, divRIOTS | Built six named Figma plugins from the ground up; the company's tools reached over two million users. |
| 2021 to 2023 | Senior software engineer, Kernel | Full-stack data service and Figma plugin. |
| 2020 to 2021 | Senior React Native engineer, Yara | AtFarm feature delivery, offline behavior, refactoring, release stability, and developer tooling. |
| 2020 | Lead software engineer, Hablo | Initial platform architecture and delivery. |
| Since April 2020 | Toptal network member | Public verified engineering profile; this is network membership, not a claim of continuous employment. |
| 2016 to 2020 | Senior software engineer, Triptease | Price Fighter OTA collection, price-check widgets, messaging, and disparity dashboards. |
| 2016 | Star Citizen Field Guide | Independent React Native application for iOS and Android. The public resume reports more than 3,000 monthly active users at its peak. |
| 2013 to 2016 | Bopple Technologies | Frontend engineering followed by head of development; mobile ordering, venue tools, and team management. |
| 2015 | Prism Digital, contractor | Recruitment website, job board, and publishing integrations. |
| February 2009 to February 2013 | Waterfront, software artist and project management | Branded games and visual production for set-top boxes. |
| 2005 to 2008 | Staffordshire University | BSc in Computer Games Design. The historical CV records first-class honours. |

The original CV's Boppl dates are more granular than Toptal's combined 2013 to 2016 employment record. Keep the public timeline broad rather than claiming a resolved month-by-month chronology.

## Open-source highlights

These are contributions to other projects, not claims that Darren authored the projects themselves.

| Project | Merged contribution | Source |
| --- | --- | --- |
| Varlock | Improve failure propagation in the Wrangler integration. | [PR #637](https://github.com/dmno-dev/varlock/pull/637) |
| Prisma NestJS GraphQL | Update integration support for Prisma v4. | [PR #123](https://github.com/unlight/prisma-nestjs-graphql/pull/123) |
| divRIOTS Figma plugin UI | Add support for hiding the menu display. | [PR #14](https://github.com/divriots/create-figma-plugin-ui/pull/14) |
| Mantine | Set the global font-size behavior. | [PR #403](https://github.com/mantinedev/mantine/pull/403) |

The reviewed archive also includes proposals to SuperTokens, Fingerprint Suite, Resend's Convex integration, and react-file-drop that closed without merging. They should not appear under shipped open-source contributions.

## Other repository work

- **MusicDL:** ongoing CLI work, including playlist resynchronization, duplicate-track handling, and manifest validation. The product website is [musicdl.app](https://musicdl.app). See [the repository](https://github.com/labithiotis/mdl) and merged PRs [#2](https://github.com/labithiotis/mdl/pull/2) through [#5](https://github.com/labithiotis/mdl/pull/5).
- **Express List Routes:** maintenance of a long-lived Express utility. See [the repository](https://github.com/labithiotis/express-list-routes).
- **Vizzo:** a chart-rendering project whose product website is [vizzo.dev](https://vizzo.dev), as supplied by Darren in October 2026. The initial research recorded an open PR; that PR's status is not evidence of a shipped feature.
- Other owned repositories and forks were checked for context. A fork alone is not evidence of contribution or authorship.

## Publishing rules

- Prefer product outcomes and clear descriptions over lists of technologies.
- Keep current role dates open until Darren supplies them.
- Do not turn PR counts into business impact or usage claims.
- Attribute historical scale figures to the public resume.
- Do not publish private PR URLs, private titles, architecture details, or incident/security findings.
- Supplied screenshots and recordings are evidence of interfaces and workflows, not proof of sole authorship.
- Site content uses this curated public record. Raw research is never imported into the application.

## Refreshing the evidence

Check Darren's current Toptal resume, official product sites, and GitHub history before updating this record and
`src/content/portfolio.ts`. Keep private evidence in `.local/research/`.

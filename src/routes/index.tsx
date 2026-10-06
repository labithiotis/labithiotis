import { createFileRoute, Link } from '@tanstack/react-router';
import { ButtonArrow } from '../components/ButtonArrow';
import { ExternalLink } from '../components/ExternalLink';
import { Icon } from '../components/Icon';
import { usePageEntrance } from '../components/PageEntrance';
import { featuredProjects, profile, sideProjects } from '../content/portfolio';
import { pageHead } from '../content/site';

export const Route = createFileRoute('/')({
  head: () =>
    pageHead({
      description:
        'Darren Labithiotis, CTO at Hablo and product engineer based in Austria. Figma tools, web and mobile applications, and independent products.',
      path: '/',
    }),
  component: HomePage,
});

const techStack = [
  'TypeScript',
  'React',
  'Cloudflare',
  'TanStack',
  'Prisma',
  'PostHog',
  'Effect',
  'OpenRouter',
  'NestJS',
  'PostgreSQL',
];

function HomePage() {
  const entrance = usePageEntrance();
  const experienceYears = new Date().getUTCFullYear() - profile.softwareStartYear;
  return (
    <div className="home-page container">
      <HomeHero experienceYears={experienceYears} />

      <section className="experience-strip" aria-label="Experience and background">
        <div className="experience-fact">
          <Icon name="calendar" />
          <p>
            <strong>{experienceYears}+</strong>
            <span>Years of experience</span>
          </p>
        </div>
        <div className="experience-fact">
          <Icon name="stack" />
          <p>
            <strong>SaaS</strong>
            <span>Product engineering</span>
          </p>
        </div>
        <div className="experience-fact">
          <Icon name="code" />
          <p>
            <strong>Web & mobile</strong>
            <span>Full-stack development</span>
          </p>
        </div>
        <div className="experience-fact">
          <Icon name="globe" />
          <p>
            <strong>Remote</strong>
            <span>Austria</span>
          </p>
        </div>
        <ExternalLink className="network-stamp" href={profile.resume} aria-label="View my Toptal profile">
          <span className="network-wordmark">
            <Icon name="toptal" width="28" height="28" />
            Toptal
          </span>
        </ExternalLink>
      </section>

      <section id="work" className="portfolio-section" aria-labelledby="work-title">
        <div className="portfolio-section-heading">
          <h2 id="work-title">Featured work</h2>
          <Link to="/history">
            View all work <Icon name="forward" width="16" height="16" />
          </Link>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className={`product-card featured-card card-${project.slug}`}
              key={project.slug}
            >
              <div className="product-card-heading">
                <span className={`brand-badge brand-${project.slug}`}>
                  <Icon name={project.symbol} width="25" height="25" />
                </span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.title}</p>
                </div>
                <span className="card-arrow">
                  <Icon width="17" height="17" />
                </span>
              </div>
              <img
                className="product-preview"
                src={project.preview}
                alt={project.previewAlt}
                width="1200"
                height="600"
                loading="lazy"
              />
              <p className="featured-card-description">{project.description}</p>
              <ul className="product-tags" aria-label={`${project.name} work areas`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section
        ref={entrance.projects}
        id="projects"
        className="portfolio-section"
        aria-labelledby="projects-title"
        data-entrance-section="projects"
      >
        <div className="portfolio-section-heading">
          <h2 id="projects-title">Side projects</h2>
        </div>
        <div className="independent-grid">
          {sideProjects.map((project) => (
            <ExternalLink
              href={project.url}
              className={`product-card independent-card card-${project.slug}`}
              key={project.name}
            >
              <div className="product-card-heading">
                <span className={`brand-badge brand-${project.slug}`}>
                  <Icon name={project.symbol} width="24" height="24" />
                </span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.label}</p>
                </div>
                <span className="card-arrow">
                  <Icon width="15" height="15" />
                </span>
              </div>
              <img
                className="product-preview"
                src={project.image}
                alt={project.imageAlt}
                width="1000"
                height="500"
                loading="lazy"
              />
              <span className="sr-only">{project.description}</span>
            </ExternalLink>
          ))}
        </div>
      </section>

      <section
        ref={entrance.about}
        id="about"
        className="about-panel"
        aria-labelledby="about-title"
        data-entrance-section="about"
      >
        <div className="about-panel-copy">
          <h2 id="about-title">About me</h2>
          <p>
            I’m CTO at Hablo and a software engineer based in Austria. I have {experienceYears}+ years of software
            experience, with a focus on web and mobile products in JavaScript and TypeScript. My work takes me across
            the frontend, backend, and the infrastructure that supports them.
          </p>
          <p>
            Before software engineering, I worked in games and visual design. That background still shapes how I
            approach interfaces and user experience. While living and working in central London, React meetups
            introduced me to React and React Native, and I became an early adopter of both.
          </p>
          <p>
            I moved to the Austrian mountains in 2017 and have worked remotely ever since. I now live here with my
            family. Alongside my work at Hablo, I build independent tools and products, including Upsy, PriceFox, and
            Zed Themes.
          </p>
          <Link to="/history" className="button button-primary button-chevron">
            More about me <ButtonArrow />
          </Link>
        </div>
        <img
          className="about-face"
          src="/images/refresh/darren-chiaroscuro.webp"
          alt="Portrait of Darren Labithiotis with chiaroscuro lighting."
          width="1000"
          height="1000"
          loading="lazy"
        />
        <div className="about-details">
          <ul className="about-facts">
            <li>
              <Icon name="pin" />
              Austria
            </li>
            <li>
              <Icon name="desktop" />
              Remote
            </li>
            <li>
              <Icon name="family" />
              Dad & family
            </li>
            <li>
              <Icon name="mountain" />
              Mountains & outdoors
            </li>
            <li>
              <Icon name="game" />
              Games & design background
            </li>
          </ul>
          <div className="about-tools">
            <p>
              <Icon name="code" />
              TypeScript, React, Node.js
            </p>
            <p>
              <Icon name="stack" />
              Independent products
            </p>
            <ExternalLink className="about-network" href={profile.resume}>
              <Icon name="toptal" width="26" height="26" />
              <span>
                <strong>Toptal</strong>
                <span className="network-profile-link">
                  View my profile <Icon name="forward" width="13" height="13" />
                </span>
              </span>
            </ExternalLink>
          </div>
        </div>
      </section>

      <section
        ref={entrance.stack}
        className="tech-stack"
        aria-labelledby="tech-stack-title"
        data-entrance-section="stack"
      >
        <h2 id="tech-stack-title">Tech stack</h2>
        <ul className="tech-stack-list">
          {techStack.map((technology) => (
            <li key={technology}>
              <img src={`/images/tech/${technology.toLowerCase()}.svg`} alt="" width="20" height="20" loading="lazy" />
              <span>{technology}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        ref={entrance.contact}
        id="contact"
        className="contact-panel"
        aria-labelledby="contact-title"
        data-entrance-section="contact"
      >
        <div>
          <h2 id="contact-title">Have a project in mind?</h2>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
        <div className="contact-panel-actions">
          <a href={`mailto:${profile.email}`} className="button button-primary button-chevron">
            Get in touch <ButtonArrow />
          </a>
          <ExternalLink href={profile.github} className="social-link" aria-label="Darren on GitHub">
            <Icon name="github" />
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className="social-link" aria-label="Darren on LinkedIn">
            <Icon name="linkedin" />
          </ExternalLink>
          <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email Darren">
            <Icon name="mail" />
          </a>
        </div>
      </section>
    </div>
  );
}

function HomeHero({ experienceYears }: { experienceYears: number }) {
  return (
    <section className="saas-hero" aria-labelledby="hero-title">
      <div className="saas-hero-copy">
        <p className="hero-role">CTO & software engineer</p>
        <h1 id="hero-title">
          <span className="hero-title-line">I build and</span>
          <br />
          <span className="hero-title-line">
            scale <span>SaaS</span>
          </span>
          <br />
          <span className="hero-title-line">
            products<span>.</span>
          </span>
        </h1>
        <p className="hero-summary">
          {experienceYears}+ years building software,
          <br />
          from idea to production.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="button button-primary button-chevron">
            See my work <ButtonArrow />
          </a>
          <a href="#contact" className="button button-secondary">
            Get in touch
          </a>
        </div>
      </div>
      <img
        className="hero-face"
        src="/images/refresh/face2-shoulders.webp"
        alt="Darren Labithiotis"
        width="1254"
        height="1254"
        fetchPriority="high"
      />
      <div className="hero-location">
        <p>Based in Austria</p>
        <svg
          width="58"
          height="44"
          viewBox="0 0 58 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M48 3c4 19-11 30-35 27m9-9-11 9 12 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

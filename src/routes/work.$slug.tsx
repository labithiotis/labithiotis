import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ButtonArrow } from '../components/ButtonArrow';
import { ExternalLink } from '../components/ExternalLink';
import { Icon } from '../components/Icon';
import { findProject, nextProject } from '../content/portfolio';
import { pageHead } from '../content/site';

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageHead({
          title: loaderData.name,
          description: loaderData.description,
          path: `/work/${params.slug}`,
        })
      : {},
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const next = nextProject(project.slug);
  return (
    <article className="project-page container">
      <Link to="/" hash="work" className="text-link back-link">
        <Icon name="back" width="18" height="18" /> Back to selected work
      </Link>
      <div className="page-intro">
        <h1>{project.title}</h1>
        <div className="project-meta">
          <span>{project.name}</span>
          {project.slug !== 'divriots' && <span>{project.role}</span>}
        </div>
        <p>{project.description}</p>
      </div>
      <figure className={`case-image case-${project.color}`}>
        <img src={project.image} alt={project.imageAlt} width="1400" height="1000" />
      </figure>
      <div className="case-body">
        {project.chapters.map((chapter) => (
          <section key={chapter.title}>
            <h2 className="case-chapter-title">
              {'logo' in chapter && <img src={chapter.logo} alt="" width="48" height="48" loading="lazy" />}
              <span>{chapter.title}</span>
            </h2>
            <p>{chapter.text}</p>
          </section>
        ))}
        <ExternalLink href={project.url} className="button button-primary button-chevron">
          {project.linkLabel ?? `Visit ${project.name}`}
          <ButtonArrow />
        </ExternalLink>
      </div>
      <Link to="/work/$slug" params={{ slug: next.slug }} className="next-project">
        <span>Next project</span>
        <strong>{next.name}</strong>
        <Icon width="40" height="40" />
      </Link>
    </article>
  );
}

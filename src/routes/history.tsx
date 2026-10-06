import { createFileRoute, Link } from '@tanstack/react-router';
import { ExternalLink } from '../components/ExternalLink';
import { Icon } from '../components/Icon';
import { career, contributions } from '../content/portfolio';
import { pageHead } from '../content/site';

export const Route = createFileRoute('/history')({
  head: () =>
    pageHead({
      title: 'Work history',
      description:
        'Darren Labithiotis’s work history in games, product engineering, design tools, and technical leadership.',
      path: '/history',
    }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <div className="history-page container">
      <Link to="/" className="text-link back-link">
        <Icon name="back" width="18" height="18" /> Back to the portfolio
      </Link>
      <div className="page-intro">
        <h1>Work history</h1>
      </div>
      <div className="career-list">
        {career.map((chapter, index) => {
          return (
            <article className="career-chapter" key={`${chapter.company}-${chapter.period}`}>
              <span className="career-period">{chapter.period}</span>
              <div>
                <h2>
                  {chapter.projectSlug ? (
                    <Link to="/work/$slug" params={{ slug: chapter.projectSlug }}>
                      {chapter.company}
                    </Link>
                  ) : (
                    chapter.company
                  )}
                  {index === 0 && <span className="current-label">Current role</span>}
                </h2>
                <p className="career-role">{chapter.role}</p>
                <p>{chapter.description}</p>
                {chapter.highlights && (
                  <ul className="career-highlights">
                    {chapter.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <section className="history-contributions" aria-labelledby="contributions-title">
        <h2 id="contributions-title">Open-source contributions</h2>
        <div className="history-contribution-links">
          {contributions.map((item) => (
            <ExternalLink key={item.name} href={item.url} className="text-link" title={item.description}>
              {item.name}
              <Icon width="16" height="16" />
              <span className="sr-only">{item.description}</span>
            </ExternalLink>
          ))}
        </div>
      </section>
    </div>
  );
}

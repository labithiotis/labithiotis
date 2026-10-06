import { Icon } from './Icon';

export function ButtonArrow() {
  return (
    <span className="button-arrow" aria-hidden="true">
      <Icon name="forward" width="17" height="17" strokeWidth="2.5" className="button-arrow-icon" />
      <span className="button-surface">
        <svg className="button-chevron-cap" viewBox="0 0 160 100" aria-hidden="true" focusable="false">
          {/* The 7.5-unit arc gives the chevron an approximately 3px tip radius at a 40px button height. */}
          <path d="M0 0 43.0125 44.80625A7.5 7.5 0 0 1 43.0125 55.19375L0 100H160V0Z" />
        </svg>
      </span>
    </span>
  );
}

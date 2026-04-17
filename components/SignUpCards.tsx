type SignUpCardsProps = {
  items: ReadonlyArray<{
    title: string;
    description: string;
    buttonLabel: string;
    formUrl: string;
    embedLabel: string;
  }>;
};

export function SignUpCards({ items }: SignUpCardsProps) {
  return (
    <div className="sign-up-grid">
      {items.map((item) => {
        const hasLink = Boolean(item.formUrl);

        return (
          <article className="sign-up-card" key={item.title}>
            <div className="sign-up-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="embed-placeholder" aria-label={item.embedLabel}>
              <span className="placeholder-badge">Sign-up details</span>
              <p>{item.embedLabel}</p>
            </div>
            <div className="button-row">
              {hasLink ? (
                <a className="button button-primary" href={item.formUrl} target="_blank" rel="noreferrer">
                  {item.buttonLabel}
                </a>
              ) : (
                <a className="button button-primary" href="#contact">
                  {item.buttonLabel}
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

type SignUpCardsProps = {
  items: ReadonlyArray<{
    title: string;
    description: string;
    buttonLabel: string;
    formUrl: string;
    details: ReadonlyArray<string>;
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
            <ul className="detail-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="button-row">
              {hasLink && (
                <a className="button button-primary" href={item.formUrl} target="_blank" rel="noreferrer">
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

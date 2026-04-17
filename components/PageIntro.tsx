type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className="page-intro section festival-layer">
      <div className="container page-intro-shell">
        <div className="page-intro-copy">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="page-intro-art" aria-hidden="true">
          <div className="art-ticket">Summer Fest</div>
          <div className="art-swirl art-swirl-one" />
          <div className="art-swirl art-swirl-two" />
          <div className="art-star" />
        </div>
      </div>
    </section>
  );
}

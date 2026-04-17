type InfoBarProps = {
  items: ReadonlyArray<{
    label: string;
    value: string;
    icon?: string;
  }>;
};

export function InfoBar({ items }: InfoBarProps) {
  return (
    <section className="info-bar" aria-label="Quick event information">
      <div className="container info-grid">
        {items.map((item) => (
          <div className="info-item" key={item.label}>
            <div className={`info-icon icon-${item.icon ?? "spark"}`} aria-hidden="true" />
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

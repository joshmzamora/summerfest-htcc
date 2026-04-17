import { Action } from "@/components/types";

type CardGridProps = {
  items: ReadonlyArray<{
    title: string;
    body?: string;
    note?: string;
    actions?: readonly Action[];
  }>;
  className?: string;
};

export function CardGrid({ items, className }: CardGridProps) {
  return (
    <div className={`card-grid ${className ?? ""}`.trim()}>
      {items.map((item) => (
        <article className="content-card" key={item.title}>
          <h3>{item.title}</h3>
          {item.body ? <p>{item.body}</p> : null}
          {item.note ? <p className="card-note">{item.note}</p> : null}
          {item.actions?.length ? (
            <div className="button-row">
              {item.actions.map((action) => (
                <a
                  key={action.label}
                  className={`button button-${action.variant ?? "primary"}`}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                >
                  {action.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

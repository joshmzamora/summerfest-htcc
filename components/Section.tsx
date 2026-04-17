import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, description, children, className }: SectionProps) {
  return (
    <section className={`section ${className ?? ""}`.trim()} id={id}>
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

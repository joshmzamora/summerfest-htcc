type InfoBarProps = {
  items: ReadonlyArray<{
    label: string;
    value: string;
    icon?: string;
  }>;
};

function InfoIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "sun":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="6.5" y="8.5" width="19" height="17" rx="3" stroke="currentColor" strokeWidth="2.25" />
          <path d="M11 6v5M21 6v5M6.5 13h19" stroke="currentColor" strokeLinecap="round" strokeWidth="2.25" />
          <rect x="11" y="16.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="2.25" />
          <path d="M16 10v6.5h4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2.25" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 27c4.7-6 7-10 7-13.1A7 7 0 0 0 9 13.9C9 17 11.3 21 16 27Z"
            fill="currentColor"
          />
          <circle cx="16" cy="14" r="2.75" fill="#fff7eb" />
        </svg>
      );
    case "wheel":
      return (
        <svg viewBox="0 0 512 512" fill="none" aria-hidden="true">
          <path
            d="M360.819 282.016c-11.672-.016-22.359 4.75-29.984 12.406-7.656 7.625-12.422 18.313-12.422 29.984.016 23.406 18.969 42.375 42.406 42.375 23.422 0 42.375-18.984 42.375-42.375.016-11.672-4.75-22.359-12.391-29.984-7.64-7.656-18.328-12.422-29.984-12.406Zm0 63.468c-11.672-.016-21.078-9.453-21.094-21.078 0-11.672 9.406-21.094 21.094-21.094 11.656 0 21.078 9.422 21.078 21.094-.016 11.625-9.438 21.063-21.078 21.078Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <path
            d="M126.616 282.016c-11.688-.016-22.344 4.75-29.984 12.406-7.656 7.625-12.406 18.313-12.406 29.984.016 23.391 18.953 42.375 42.391 42.375 23.422 0 42.391-18.969 42.391-42.375-.002-23.453-18.986-42.39-42.392-42.39Zm0 63.468c-11.672-.016-21.063-9.453-21.078-21.078 0-11.672 9.406-21.094 21.078-21.094 11.656.016 21.078 9.422 21.094 21.094-.016 11.625-9.454 21.063-21.094 21.078Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <path
            d="M507.976 226.172c-3.25-3.781-7.984-5.984-12.953-5.984H390.914c-6.547 0-12.719-3.016-16.734-8.156l-45.875-58.656c-4.031-5.141-10.203-8.156-16.734-8.156H145.334c-7.609 0-14.625 4.078-18.422 10.656l-36.953 64.313H16.991c-5.016 0-9.797 2.219-13.016 6.063s-4.594 8.938-3.719 13.859l6.969 64.5c1.172 10.766 10.234 18.953 21.078 18.969l47.719.109v-14.984l-47.672-.109c-3.203-.016-5.875-2.406-6.219-5.594l-7.125-65.484.453-1.641 1.531-.688H89.96c5.375 0 10.313-2.875 13.016-7.531l36.938-64.297c1.109-1.953 3.188-3.141 5.422-3.141H311.57c1.891 0 3.75.891 4.922 2.391l45.875 58.688c6.938 8.813 17.328 13.891 28.547 13.891h104.11l1.531.688.516.672.172-.297-17.625 68.688c-.672 2.766-3.188 4.703-6.063 4.703l-62.172-.125V324.5l62.141.141c9.734 0 18.203-6.563 20.625-15.984l17.641-68.734c1.219-4.922-.156-9.953-3.374-13.75Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="10"
          />
          <path
            d="m177.209 323.891 133.016.39v-14.984l-133.016-.375v14.969Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="10"
          />
        </svg>
      );
    case "chair":
      return (
        <svg viewBox="0 0 512 512" fill="none" aria-hidden="true">
          <path
            d="M404.6 159.7c-5.6-1.3-11.2 2.1-12.5 7.7l-26.9 113.5V120.2C365.2 60 316.2 11 256 11s-109.2 49-109.2 109.2V281l-26.9-113.5c-1.3-5.6-7-9.1-12.5-7.7-5.6 1.3-9.1 6.9-7.7 12.5l37.5 157.9v.3c1.1 4.6 5.2 8 10.1 8h98.2v98.2h-82.8c-5.8 0-10.4 4.7-10.4 10.4v43.4c0 5.8 4.7 10.4 10.4 10.4s10.4-4.7 10.4-10.4v-33h165.6v33c0 5.8 4.7 10.4 10.4 10.4 5.8 0 10.4-4.7 10.4-10.4v-43.4c0-5.8-4.7-10.4-10.4-10.4h-82.8v-98.2h98.2c4.9 0 9-3.4 10.1-8v-.3l37.5-157.9c1.6-5.5-1.9-11.1-7.5-12.5ZM167.7 120.2c0-48.7 39.6-88.3 88.3-88.3s88.3 39.6 88.3 88.3v143.5c-6.6-4.1-25.6-19.9-88.3-19.9-61.4 0-79.4 15.2-88.3 19.9V120.2Zm185.9 197.4h-97.6-97.6c3.4-39.5 45.9-53 78-53h39.3c32 .1 74.5 13.6 77.9 53Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="10"
          />
        </svg>
      );
    case "paw":
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <ellipse cx="16" cy="20" rx="5.2" ry="4.2" fill="currentColor" />
          <circle cx="10.5" cy="13" r="2.2" fill="currentColor" />
          <circle cx="15" cy="10.8" r="2.2" fill="currentColor" />
          <circle cx="20" cy="10.8" r="2.2" fill="currentColor" />
          <circle cx="24" cy="13.5" r="2.2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="4" fill="currentColor" />
        </svg>
      );
  }
}

export function InfoBar({ items }: InfoBarProps) {
  return (
    <section className="info-bar" aria-label="Quick event information">
      <div className="container info-grid">
        {items.map((item) => (
          <div className="info-item" key={item.label}>
            <div className="info-icon-wrap" aria-hidden="true">
              <div className={`info-icon icon-${item.icon ?? "spark"}`}>
                <InfoIcon icon={item.icon} />
              </div>
            </div>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

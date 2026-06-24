import { site, homeContactLinks } from "@data/site";

export function HomeBottomInfo() {
  return (
    <section className="home-bottom-info">
      <div className="home-details">
        <p className="home-details__line">
          <span className="home-details__label">current condition:</span> {site.homeStatus}
        </p>
        <p className="home-details__line">
          <span className="home-details__label">my location:</span> {site.homeLocation}
        </p>
        <p className="home-details__line">
          <span className="home-details__label">my contact:</span>{" "}
          {homeContactLinks.map((item, index) => (
            <span key={item.label}>
              {index > 0 ? " · " : null}
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "email" ? undefined : "_blank"}
                  rel={item.label === "email" ? undefined : "noreferrer"}
                  className="home-details__link"
                  {...(item.label === "email"
                    ? { title: `email ${site.contact.email}` }
                    : {})}
                >
                  {item.label}
                </a>
              ) : (
                <span className="home-details__nolink">{item.label}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="bg-hero-gradient py-24">
      <div className="container flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.42em] text-primary">
          404
        </span>
        <h1 className="mt-6 text-3xl font-bold md:text-[40px]">Page not found</h1>
        <p className="mt-4 max-w-xl text-base text-foreground/70">
          The page you’re looking for doesn’t exist or may have been moved. Let’s bring you back to the SAT journey.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-floating transition hover:-translate-y-0.5"
        >
          Return to homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

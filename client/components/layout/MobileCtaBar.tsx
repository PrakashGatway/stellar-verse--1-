const MobileCtaBar = ({ visiable }) => {

  return (
    <div className="fixed inset-x-0 bottom-0 z-[40] border-t border-border/80 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-5 py-4 text-center">
        <span className="text-xs font-semibold uppercase text-foreground/60">
          Thousands of aspirants trust Gateway Abroad
        </span>
        <a
          onClick={() => visiable(true)}
          className="flex w-full items-center justify-center cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-105"
        >
          Book Free Consultation
        </a>
      </div>
    </div>
  );
};

export default MobileCtaBar;

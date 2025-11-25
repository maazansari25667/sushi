const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-base md:text-lg font-sans font-light text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

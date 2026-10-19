export const Title = ({
  name,
  description,
}: {
  name: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-semibold">{name}</h1>
      <p className="text-muted-foreground/70">{description}</p>
    </div>
  );
};

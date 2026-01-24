const interests = [
  {
    name: "Artificial Intelligence",
    content: `Learning about the usage of AI in the real world and how we can use it to make our lives easier. Also, I'm interested in the ethical implications of AI.`,
  },
  {
    name: "Web Development",
    content: `Building performant full-stack web applications using modern web technologies like React, Next.js, PostgreSQL, and Tailwind CSS.`,
  },
  {
    name: "Cloud Computing",
    content: `Diving into cloud infrastructure with AWS to understand how modern applications are deployed, scaled, and secured in real-world environments.`,
  },
];

export default function Interest() {
  return (
    <div>
      {interests.map((interest, index) => (
        <div
          className="flex flex-col gap-2 py-5 border-b-2 border-dashed"
          key={interest.name}
        >
          <div className="flex items-center gap-2">
          <h2 className="text-2xl text-muted-foreground font-mono">
            {index + 1}.
          </h2>
          <h2 className="text-2xl">{interest.name}</h2>
          </div>
          {/* <div className="w-full h-50 overflow-hidden rounded-lg">
            <img className="" src={interest.image} alt={interest.name} />
          </div> */}
          <p className="text-muted-foreground text-sm">{interest.content}</p>
        </div>
      ))}
    </div>
  );
}

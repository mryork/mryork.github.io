export default function Experience({
  employer,
  timeframe,
  location,
  position,
  bullets,
  skills,
}) {
  function getSkillColor(skill) {
    switch (skill.type) {
      case "technical":
        return "bg-pink-800 hover:bg-pink-900";
      case "business":
        return "bg-yellow-600 hover:bg-yellow-700";
      case "people":
        return "bg-blue-800 hover:bg-blue-900";
    }
  }
  return (
    <div className="flex flex-row flex-wrap gap-4 md:gap-0">
      <div className="w-full md:w-1/4">
        <h4 className="text-xl leading-8">{employer}</h4>
        <div className="flex flex-col leading-5">
          <span>{timeframe}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="w-full md:w-3/4">
        <h5 className="text-lg font-bold mb-1">{position}</h5>
        <ul className="list-disc ml-6 break-normal mb-4">
          {bullets.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <div className="flex flex-row flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              className={`rounded-3xl ${getSkillColor(
                skill
              )} cursor-default px-3 py-1`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

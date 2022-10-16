const Experience = () => {
  const dataExp = [
    {
      title: "Years of Exeprience",
      numb: "2+",
      id: 1,
    },
    {
      title: "Complete Project",
      numb: "10+",
      id: 2,
    },
    {
      title: "Client",
      numb: "3+",
      id: 3,
    },
  ];

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between pt-20">
      {dataExp.map((card) => (
        <div key={card.id} className="text-center">
          <h3 className="text-[24px] text-[#868490] font-medium">
            {card.title}
          </h3>
          <p className="text-[72px] font-semibold text-white">{card.numb}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;

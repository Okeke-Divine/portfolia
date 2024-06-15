const SkillSkeleton = () => {
  return (
    <>
      <div className="skeleton w-full h-10 rounded-md mb-1"></div>
      {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <>
          <div
            key={index}
            className="skeleton w-full h-10 rounded-md mb-1"
          ></div>
        </>
      ))}
    </>
  );
};

export default SkillSkeleton;

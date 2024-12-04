const Section = ({ className, id, customPaddings, children, bg }) => {
  return (
    <div
      id={id}
      className={`
      relative w-full 
      ${customPaddings || `py-10 lg:py-8 xl:py-10 px-2`} 
      ${className || ""}
      `}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Section;

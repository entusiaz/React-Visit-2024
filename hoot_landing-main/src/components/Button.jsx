const Button = ({ className, href, onClick, children, px, brown }) => {
  const classes = `button relative justify-center items-center h-11 transition-colors hover:text-n-2 ${
    className || ""
  }`;

  const buttonClasses = `rounded-2xl py-3 normal-case border border-[#86633A] text-[#86633A]  ${
    px || "px-7"
  }
  ${
    brown
      ? "bg-[#86633A] border-none text-white"
      : "border border-[#86633A] text-[#86633A]"
  }
  `;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <div className={buttonClasses} brown={brown}>
        <span className={spanClasses}>{children}</span>
      </div>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <div className={buttonClasses} brown={brown}>
        <span className={spanClasses}>{children}</span>
      </div>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;

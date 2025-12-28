export default function AuthImage() {
  return (
    <picture className="w-1/2 h-full">
      <div className="bg-blue-700/10 rounded-4xl h-full flex items-center justify-center">
        <img
          src="/Signup-desktop.svg"
          className="w-3/5 hidden md:block"
          alt=""
        />
        <span className="py-5">
          <img
            src="/Signup-mobile.svg"
            className="m-auto w-3/5 md:hidden"
            alt=""
          />
        </span>
      </div>
    </picture>
  );
}

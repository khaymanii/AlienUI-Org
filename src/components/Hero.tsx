import Button from "./Button";

function Hero() {
  return (
    <div className="bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold lg:text-5xl text-3xl text-center lg:w-[700px]">
            Developer-First UI Tools for React & React Native
          </h1>
          <p className="mt-8 lg:text-2xl text-center lg:w-[900px]">
            Build beautiful, responsive apps faster with AlienUI libraries,
            powerful VS Code UI extension, and customizable svg icon packs — all
            in one ecosystem.
          </p>
          <div className="mt-8 flex lg:flex-row md:flex-row flex-col justify-center items-center w-full gap-4">
            <a href="https://github.com/AlienUI-Org">
              <Button label="Explore tools" />
            </a>
            <a href="https://github.com/sponsors/AlienUI-Org">
              <Button type="outline" label="Sponsor Us" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

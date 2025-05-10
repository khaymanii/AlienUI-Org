import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="mb-16">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-4">
          We are the creators, maintainers, and contributors of some modern
          projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:w-96 w-full h-80 border border-gray-200 rounded-md p-6">
          <a href="https://alienui.vercel.app">
            <div className="flex items-center justify-center">
              <img src="./aui.png" className="w-60" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-2xl">AlienUI</h1>
                <p className="text-gray-500 text-lg mt-1">
                  UI component library built on Nativewind CSS for React Native.
                </p>
              </div>

              <a href="https://github.com/AlienUI-Org/AlienUI">
                <FaGithub className="lg:text-4xl text-2xl" />
              </a>
            </div>
          </a>
        </div>{" "}
        <div className="lg:w-96 w-full h-80 border border-gray-200 rounded-md p-6">
          <a href="https://alienui-react.vercel.app">
            <div className="flex items-center justify-center">
              <img src="./auir.png" className="w-60" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-2xl">AlienUI React</h1>
                <p className="text-gray-500 text-lg mt-1">
                  UI component library built on Tailwind CSS for React.
                </p>
              </div>

              <a href="https://github.com/AlienUI-Org/AlienUI-React">
                <FaGithub className="lg:text-4xl text-2xl" />
              </a>
            </div>
          </a>
        </div>
        <div className="lg:w-96 w-full h-80 border border-gray-200 rounded-md p-6">
          <a href="https://marketplace.visualstudio.com/items?itemName=AlienUI.alienx">
            <div className="flex items-center justify-center">
              <img src="./alienx.png" className="w-[274px]" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-2xl">AlienX</h1>
                <p className="text-gray-500 text-lg mt-1">
                  Powerful VS Code UI Snippet extension.
                </p>
              </div>

              <a href="https://github.com/AlienUI-Org/AlienX">
                <FaGithub className="lg:text-4xl text-2xl" />
              </a>
            </div>
          </a>
        </div>{" "}
        <div className="lg:w-96 w-full h-80 border border-gray-200 rounded-md p-6">
          <a href="https://alien-icons.vercel.app">
            <div className="flex items-center justify-center">
              <img src="./aui.png" className="w-60" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-bold text-2xl">Alienicons</h1>
                <p className="text-gray-500 text-lg mt-1">
                  Customizable SVG icon pack.
                </p>
              </div>

              <a href="https://github.com/AlienUI-Org/Alien-Icons">
                <FaGithub className="lg:text-4xl text-2xl" />
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

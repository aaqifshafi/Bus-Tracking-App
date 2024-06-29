import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="items-center">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-center md:text-left">
            Welcome{" "}
            <Image
              className="inline-block"
              src="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif" // Replace with your own GIF
              alt="Bus GIF"
              width={50}
              height={50}
            />
            to
          </h1>
          <h1 className="text-4xl mb-4 font-bold text-center md:text-left">
            Bus Tracking App
          </h1>
          <p className="text-xl text-muted-foreground">
            Track buses in real-time and get the latest updates on bus routes
            and schedules.
          </p>

          <p className="mt-6">
            Stay tuned for more updates and features as we continuously work on
            enhancing the platform.
          </p>
          {/* Social Link - GitHub */}
          <div className="flex items-center justify-center md:justify-start">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              @git repo/
            </code>

            <a
              href="https://github.com/aaqifshafi/Bus-Tracking-App"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-4"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.169 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.37-1.338-3.37-1.338-.455-1.156-1.113-1.465-1.113-1.465-.912-.622.069-.609.069-.609 1.006.071 1.532 1.033 1.532 1.033.892 1.528 2.34 1.087 2.912.831.091-.644.35-1.086.635-1.337-2.22-.25-4.555-1.106-4.555-4.92 0-1.087.387-1.978 1.032-2.676-.103-.251-.448-1.266.098-2.635 0 0 .837-.268 2.746 1.022A9.49 9.49 0 0112 6.818c.84.003 1.686.113 2.482.334 1.909-1.29 2.744-1.022 2.744-1.022.547 1.369.202 2.384.099 2.635.646.698 1.031 1.589 1.031 2.676 0 3.822-2.338 4.667-4.566 4.914.358.308.677.916.677 1.848 0 1.335-.012 2.414-.012 2.743 0 .267.18.579.688.481A12.014 12.014 0 0022 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 font-medium text-center text-gray-500">
      <div className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <a href="https://eidraffin.github.io/">eidraffin</a>. All rights reserved.
      </div>
      <p className="text-xs">
      </p>
    </footer>
  );
};
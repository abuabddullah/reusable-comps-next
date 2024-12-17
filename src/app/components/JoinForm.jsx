
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const JoinForm = () => {
  const [classCode, setClassCode] = useState("");
  const router = useRouter();

  const handleJoinClass = (e) => {
    e.preventDefault();
    if (classCode.trim()) {
      router.push(`/class/${classCode}`);
    } else {
      alert("Please enter a valid class code.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-6">
      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
        Video calls and meetings <br />
        <span className="text-gray-600 font-normal">for everyone</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-md text-center mb-6">
        Connect, collaborate, and celebrate from anywhere.
      </p>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleJoinClass}>
          {/* Input Field */}
          <input
            id="classCode"
            type="text"
            placeholder="Enter a code or link"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none mb-4"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            required
          />

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Join
            </button>
            <button
              type="button"
              className="w-1/2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => alert("New Meeting feature coming soon!")}
            >
              New Meeting
            </button>
          </div>
        </form>
      </div>

      {/* Learn More Link */}
      <p className="text-gray-500 text-sm mt-6">
        <a href="#" className="text-blue-600 hover:underline">
          Learn more
        </a>{" "}
        about this app.
      </p>
    </div>
  );
};

export default JoinForm;

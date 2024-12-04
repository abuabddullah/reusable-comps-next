"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import { useState } from "react";

const JoinForm = () => {
  const [classCode, setClassCode] = useState("");
  const router = useRouter(); // Initialize router

  const handleJoinClass = (e) => {
    e.preventDefault(); // Prevent page reload
    if (classCode.trim()) {
      router.push(`/class/${classCode}`); // Navigate to the dynamic route
    } else {
      alert("Please enter a valid class code.");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleJoinClass}>
        <label
          htmlFor="classCode"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >
          Class Code
        </label>

        <input
          id="classCode"
          type="text"
          placeholder="Enter Class Code"
          className="block w-full px-3 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-lg dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          required
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
        />
        <button
          type="submit"
          className="block w-1/3 px-3 py-2 mt-4 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 cursor-pointer"
        >
          Join Class
        </button>
      </form>
    </div>
  );
};

export default JoinForm;

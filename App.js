import React, { useState } from "react";

function Progress({ value }) {
  return (
    <div className=\"w-full bg-gray-200 rounded-full h-3 mb-2\">
      <div
        className=\"bg-blue-500 h-3 rounded-full\"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default function EduNavigator() {
  const [step, setStep] = useState(\"home\");

  const handleStart = () => setStep(\"questionnaire\");
  const handleSubmit = () => setStep(\"dashboard\");

  return (
    <div className=\"min-h-screen bg-gray-50 p-6 flex flex-col items-center\">
      {step === \"home\" && (
        <div className=\"text-center max-w-xl mt-20\">
          <h1 className=\"text-4xl font-bold mb-4\">EduNavigator</h1>
          <p className=\"text-lg text-gray-600 mb-6\">
            One Stop Personalized Career & Education Advisor
          </p>
          <button
            onClick={handleStart}
            className=\"bg-blue-600 text-white px-6 py-3 text-lg rounded-2xl\">
            Get Started
          </button>
        </div>
      )}

      {step === \"questionnaire\" && (
        <div className=\"bg-white shadow rounded-2xl p-6 max-w-lg w-full mt-10\">
          <h2 className=\"text-2xl font-semibold mb-4\">Quick Questionnaire</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className=\"space-y-4\">
            <div>
              <label className=\"block font-medium mb-1\">What subject excites you the most?</label>
              <select className=\"w-full border rounded p-2\">
                <option>Artificial Intelligence</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Business & Management</option>
              </select>
            </div>
            <div>
              <label className=\"block font-medium mb-1\">Rate your current programming skills:</label>
              <select className=\"w-full border rounded p-2\">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <button type=\"submit\" className=\"bg-blue-600 text-white px-6 py-2 rounded-2xl\">See Dashboard</button>
          </form>
        </div>
      )}

      {step === \"dashboard\" && (
        <div className=\"grid md:grid-cols-2 gap-6 w-full max-w-5xl mt-10\">
          <div className=\"bg-white shadow rounded-2xl p-4\">
            <h3 className=\"font-semibold text-xl mb-2\">📘 Recommended Courses</h3>
            <ul className=\"list-disc list-inside text-gray-700\">
              <li>Python for Beginners</li>
              <li>Intro to AI & ML</li>
              <li>Web Development Basics</li>
            </ul>
          </div>

          <div className=\"bg-white shadow rounded-2xl p-4\">
            <h3 className=\"font-semibold text-xl mb-2\">💡 Project Ideas</h3>
            <ul className=\"list-disc list-inside text-gray-700\">
              <li>AI Chatbot</li>
              <li>Portfolio Website</li>
              <li>Data Visualization App</li>
            </ul>
          </div>

          <div className=\"bg-white shadow rounded-2xl p-4\">
            <h3 className=\"font-semibold text-xl mb-2\">🎯 Internships & Competitions</h3>
            <ul className=\"list-disc list-inside text-gray-700\">
              <li>Kaggle Data Challenge</li>
              <li>Google Summer of Code</li>
              <li>UI/UX Hackathon</li>
            </ul>
          </div>

          <div className=\"bg-white shadow rounded-2xl p-4\">
            <h3 className=\"font-semibold text-xl mb-2\">📊 Skill Progress Tracker</h3>
            <p className=\"mb-1\">Coding</p>
            <Progress value={70} />
            <p className=\"mb-1\">Design</p>
            <Progress value={40} />
            <p className=\"mb-1\">AI/ML</p>
            <Progress value={50} />
          </div>

          <div className=\"bg-white shadow rounded-2xl p-4 md:col-span-2\">
            <h3 className=\"font-semibold text-xl mb-2\">⚠️ Feedback & Alerts</h3>
            <p className=\"text-gray-700\">You need more practice in Math. Suggested Course: \"Math for AI\"</p>
          </div>
        </div>
      )}
    </div>
  );
}

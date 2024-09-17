// src/components/SubscribeForm.tsx

import React, { useState, FormEvent, ChangeEvent } from "react";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://159.89.233.75.nip.io/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }), /*  */
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Great success 🦋");
        setEmail("");
        setName("");
      } else {
        setMessage(data.error || "Subscription failed. Sorry! Feel free to contact us if it persists :)");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("We've tripped on our laces. You can try again but feel free to reach out if the error keeps happening.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="text-neutral-800 py-4 mt-44 relative bg-gradient-to-b from-white/0 to-white/100 overflow-hidden flex justify-center items-center flex-col w-full px-4 sm:px-6">
      <div className="lg:w-1/3 md:w-1/2 lg:m-2 m-0 p-3 rounded-lg bg-white bg-opacity-0">
        <div className="relative z-10 mb-4">
          <p className="text-gray-900 text-base sm:text-lg mt-1">
            Thanks for checking out Marie&apos;s website. Sign up for free to hear updates about The Realm of Unity&#39;s book launch!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative rounded-lg flex-grow">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="relative bg-white ring-0 outline-none border border-lavender-300 text-lavender-800 placeholder-lavender-400 text-sm rounded-lg focus:ring-lavender-500 focus:border-lavender-500 block w-full p-2.5 mb-2"
              placeholder="Fist Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="relative bg-white ring-0 outline-none border border-lavender-300 text-lavender-800 placeholder-lavender-400 text-sm rounded-lg focus:ring-lavender-500 focus:border-lavender-500 block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-lavender-600 text-white py-2 px-4 rounded-lg hover:bg-lavender-500 transition duration-300 text-sm sm:text-base w-full"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        {message && <p className="mt-2 text-lavender-600">{message}</p>}
        <div className="absolute w-32 h-20 right-2 top-0 bg-lavender-200 -z-10 rounded-full blur-xl opacity-50"></div>
        <div className="absolute w-24 h-24 -right-6 -top-12 bg-lavender-300 -z-10 rounded-full blur-xl opacity-50"></div>
      </div>
    </form>
  );
};

export default SubscribeForm;
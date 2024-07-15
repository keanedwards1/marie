import React, { useState, FormEvent, ChangeEvent } from "react";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subscribe`, { // Use environment variable
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscription successful!");
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-neutral-800 py-4 relative overflow-hidden flex flex-col justify-around w-full max-w-md border border-lavender-300 rounded-lg bg-lavender-50 p-3 px-4 sm:px-6"
    >
      <div className="relative z-10 mb-4">
        <p className="text-lavender-600 font-serif text-xs sm:text-base mt-1">
          Sign up for our newsletter and be the first to know about new stories!
        </p>
      </div>
      <div className="flex flex-col sm:flex-col lg:flex-col xl:flex-row gap-2">
        <div className="relative rounded-lg flex-grow">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="relative bg-white ring-0 outline-none border border-lavender-300 text-lavender-800 placeholder-lavender-400 text-sm rounded-lg focus:ring-lavender-500 focus:border-lavender-500 block w-full p-2.5"
            placeholder="Your email..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-lavender-600 text-white py-2 px-4 rounded-lg hover:bg-lavender-500 transition duration-300 text-sm sm:text-base w-full xl:w-auto"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {message && <p className="mt-2 text-lavender-600">{message}</p>}
      <div className="absolute w-32 h-20 right-2 top-0 bg-lavender-200 -z-10 rounded-full blur-xl opacity-50"></div>
      <div className="absolute w-24 h-24 -right-6 -top-12 bg-lavender-300 -z-10 rounded-full blur-xl opacity-50"></div>
    </form>
  );
};

export default SubscribeForm;

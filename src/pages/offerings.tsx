import React from "react";
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import TestimonialGrid from "@/components/TestimonialGrid";
import Footer from "@/components/RespFooter";
import ComicButton from "@/components/ComicButton";
import router from "next/router";

const Offerings: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Head
        title="Luminoles | Characters"
        description='Explore the various characters featured in the book "The Realm of Unity".'
      />
      <Nav />
      <div>
        <div
          id="review-form"
          className="lg:mr-32 lg:ml-32 md:ml-10 md:mr-10 mr-6 ml-6 mt-16 rounded shadow flex flex-col justify-between p-3 review-form-bg"
        >
          <form className="review-form-text" action="" method="post">
            <fieldset className="border-4 border-dotted review-form-border p-5">
              <legend className="px-2 italic -mx-2 review-form-legend">
                Read the book? Feel free to share your thoughts 💫
              </legend>
              <label className="text-xs font-bold" htmlFor="first-name">
                First Name or First Initial
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                type="text"
                name="first-name"
                id="first-name"
              />
              <label
                className="text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                type="text"
                name="last-name"
                id="last-name"
                required
              />
              <label className="text-xs font-bold" htmlFor="job-title">
                Job Title or Passion
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                type="text"
                name="job-title"
                id="job-title"
              />
              <label
                className="text-xs font-bold after:content-['*'] after:text-red-400"
                htmlFor="review"
              >
                Review
              </label>
              <textarea
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                name="review"
                id="review"
                rows={4}
                required
              ></textarea>
              <button className="w-full rounded p-2 text-center font-bold transition-all review-form-button hover:review-form-button-hover">
                Submit Review
              </button>
            </fieldset>
          </form>
        </div>

        <TestimonialGrid />
      </div>

      <div className="mt-20 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="← Download Stories 📖"
            onClick={() => router.push("/short-stories")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton label="🏡 Go Home ↩" onClick={() => router.push("/")} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offerings;

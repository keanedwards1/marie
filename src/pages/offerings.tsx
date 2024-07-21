import React, { useState } from "react";
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import TestimonialGrid from "@/components/TestimonialGrid";
import Footer from "@/components/RespFooter";
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";

const Offerings: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    review: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await fetch('https://159.89.233.75.nip.io/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Review submitted successfully!');
        setFormData({ firstName: '', lastName: '', jobTitle: '', review: '' });
      } else {
        setErrorMessage(Array.isArray(data.errors) ? data.errors.join(' ') : data.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

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
          <form className="review-form-text" onSubmit={handleSubmit}>
            <fieldset className="border-4 border-dotted review-form-border p-5">
              <legend className="px-2 italic text-lg -mx-2 review-form-legend">
                Read the book? Feel free to share your thoughts 💫
              </legend>
              <label className="text-sm font-bold" htmlFor="first-name">
                First Name or First Initial
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                type="text"
                name="firstName"
                id="first-name"
                placeholder="Dr."
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <label
                className="text-sm font-bold after:content-['*'] after:text-red-400"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Suess"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <label className="text-sm font-bold" htmlFor="job-title">
                Job Title or Passion
              </label>
              <input
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                type="text"
                name="jobTitle"
                id="job-title"
                placeholder="Basketweaver"
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
              <label
                className="text-sm font-bold after:content-['*'] after:text-red-400"
                htmlFor="review"
              >
                Your Review ✍️
              </label>
              <textarea
                className="w-full p-2 mb-2 mt-1 outline-none ring-none rounded review-form-input focus:review-form-input-focus"
                name="review"
                id="review"
                rows={4}
                required
                value={formData.review}
                onChange={handleInputChange}
              ></textarea>
              {errorMessage && <div className="text-red-500 mb-2">{errorMessage}</div>}
              {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}
              <button type="submit" className="w-full rounded p-2 text-center font-bold transition-all review-form-button hover:review-form-button-hover">
                Submit Review →
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
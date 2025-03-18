import React, { useState, useEffect } from "react";
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import Footer from "@/components/RespFooter";
import ComicButton from "@/components/ComicButton";
import { useRouter } from "next/router";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import Cube from "@/components/CubeComponent";

// ----- Types -----
type Review = {
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  review: string;
  status: string;
  created_at: number;
};

interface Location {
  id: number;
  src: string;
  alt: string;
  description: string;
  alt2?: string;
}

// ----- Static Locations Array -----
const locations: Location[] = [
  {
    id: 1,
    src: "/images/azure-village.jpg",
    alt: "Azure Village",
    description:
      "The beautiful homes of the outland village of Elysia are perfectly designed to meet the needs of the Luminoles. Crescent Healing Center, nestled to one side, is a sanctuary for rejuvenation.",
  },
  {
    id: 2,
    src: "/images/purple-starfruit.jpg",
    alt: "Purple Starfruit",
    description:
      "Creamy as custard and succulent as a mango—Luminoles utilize the power of thought and desire to generate new varieties of trees, flowers and fruits.",
  },
  {
    id: 3,
    src: "/images/dancing-crowd.jpg",
    alt: "The Heart of Azure Village",
    description:
      "The heart of the village is an open space for gathering, sharing and grand celebrations.",
  },
  {
    id: 4,
    src: "/images/green-haired-girl.jpg",
    alt: "Shapeshifting",
    description:
      "Hidden powers arise in Unity—telepathy, shapeshifting, healing, telekinesis, floating, teleportation and instant manifestation.",
  },
  {
    id: 5,
    src: "/images/central-hub-of-elysia.jpg",
    alt: "Central Hub of Elysia",
    description:
      "A stunning polycenter where spiraling towers, fountains, bridges, and archways blend seamlessly with nature.",
  },
  {
    id: 6,
    src: "/images/the-zephyr.jpg",
    alt: "The Zephyr",
    description:
      "At the heart of the polycenters, a towering crystal pyramid connects to the grid, providing free, limitless energy.",
  },
  {
    id: 7,
    src: "/images/radiant-dome-spider-girl.jpg",
    alt: "Nature Protector",
    description:
      "There are no jobs in Unity, only contributions—Healer, Creative, Nature Protector, Builder, Educator, Leader, and Explorer. The desire to share unique gifts emerges effortlessly.",
  },
  {
    id: 8,
    src: "/images/harmony-healing-center-greenhouse.jpg",
    alt: "Harmony Healing Center",
    alt2: "Harmony",
    description:
      "In the Central Hub of Elysia, a vast Healing Center features a medicinal herb greenhouse, a crystal chamber, and numerous healing beds called Cocoons, all providing deep restoration.",
  },
  {
    id: 9,
    src: "/images/harmony-crystal-room.jpg",
    alt: "Harmony Crystal Room",
    description:
      "Healers use crystals, herbal medicine, sound, light, and vibration to aid new Luminoles.",
  },
  {
    id: 10,
    src: "/images/radiant-dome.jpg",
    alt: "Radiant Domes",
    description:
      "All manufacturing is done in harmony with nature. Akashi, the AI system of Unity, disperses goods to Luminoles, as needed, from the Central Distribution Center.",
  },
  {
    id: 11,
    src: "/images/makai-ola-island.jpg",
    alt: "Makai Ola Island",
    description:
      "Luminoles design new polycenters, each unique and perfectly harmonized with the inhabitants.",
  },
  {
    id: 12,
    src: "/images/shumbala-whisper.jpg",
    alt: "Shumba-La",
    description:
      "Traveling throughout Unity is easy and seamless with The Whisper, the highly efficient transportation system of Unity.",
  },
];

// ----- Helper Components -----

// ReviewCard renders a single review card with a cycling set of styles.
const ReviewCard: React.FC<{ review: Review; index: number }> = ({
  review,
  index,
}) => {
  const cardStyles = [
    {
      bgClass: "review-card1",
      textClass: "text-black",
      subTextClass: "text-gray-600",
    },
    {
      bgClass: "review-card2",
      textClass: "text-white",
      subTextClass: "text-gray-200",
    },
    {
      bgClass: "review-card3",
      textClass: "text-black",
      subTextClass: "text-gray-600",
    },
    {
      bgClass: "review-card4",
      textClass: "text-black",
      subTextClass: "text-gray-600",
    },
    {
      bgClass: "review-card5",
      textClass: "text-white",
      subTextClass: "text-gray-200",
    },
  ];
  const { bgClass, textClass, subTextClass } =
    cardStyles[index % cardStyles.length];

  return (
    <div
      className={`${bgClass} ${textClass} transition-colors duration-300 p-8 rounded-lg shadow-lg`}
    >
      <div className="flex items-center mb-6">
        <Image
          className="w-10 h-10 rounded-full mr-4"
          src="/images/profile.png"
          alt={`${review.first_name} ${review.last_name}`}
          width={100}
          height={100}
        />
        <div>
          <p className="font-semibold">{`${review.first_name} ${review.last_name}`}</p>
          <p className={subTextClass}>{review.job_title}</p>
        </div>
      </div>
      <p className={subTextClass}>{review.review}</p>
    </div>
  );
};

// LandscapeCard renders a single landscape card without any header.
const LandscapeCard: React.FC<{ location: Location }> = ({ location }) => {
  return (
    <div className="location-card">
      <div className="card-inner">
        <div className="card-front">
          <div className="location-image-container relative h-64">
            <Image
              src={location.src}
              alt={location.alt}
              fill
              style={{ objectFit: "cover" }}
              className="location-image"
            />
            <div className="overlay"></div>
          </div>
          <div className="location-info p-4">
            <h3 className="location-title text-xl font-bold">{location.alt}</h3>
          </div>
        </div>

        <div className="card-back p-4">
          <h3 className="location-title back-title text-xl font-bold">
            {location.alt2 ? location.alt2 : location.alt}
          </h3>
          <p className="location-description">{location.description}</p>
        </div>
      </div>
    </div>
  );
};

// ----- Main Component -----
const Offerings: React.FC = () => {
  const router = useRouter();

  // Review form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    review: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Reviews fetched from API
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://159.89.233.75.nip.io/api/reviews"
        );
        if (response.status === 429) {
          console.log("Too many submissions. Try again in a little while.");
          return;
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await fetch(
        "https://159.89.233.75.nip.io/api/submit-review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Review submitted successfully!");
        setFormData({ firstName: "", lastName: "", jobTitle: "", review: "" });
      } else {
        setErrorMessage(
          Array.isArray(data.errors)
            ? data.errors.join(" ")
            : data.error || "An error occurred"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <Head
        title="Luminoles | Characters"
        description='Explore the various characters featured in the book "The Realm of Unity".'
      />
      <Nav />

      {/* --- Alternating Rows Section --- */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        {reviews
          .slice()
          .reverse()
          .map((review, index) => (
            <div
              key={review.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch"
            >
              {index % 2 === 0 ? (
                <>
                  <ReviewCard review={review} index={index} />
                  <LandscapeCard
                    location={locations[index % locations.length]}
                  />
                </>
              ) : (
                <>
                  <LandscapeCard
                    location={locations[index % locations.length]}
                  />
                  <ReviewCard review={review} index={index} />
                </>
              )}
            </div>
          ))}
      </section>

      <div className="w-full h-screenw-full h-96 mb-20 -mt-16 pt-10 flex items-center justify-center">
        <Cube />
      </div>

      {/* --- Review Form --- */}
      <section
        id="review-form"
        className="lg:mr-32 lg:ml-32 md:ml-10 md:mr-10 mr-6 ml-6 mt-16 rounded shadow flex flex-col justify-between p-3 review-form-bg"
      >
        <form className="review-form-text" onSubmit={handleSubmit}>
          <fieldset className="border-4 border-dotted review-form-border p-5">
            <legend className="px-2 italic text-lg -mx-2 review-form-legend">
              Read the book? Feel free to share your thoughts ☁️
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
            {errorMessage && (
              <div className="text-red-500 mb-2">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-500 mb-2">{successMessage}</div>
            )}
            <button
              type="submit"
              className="w-full rounded p-2 text-center font-bold transition-all review-form-button hover:review-form-button-hover"
            >
              Submit Review →
            </button>
          </fieldset>
        </form>
      </section>

      {/* --- Navigation Buttons --- */}
      <section className="mt-16 mb-16 flex flex-col lg:flex-row w-full gap-4 items-center justify-center">
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton
            label="← Download Stories 📖"
            onClick={() => router.push("/short-stories")}
          />
        </div>
        <div className="lg:w-3/12 md:w-5/12 w-9/12">
          <ComicButton label="🏡 Go Home ↩" onClick={() => router.push("/")} />
        </div>
      </section>

      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Offerings;

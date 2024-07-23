// /src/pages/short-stories/[id].tsx

import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "../../components/Nav";
import Footer from "../../components/RespFooter";
import ComicButton from "@/components/ComicButton";
import { shortStories } from "../../data/shortStories";
import ReactMarkdown from "react-markdown";

interface Story {
  id: number;
  title: string;
  warning?: string;
  description: string;
  pdfFilename: string;
  fullStory: string;
}

export default function ShortStoryPage({
  story,
  prevStory,
  nextStory,
}: {
  story: Story;
  prevStory?: Story;
  nextStory?: Story;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title>{story.title} | Short Story</title>
        <meta name="description" content={story.description} />
      </Head>
      <Nav />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-slate-800 font-serif font-bold">
          {story.title}
        </h1>
        {story.warning && (
          <p className="mt-2 text-rose-800 text-sm font-extralight">
            {story.warning}
          </p>
        )}
        <p className="mt-4 text-lg text-slate-700 font-serif">
          {story.description}
        </p>

        <div className="mt-8 prose flex flex-col justify-center items-center prose-lg">
          <ReactMarkdown>{story.fullStory}</ReactMarkdown>
        </div>

        <div className="mt-20 lg:ml-32 lg:mr-32">
          <div className="flex lg:flex-row flex-col gap-5 justify-evenly items-center mb-4">
            {prevStory && (
              <ComicButton
                label={`← Previous: ${prevStory.title}`}
                onClick={() => router.push(`/short-stories/${prevStory.id}`)}
              />
            )}
            {nextStory && nextStory.fullStory && (
              <ComicButton
                label={`Next: ${nextStory.title} →`}
                onClick={() => router.push(`/short-stories/${nextStory.id}`)}
              />
            )}
          </div>
            <ComicButton
              label="← Back to Short Stories"
              onClick={() => router.push("/short-stories")}
            />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = shortStories.map((story) => ({
    params: { id: story.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const storyIndex = shortStories.findIndex((s) => s.id === Number(params.id));
  const story = shortStories[storyIndex];

  if (!story) {
    return { notFound: true };
  }

  const prevStory = storyIndex > 0 ? shortStories[storyIndex - 1] : null;
  const nextStory =
    storyIndex < shortStories.length - 1 ? shortStories[storyIndex + 1] : null;

  return {
    props: {
      story,
      prevStory: prevStory || null,
      nextStory: nextStory || null,
    },
  };
}

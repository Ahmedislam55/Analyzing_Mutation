import { Suspense } from "react";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import classes from "./page.module.css";
import { FaSpinner } from "react-icons/fa";

// Function to fetch the latest posts asynchronously
async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

// Home component rendering the latest posts with a loading fallback
export default async function Home() {
  return (
    <>
      {/* Header section */}
      <div className={classes.head}>
        <h1>Welcome back!</h1>
        <p>Here's what you might've missed.</p>
      </div>
      
      {/* Section for loading latest posts with suspense fallback */}
      <section>
        <Suspense
          fallback={
            <div className={classes.loadingContainer}>
              <FaSpinner className={classes.spinner} />
              <p className={classes.loadingText}>Fetching data...</p>
            </div>
          }
        >
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}

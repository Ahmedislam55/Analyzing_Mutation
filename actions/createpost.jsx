"use server";
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  // Extracting form data fields
  const title = formData.get("title"); 
  const content = formData.get("content");
  const image = formData.get("image");
  
  let errors = [];

  // Validating required fields
  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }
  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }
  if (!image || image.size === 0) {
    errors.push("Image is required");
  }
  
  // If there are validation errors, return them
  if (errors.length > 0) {
    return { errors };
  }
  
  let imageUrl;
  try {
    // Upload the image to Cloudinary
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }
  
  // Store the post in the database
  await storePost({
    imageUrl: imageUrl,
    title, // Equivalent to title: title
    content,
    userId: 1, // Assuming a static user ID, should be dynamic in a real application
  });
  
  // Revalidate the layout to update UI
  revalidatePath("/", "layout");
  
  // Redirect to the feed page after post creation
  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  // Toggle the like status for a given post
  await updatePostLikeStatus(postId, 2);
  
  // Revalidate the feed cache to reflect changes
  revalidateTag("feed");
}

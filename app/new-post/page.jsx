import { createPost } from "@/actions/createpost";
import PostForm from "@/components/post-form";
function NewPostPage() {
  return (
    <>
    <PostForm action={createPost}/>
    </>
  );
}
export default NewPostPage;

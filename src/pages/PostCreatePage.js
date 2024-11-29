import FilterInputGroup from "../components/postCreate/FilterInputGroup";
import PostCreateTopbar from "../components/postCreate/PostCreateTopbar";
function PostCreatePage() {
  return (
    <div className="p-3">
      <PostCreateTopbar />
      <FilterInputGroup />
    </div>
  );
}

export default PostCreatePage;

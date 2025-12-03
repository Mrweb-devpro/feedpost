import { feedbackPosts } from "@/fakeData";
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function DashboardMainContent({
  setSortBy,
  sortBy,
  feedbackType,
}: {
  setSortBy: Dispatch<SetStateAction<string>>;
  sortBy: string;
  feedbackType: string;
}) {
  const FeedbackCard = ({ post }: { post: (typeof feedbackPosts)[number] }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 mb-3">
      <div className="flex">
        {/* Vote section */}
        <div className="flex flex-col items-center bg-gray-50 p-3 rounded-l-lg">
          <button className="text-gray-400 hover:text-orange-500 transition-colors">
            <ThumbsUp size={20} />
          </button>
          <span className="font-bold text-sm my-2">
            {post.upvotes - post.downvotes}
          </span>
          <button className="text-gray-400 hover:text-blue-500 transition-colors">
            <ThumbsDown size={20} />
          </button>
        </div>

        {/* Content section */}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{post.appIcon}</span>
            <span className="font-semibold text-sm">r/{post.app}</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-500 text-sm">
              Posted by u/{post.author}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-500 text-sm">{post.timestamp}</span>
            <span
              className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                post.type === "like"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {post.type === "like" ? "👍 Feature Love" : "👎 Needs Fix"}
            </span>
          </div>

          <h3 className="font-bold text-lg mb-2 text-gray-900">{post.title}</h3>
          <p className="text-gray-700 mb-3">{post.content}</p>

          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <button className="flex items-center gap-1 hover:bg-gray-100 px-3 py-1 rounded transition-colors">
              <MessageSquare size={18} />
              <span>{post.comments} comments</span>
            </button>
            <button className="flex items-center gap-1 hover:bg-gray-100 px-3 py-1 rounded transition-colors">
              <span>Share</span>
            </button>
            <button className="flex items-center gap-1 hover:bg-gray-100 px-3 py-1 rounded transition-colors">
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <main className="flex-1">
      {/* Filter Bar */}
      Main
    </main>
  );
}

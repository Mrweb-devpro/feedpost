import { feedbackPosts } from "@/fakeData";
import {
  ArrowBigDown,
  ArrowBigUp,
  MessageCircle,
  MessageSquare,
  MoreHorizontal,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import FacebookIcon from "./icons/FacebookIcon";
import Link from "next/link";
import { BiCommentDots, BiUpArrow } from "react-icons/bi";
import Image from "next/image";

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
    <main className="h-full w-full overflow-y-auto p-6">
      <section>
        <article>
          <hr className="border-t border-gray-200" />
          <div className="h-2" />

          <blockquote className="hover:bg-[#e5ebee]/60 rounded-2xl p-1 py-0.5 ">
            <div className="flex justify-between">
              <span className="flex items-center gap-5">
                <span className="flex items-center gap-2">
                  <Image
                    src="https://picsum.photos/300/300"
                    width={230}
                    height={230}
                    className="w-6 rounded-full"
                    alt=""
                  />
                  <p className="text-stone-600 text-sm font-semibold">
                    r/jane Mary
                  </p>
                </span>
                <p className="text-sm text-stone-500">2 days ago</p>
              </span>
              <button className="text-stone-500 hover:bg-blue-50/70 p-2 hover:text-blue-500">
                <MoreHorizontal />
              </button>
            </div>
            <br />
            <p className="text-stone-900 font-semibold space">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              in. Repellat, voluptatum laudantium et cum numquam est odit ullam
              repudiandae ipsam similique ducimus obcaecati, eligendi minus
              tenetur sed quibusdam nesciunt asperiores officiis voluptate
              maiores debitis. Earum provident cumque, reprehenderit sit nisi
              sunt aperiam soluta placeat unde doloremque impedit deserunt
              obcaecati autem asperiores mollitia similique veniam error,
              incidunt eius sint, aliquam modi optio id. Optio, porro ratione
              quod amet velit veritatis expedita veniam impedit blanditiis id,
              quis similique nulla incidunt reprehenderit nesciunt beatae fugiat
              dolores voluptatem. Atque quibusdam, rem ad sit debitis veritatis,
              repudiandae ex omnis fuga praesentium tenetur soluta at!
            </p>
            <br />
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-blue-500">
                <Link href="/apps/facebook" className="flex items-center">
                  <FacebookIcon size={26} />
                </Link>

                <p className="text-sm font-medium ">Facebook</p>

                <span className="text-sm text-blue-500">•</span>
              </span>

              <span className="flex gap-2 items-center text-stone-600 ">
                <span className="bg-blue-100/40 p-2 rounded-2xl flex items-center gap-1">
                  <button
                    type="button"
                    className="p-1 hover:bg-blue-200/40 rounded-2xl hover:text-blue-600"
                  >
                    <ArrowBigUp />
                  </button>
                  23k
                  <button
                    type="button"
                    className="p-1 hover:bg-blue-200/40 rounded-2xl hover:text-blue-600"
                  >
                    <ArrowBigDown />
                  </button>
                </span>
                <button
                  type="button"
                  className="bg-blue-100/40 flex items-center gap-2 justify-center border border-stone-400/20  text-stone-600 px-4 py-3 rounded-2xl "
                >
                  <MessageCircle />
                  23
                </button>
              </span>
            </div>
            <br />
          </blockquote>
          <div className="h-2" />
          <hr className="border-t border-gray-200" />
        </article>
      </section>
    </main>
  );
}

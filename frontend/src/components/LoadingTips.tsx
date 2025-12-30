import React, { useEffect, useState } from "react";

const tips = [
  "Why are WhatsApp voice notes always five minutes? Don't like it? Post it.",
  "Reels auto-play without consent—why? Don't like it? Post it.",
  "Hidden Instagram likes helping who exactly? Don't like it? Post it.",
  "Do TikTok trends decide taste now? Don't like it? Post it.",
  "Why is everything algorithm-first, people-second? Don't like it? Post it.",
  "Stories vanish in 24 hours—why exactly? Don't like it? Post it.",
  "Why do notifications chase attention nonstop? Don't like it? Post it.",
  "Read receipts on by default—why? Don't like it? Post it.",
  "Typing indicators forcing instant replies? Don't like it? Post it.",
  "Auto-playing videos burning data for what? Don't like it? Post it.",
  "Why is infinite scroll endless by design? Don't like it? Post it.",
  "Why are ads louder than content? Don't like it? Post it.",
  "Paywall for verification now normal? Don't like it? Post it.",
  "Default public comments for everyone—why? Don't like it? Post it.",
  "Why are DMs filtered silently? Don't like it? Post it.",
  "Same recommended content on repeat—why? Don't like it? Post it.",
  "Why must reels hijack timelines entirely? Don't like it? Post it.",
  "Basic privacy buried in menus—why? Don't like it? Post it.",
  "Daily streaks pushing pressure for what? Don't like it? Post it.",
  "Why are default settings never user-first? Don't like it? Post it.",
];

export default function LoadingTips() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <i className="text-base text-stone-500 text-center max-w-2xl">
      « {tips[index]} »
    </i>
  );
}

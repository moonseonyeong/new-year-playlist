"use client";
import { ShareIcon } from "./icons";

const ShareButton = () => {
  const handleShare = () => {
    navigator.share({
      title: "산타의 비밀을 아는 당신에게 | afterdinnerclub",
      text: "우리의 은퇴 산타에게 감사의 마음을 전해보세요!",
      url: window.location.origin,
    });
  };

  return <ShareIcon className="cursor-pointer" onClick={handleShare} />;
};

export default ShareButton;

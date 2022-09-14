import { isModalOpenState } from "@store/modal";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Form = () => {
  const [inputVal, setInputVal] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const { data: session } = useSession();
  const handleChange = (e: React.SyntheticEvent) =>
    setInputVal((e.target as HTMLInputElement).value);

  const uploadPost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("hello");
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        input: inputVal,
        photoUrl,
        username: session?.user?.name,
        email: session?.user?.email,
        userImg: session?.user?.image,
        createdAt: new Date().toString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({ data });
    setIsModalOpen(false);
  };
  return (
    <form className="flex flex-col relative space-y-2 text-black/80 dark:text-white/75">
      <textarea
        rows={4}
        placeholder="What do you want to talk about?"
        className="bg-transparent focus:outline-none dark:placeholder-white/75 mb-4"
        value={inputVal}
        onChange={handleChange}
      ></textarea>
      <input
        type="text"
        placeholder="Add a photo url (optional)"
        value={photoUrl}
        onChange={(e: any) => setPhotoUrl(e.target.value)}
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
      />
      <button
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-md px-3.5 py-1"
        type="submit"
        onClick={uploadPost}
        disabled={!inputVal.trim() && !photoUrl.trim()}
      >
        Post
      </button>
    </form>
  );
};

export default Form;

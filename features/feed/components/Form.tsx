import { useState } from "react";

const Form = () => {
  const [inputVal, setInputVal] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const handleChange = (e: any) => setInputVal(e.target.value);
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
      <button className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-md px-3.5 py-1 ">
        Post
      </button>
    </form>
  );
};

export default Form;

import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-3.[5rem] bg-n-8/80 px-6 py-4 rounded-[1.7rem]
      ${className || ""}
      text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="loading" />
      AI is generating
    </div>
  );
};

export default Generating;

export default function Input({ placeholder, className, onClick }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="py-5 px-4 rounded-2xl border-2 border-solid border-sc-gray-20 focus-visible:outline-none focus:border-sc-gray-40"
      //   className={"bg-slate-500" + className}
    />
  );
}

export default function Input({ placeholder, className, onClick }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-2xl border-2 border-solid border-sc-gray-20  py-5 px-4 bg-sc-gray-5 focus:border-sc-gray-40 focus:bg-white focus-visible:outline-none"
    />
  );
}

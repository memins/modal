export default function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "m-auto py-3 px-8 font-bold border-solid border-2 border-black rounded-2xl " +
        className
      }
    >
      {text}
    </button>
  );
}

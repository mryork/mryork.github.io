export default function NavLink({ text, scroll }) {
  return (
    <button
      onClick={() => {
        scroll.current.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="bg-gray-700 px-4 py-2 rounded-2xl text-center hover:bg-gray-800 cursor-pointer"
    >
      {text}
    </button>
  );
}

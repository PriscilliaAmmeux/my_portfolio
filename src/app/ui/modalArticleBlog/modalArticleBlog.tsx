export default function ModalArticleBlog({ children, onClose }) {
  return (
    <section className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-2xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-2xl">
          &times;
        </button>
        {children}
      </div>
    </section>
  );
}

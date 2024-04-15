export default function Title({ text }: { text: string }) {
  return (
    <h1 className=" flex justify-center text-4xl font-bold text-white mt-10 mb-10 text-2xl">
      {text}
    </h1>
  );
}

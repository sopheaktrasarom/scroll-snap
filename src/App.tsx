export default function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="h-screen flex items-center justify-center snap-start bg-red-500 text-6xl ">
        1
      </div>
      <div className="h-screen flex items-center justify-center snap-start bg-blue-500 text-6xl">
        2
      </div>
      <div className="h-screen flex items-center justify-center snap-start bg-red bg-yellow-300 text-6xl">
        3
      </div>
    </div>
  );
}

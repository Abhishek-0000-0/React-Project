export default function Card({ icon, number, text }) {
  return (
    <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
      <div className="text-blue-600 mb-3">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{number}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

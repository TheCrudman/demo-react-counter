export default function Button({ step, increment, decrement }) {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2"
      onClick={() => {
        increment ? increment(step) : decrement(step)
      }}
    >
      {(increment ? '+' : '-') + step}
    </button>
  )
}

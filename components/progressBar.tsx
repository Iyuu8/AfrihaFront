export default function ProgressBar({ progress }: {progress : number}) {
  const getStatus = (progress: number): "Delivered" | "Process" => {
    return progress === 100 ? "Delivered" : "Process"
  }

  const status = getStatus(progress)

  return (
    <div className="grow-1 flex px-[5px] lg:px-[15px] items-center flex-col justify-center">
      <p className="text-center text-gray-600 font-medium mb-2 font-bold">
        {status}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            status === "Delivered" ? "bg-green-600" : "bg-yellow-400"
          }`}
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>
    </div>
  )
}
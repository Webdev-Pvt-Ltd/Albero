export default function OfflinePage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl font-bold mb-4">You are Offline</h1>
            <p className="text-gray-300 mb-6">Please check your internet connection.</p>
            <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                Retry
            </button>
        </div>
    )
}

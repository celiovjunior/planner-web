import { Calendar, MapPin, ArrowRight, UserRoundPlus, Settings2 } from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plan.er application logo" />
          <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip!</p>
        </div>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          {isGuestsInputOpen ? (
            <button onClick={closeGuestsInput} className="flex items-center gap-2 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium hover:bg-zinc-700">
              <Settings2  className="size-7" />
              Change local/date
            </button>) : (
            <button onClick={openGuestsInput} className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
              Continue
            <ArrowRight className="size-7" />
          </button>)}
        </div>

        {isGuestsInputOpen && (
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape space gap-3">
            <div className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400" />
              <input type="text" placeholder="Who will travel with you?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>
                  
            <div className="w-px h-6 bg-zinc-800" />

            <button className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
              Confirm travel
              <ArrowRight className="size-7" />
            </button>
          </div>
        )}
        <p className="text-sm text-zinc-500">
          When planning your travels with Plann.er, you automatically agree<br />to follow our <a className="text-zinc-300 underline" href="#">rules and privacy policies</a>.
        </p>
      </div>
    </div>
  )
}

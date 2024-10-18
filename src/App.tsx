import { Calendar, MapPin, ArrowRight, UserRoundPlus, Settings2, X } from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)


  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
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
            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400" />
              <span className="text-zinc-400 text-lg flex-1 text-left">Who will travel with you?</span>
              <input type="text" placeholder="" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </button>
                  
            <div className="w-px h-6 bg-zinc-800" />

            <button className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
              Confirm travel
              <ArrowRight className="size-7" />
            </button>
          </div>)}
        <p className="text-sm text-zinc-500">
          When planning your travels with Plann.er, you automatically agree<br />to follow our <a className="text-zinc-300 underline" href="#">rules and privacy policies</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select friends</h2>
                <button onClick={closeGuestsModal} type="button"><X className="size-5 text-zinc-400" /></button>
              </div>
              <p className="text-sm text-zinc-400">They will receive e-mails to confirm they're going to the travel.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

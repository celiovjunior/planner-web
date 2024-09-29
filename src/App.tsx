import { Calendar, MapPin } from "lucide-react";

export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip!</p>
        
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <input type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400" />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400" />
          </div>
          <button>Continue</button>
        </div>

        <p className="text-sm text-zinc-500">When planning your travels with Plann.er, you automatically agree<br />to follow our <a className="text-zinc-300 underline" href="#">rules and privacy policies</a>.</p>
      </div>
    </div>
  )
}

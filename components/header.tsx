import { AlignCenter, Church } from 'lucide-react'

export function Header() {
  return (
    <div className="h-20 gap-6 w-full border-b flex justify-between items-center px-6">
      <div className="flex items-center gap-6">
        <div className="h-9 w-9 cursor-pointer border-1 flex justify-center items-center rounded-md hover:bg-muted">
          <AlignCenter className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2 font-bold cursor-pointer">
          <Church className="h-5 w-5" />
          <span className="font-semibold">portal.ebd</span>
        </div>
      </div>
      <div>
        <span className="flex rounded-2xl justify-center items-center flex-shrink-0 bg-purpleseat-base text-white select-none lg:w-[52px] lg:h-12 w-[44px] h-10">
          <img
            className="h-full w-full rounded-[inherit] object-cover"
            alt="Wilian Brito Pereira"
            src="https://xesque.rocketseat.dev/users/avatar/profile-d36b70d4-8976-4d2f-be56-15365a2bd7f4-1737997144376.jpg"
          />
        </span>
      </div>
    </div>
  )
}

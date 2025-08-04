// Snippet 14 from Chapter 4
// Section: Pseudo-Classes and State Variants
// Subsection: Group and Peer States
// Language: typescript
// Description: function GroupPeerDemo(): JSX.Element {
// 
function GroupPeerDemo(): JSX.Element {
  return (
    <div>
      {/* Group Example */}
      <a href="#" className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
        <div className="flex items-center space-x-3">
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            {/* Text turns white when parent group is hovered */}
            New Project
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          {/* Text turns white when parent group is hovered */}
          Create a new project from a variety of templates.
        </p>
      </a>

      <hr className="my-4" />

      {/* Peer Example */}
      <div className="relative mt-2">
        <input
          type="email"
          id="emailInput"
          className="
            peer block w-full rounded-md border-gray-300 shadow-sm
            focus:border-sky-500 focus:ring-sky-500
            invalid:border-pink-600 invalid:text-pink-600
            focus:invalid:border-pink-600 focus:invalid:ring-pink-600
          "
          placeholder="you@example.com"
          required
        />
        <label
          htmlFor="emailInput"
          className="
            absolute -top-6 left-0 text-sm text-gray-600
            transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
            peer-focus:-top-6 peer-focus:text-sm peer-focus:text-sky-600
            peer-invalid:text-pink-600
          "
        >
          {/* Label moves and changes color based on peer input state */}
          Email Address
        </label>
      </div>
    </div>
  );
}
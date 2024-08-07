

function Selector({}){

    //const COLORS = ["primary", "primary"]
    return(
    <div className="flex w-full flex-col lg:flex-row">
        <button className="card stats shadow rounded-box join-item grid h-12 flex-grow dark:text-slate-300 place-items-center">Current</button>
        
        <button className="card stats shadow rounded-box join-item grid h-12 flex-grow dark:text-slate-300 place-items-center">Finished</button>
        
        <button className="card stats shadow rounded-box join-item grid h-12 flex-grow dark:text-slate-300 place-items-center">Upcoming</button>
    </div>
    //<div className="join flex mx-auto mt-15 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex //lg:max-w-none">
    //<button className="mx-auto max-w-7xl px-1 lg:px-8 btn stats shadow rounded-3xl dark:text-slate-300 flex //items-center gap-x-4">Current</button>
    //<button className="mx-auto max-w-7xl px-1 lg:px-8 btn stats shadow stat-figure rounded-3xl //dark:text-slate-300">Finished</button>
    //<button className="mx-auto max-w-7xl px-1 lg:px-8 btn stats shadow stat-figure rounded-3xl //dark:text-slate-300">Upcoming</button>
    //</div>
    )
   
}


export default Selector
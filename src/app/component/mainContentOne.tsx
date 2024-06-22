"use client"

export default function MainContentOne(){

    const setHeadings = (idx:number)=>{
       switch(idx){
        case 0:
            return"Amazing Design"
        
        case 1:
            return"Copywriting"   

        case 2:
            return"Development" 
            
        case 3:
            return"24/7 Support"     
       }
    }

    return(
        <div className="w-full h-[70vh] p-10 bg-slate-100 flex justify-center">

          <section className="w-[80%]">

            <div className="w-full text-center">
               <h1 className="text-[34px] font-bold mb-5">We create super-awesome designs</h1>
               <p className="text-[16px]">
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 <br/>
                 Excepteur sint occaecat cupidatat non proident. 
               </p>
            </div>

            <div className="w-[100%] mt-10 flex justify-center p-4">
              <div className="w-[60%] grid grid-cols-2 grid-rows-2 gap-6">
                {
                    Array(4).fill(0).map((_, idx)=>(
                        <div 
                          className="h-[150px] bg-white rounded-lg shadow-lg flex" 
                          key={idx+1}
                        >
                            <div className="w-[20%] p-4">
                              <img src="/circlemark.svg" alt="mark"/>
                            </div>
                            <div className="w-[80%] p-4 font-bold">
                              <h1>{setHeadings(idx)}</h1> 
                            </div>
                           
                        </div>
                    ))
                }
              </div>
            </div>

          </section>

        </div>
    )
}
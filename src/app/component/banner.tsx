"use client"

export default function Banner() {

 const getimages = (idx:number)=>{
   switch (idx){
     case 0:
      return <img src="/comp1.svg" alt="comp1"/>

      case 1:
      return <img src="/comp2.svg" alt="comp2"/>

      case 2:
      return <img src="/comp3.svg" alt="comp3"/>

      case 3:
      return <img src="/comp4.svg" alt="comp4"/>
   }
 }

  return (
    <div className="w-full h-[88vh] mt-[104px] flex bg-[url('/domenico-loia-hGV2TfOh0ns-unsplash.jpg')] bg-cover bg-center">
      <section className="w-[50%] h-full p-10 flex justify-end items-end">
        <div className="w-[50%] h-[50%] p-5 rounded flex justify-center items-center">
          <div>
            <h1 className="text-[60px] text-center text-[deeppink] -ml-[100px]">Web App</h1>
            <h1 className="text-[60px] text-center text-[dodgerblue]">Development</h1>
          </div>
        </div>
      </section>

      <section className="w-[50%] h-full p-10 flex flex-col-reverse">
        <div className="w-[50%] h-[50%] p-5 rounded grid grid-cols-2 grid-rows-2 gap-5">
          {
            Array(4).fill(0).map((_box, idx)=>(
              <button 
               className="w-full border 
               shadow-md rounded-md
               bg-white cursor-pointer
               hover:scale-125
               flex justify-center items-center
               " 
               key={idx+1}
               id={`${idx+1}`}
              >
               {getimages(idx)}
              </button> 
            ))
          }
        </div>
      </section>
    </div>
  );
}

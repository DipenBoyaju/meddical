const ContactForm = () => {
  return (
    <div className="bg-primary font-worksans rounded-lg overflow-hidden text-lighter">
      <form action="">
        <div className="flex justify-between w-full">
          <div className="w-1/2">
            <input type="text" placeholder="Name" className="w-full bg-transparent placeholder:text-lighter p-4 font-[300] h-[50px] border-b border-r focus:outline-none" />
          </div>
          <div className="w-1/2">
            <input type="email" placeholder="Email" className="w-full bg-transparent focus:outline-none placeholder:text-lighter p-4 font-[300] h-[50px] border-b" />
          </div>
        </div>
        <div className="">
          <input type="text" placeholder="Subject" className="w-full bg-transparent placeholder:text-lighter focus:outline-none p-4 font-[300] h-[50px] border-b" />
        </div>
        <div className="">
          <textarea name="" id="" placeholder="Message" className="w-full bg-transparent placeholder:text-lighter p-4 font-[300] focus:outline-none h-[200px]"></textarea>
        </div>
        <button className="bg-light w-full text-lg font-[500] uppercase p-3 hover:bg-secondary hover:text-lighter transition-all duration-300">Submit</button>
      </form>
    </div>
  )
}
export default ContactForm
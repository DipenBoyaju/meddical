const HeaderCard = ({ title, info, icon }) => {
  return (
    <div className="flex flex-row gap-2 justify-between items-center mx-auto">
      <div className="">
        <img src={icon} alt={title} />
      </div>
      <div className="">
        <h5 className="text-sm md:text-[16px] uppercase text-dark font-[500]">{title}</h5>
        <p className="text-sm md:text-[16px]  text-secondary font-[500]">{info}</p>
      </div>
    </div>
  )
}
export default HeaderCard
import heart from '../assets/specialities.png'

const SpecialitiesCard = ({ title }) => {
  return (
    <div className="border text-center flex items-center justify-center flex-col py-10 gap-2 hover:bg-primary hover:text-lighter cursor-pointer transition-all text-dark duration-300">
      <img src={heart} alt="" />
      <p className="font-worksans font-[500]">{title}</p>
    </div>
  )
}
export default SpecialitiesCard
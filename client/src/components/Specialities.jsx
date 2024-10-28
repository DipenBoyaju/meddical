import SpecialitiesCard from "./SpecialitiesCard"

const Specialities = () => {
  return (
    <div className="flex flex-col justify-center md:px-20 lg:px-44 pt-24 pb-14 px-4">
      <div className="text-center px-4">
        <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Always Caring</p>
        <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">Our Specialities</h2>
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 pt-14">
        <SpecialitiesCard title="Neurology" />
        <SpecialitiesCard title="Bones" />
        <SpecialitiesCard title="opthalmology" />
        <SpecialitiesCard title="Cardiovascular" />
        <SpecialitiesCard title="Oncology" />
        <SpecialitiesCard title="Otorhinolaryngology" />
        <SpecialitiesCard title="Pulmonary" />
        <SpecialitiesCard title="Renal Medicine" />
        <SpecialitiesCard title="Dermatology" />
      </div>
    </div>
  )
}
export default Specialities
const ContactCard = ({ title, icon: Icon, subinfo1, subinfo2 }) => {
  return (
    <div className="bg-light font-worksans px-6 py-12 rounded-lg hover:bg-primary text-primary hover:text-light cursor-default transition-all duration-300 text-wrap">
      <div className="">
        {Icon && <Icon className="text-4xl" />}
      </div>
      <p className="text font-bold tracking-wide text-lg uppercase py-2">{title}</p>
      <div className="">
        <p>{subinfo1}</p>
        <p>{subinfo2}</p>
      </div>
    </div>
  )
}
export default ContactCard
const Title = ({ title, subtitle, bg, position }) => {
  return (
    <div className="px-4 md:px-20 lg:px-44 h-64 relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: `center ${position}` }}>
      <div className="h-full w-full absolute bg-white left-0 top-0 opacity-50 z-10"></div>
      <div className="pt-20 z-20 relative">
        <p className="text-primary font-worksans text-lg">Home / {subtitle}</p>
        <h1 className="font-yeseva text-3xl md:text-5xl font-medium text-primary">{title}</h1>
      </div>
    </div >
  )
}
export default Title
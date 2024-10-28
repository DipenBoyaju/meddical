import img1 from '../../assets/pregnant-anemia-race-main.jfif'
import img2 from '../../assets/servicedoctor.jfif'

const Cardio = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className=" col-span-7">
        <h3 className="font-worksans text-2xl text-dark font-semibold">A passion for putting patients first.</h3>
        <p>A test for Cardio</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
      </div>
      <div className="col-span-5 flex flex-col gap-5">
        <div className="w-full">
          <img src={img1} alt="" />
          <div className="flex flex-row">
            <div className="h-2 bg-light w-[16%]"></div>
            <div className="h-2 bg-primary w-[68%]"></div>
            <div className="h-2 bg-secondary w-[16%]"></div>
          </div>
        </div>
        <div className="w-full">
          <img src={img2} alt="" />
          <div className="flex flex-row">
            <div className="h-2 bg-light w-[16%]"></div>
            <div className="h-2 bg-primary w-[68%]"></div>
            <div className="h-2 bg-secondary w-[16%]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cardio
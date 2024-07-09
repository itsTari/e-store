import Hero from "../component/Hero"
import DisplayProducts from "../component/DisplayProducts"
import ViewAll from '../component/ViewAll'
function HomePage(){
 return(
    <>
      <Hero/>
      <DisplayProducts home={true}/>
      <ViewAll/>
    </>
 )
}
export default HomePage
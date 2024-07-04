import Hero from "../component/Hero"
import Display from '../component/Display'
import ViewAll from '../component/ViewAll'
function HomePage(){
 return(
    <>
      <Hero/>
      <Display home={true}/>
      <ViewAll/>
    </>
 )
}
export default HomePage
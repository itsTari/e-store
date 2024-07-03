import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialPintarest } from "react-icons/sl";
function Footer(){
    return(
        <>
            <footer className="bg-slate-100 px-10 py-6">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-3">
                        <div className="text-2xl">Logo</div>
                        <h3 className="font-bold">+555 8107 665430</h3>
                        <p>Opening hours: 9am - 5pm Monday to Friday</p>
                    </div>
                    <h3 className="font-bold">[Email Protected ]</h3>
                    <div className="flex justify-between w-1/4">
                        <BsTwitterX className="text-xl cursor-pointer"/>
                        < FaFacebookSquare className="text-2xl cursor-pointer"/>
                        <TiSocialInstagram className="text-2xl cursor-pointer"/>
                        <SlSocialPintarest className="text-2xl cursor-pointer"/>
                    </div>
                    <div className="w-full border-b-2 border-black-300"></div>
                    <div className="flex justify-around ">
                        <ul className="text-slate-800">
                            <li>E-commerce</li>
                            <li>Wholesale store</li>
                            <li>mangement</li>
                            <li>mangement</li>
                            <li>mangement</li>
                            <li>mangement</li>
                        </ul>
                        <ul  className="text-slate-800">
                            <li>E-commerce</li>
                            <li>Wholesale store</li>
                            <li>mangement</li>
                            <li>mangement</li>
                            <li>mangement</li>
                            <li>mangement</li>
                        </ul>
                        <ul  className="text-slate-800">
                            <li>E-commerce</li>
                            <li>Wholesale store</li>
                            <li>mangement</li>
                            <li>mangement</li>
                            <li>mangement</li>
                            <li>mangement</li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer
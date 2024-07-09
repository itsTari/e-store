import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialPintarest } from "react-icons/sl";
import { list } from "postcss";
function Footer(){
    const footerListItems =[
        {id:1, title:'E-commerce'},
        {id:2, title:'WholeSale Store'},
        {id:3, title:'Management'},
        {id:4, title:'Services'},
        {id:5, title:'Sales Rep'},
        {id:6, title:'Business'},
    ]
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
                            { footerListItems.map(list => <li key={list.id}>{list.title}</li> )}
                        </ul>
                        <ul  className="text-slate-800">
                            {footerListItems.map((list)=>{
                               return(
                                <li key={list.id}>{list.title}</li>
                                ) 
                             })        
                            }
                        </ul>
                        <ul  className="text-slate-800">
                            {footerListItems.map(list => <li key={list.id}>{list.title}</li>)}
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer
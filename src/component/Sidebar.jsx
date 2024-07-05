function Sidebar({showSidebar, toggle}){
    return(
        <>
           {showSidebar && (<div className="w-1/4 shadow-md bg-white h-screen absolute z-50">
                <div><h1>Local Store</h1></div>
                <div><h1>Local Store</h1></div>
                <div><h1>Local Store</h1></div>
                <div><h1>Local Store</h1></div>
                <div><h1>Local Store</h1></div>
                <div><h1>Local Store</h1></div>
            </div>)}
            {/* Sidebar.propTypes = {
            showModal: PropTypes.bool,
            toggle: PropTypes.func
            }  */}
        </>
    )
}
export default Sidebar
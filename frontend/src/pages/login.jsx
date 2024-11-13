// import { toggleModal } from "../components/appbar";

export default function LoginPage({setShowInjectedContent}){
    return((
        <div className="modal-overlay " onClick={()=>{setShowInjectedContent((prev)=>!prev)}}>
            <div className=" bg-white rounded-3xl w-1/2 h-3/4 grid grid-cols-2 " onClick={(e) => e.stopPropagation()}>
                <div className="bg-gray-100 rounded-3xl"></div>
                <div className="bg-blend-lighten hover:bg-blend-darken">
                <div className="font-bold  grid grid-cols-3 p-4 gap-12 content-between" > 
                <p>login/signup</p><div></div>
                <button className='bg-white rounded-lg ' onClick={()=>{setShowInjectedContent(false)}}>X</button>
                </div><hr />
                <div className="h-3/4 flex flex-col justify-between p-4 ">
                <div></div>
  <div><p className="text-left">USERNAME</p>
  <input type="text" placeholder="enter username" className="bg-gray-200 w-full p-2 rounded" />
  </div>
  <div><p className="text-left">PASSWORD</p>
  <input type="password" placeholder="enter password" className="bg-gray-200 w-full p-2 rounded" />
  </div>
  <button className="bg-gray-300 py-2 rounded hover:bg-gray-400">Login</button><div></div>
</div>
                    <hr/>
                    <p className="font-bold">Dont have account??</p>
                    <button className="bg-gray-300 hover:bg-gray-600 active:bg-gray-700 rounded-lg p-2">signup</button>
                </div>
            </div>
        </div>
    ))
}

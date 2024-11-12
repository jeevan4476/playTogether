// import { toggleModal } from "../components/appbar";

export default function LoginPage({setShowInjectedContent}){
    return((
        <div className="modal-overlay " onClick={()=>{setShowInjectedContent((prev)=>!prev)}}>
            <div className=" bg-white rounded-3xl w-1/2 h-3/4 grid grid-cols-2 gap-4" onClick={(e) => e.stopPropagation()}>
                <div className="bg-gray-100"></div>
                <div className="">
                <div className="font-bold  grid grid-cols-2 gap-4 content-between" > 
                <p>login/signup</p>
                <button className='bg-gray-300  hover:bg-red-600 active:bg-red-700 active:text-white rounded-lg ' onClick={()=>{setShowInjectedContent(false)}}>X</button>
                </div><hr />
                <div className="h-3/4 flex flex-col justify-between p-4">
                <div></div>
  <div><p>USERNAME</p>
  <input type="text" placeholder="enter username" className="bg-gray-200 p-2 rounded" />
  </div>
  <div><p>PASSWORD</p>
  <input type="password" placeholder="enter password" className="bg-gray-200 p-2 rounded" />
  </div>
  <button className="bg-gray-300 py-2 rounded hover:bg-gray-400">Login</button><div></div>
</div>
                    <hr/>
                    <p className="font-bold">dont have account??</p>
                    <button className="bg-gray-300 hover:bg-gray-600 active:bg-gray-700 rounded-lg size-16">signup</button>
                </div>
            </div>
        </div>
    ))
}

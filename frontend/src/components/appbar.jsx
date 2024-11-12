import { useState } from 'react';
import LoginPage from '../pages/login';
import './styling.css';

// export function toggleModal(params) {
//     setShowInjectedContent((prev)=>!prev)
// }
export default function Appbar() {
    const [showInjectedContent, setShowInjectedContent] = useState(false);
    


return(
<div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-4 ">
                        <span className="font-bold text-lg">playTogether</span>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="BANGALORE" 
                                className="border rounded-full py-1 px-3"
                            />
                            {/* <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i> */}
                            <i class="fa fa-search"></i>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-black text-lg">Home</a>
                        <a href="#" className="text-black text-lg">Play</a>
                        <a href="#" className="text-black text-lg">Book</a>
                        <span className="text-black"></span>
                        <button className="text-black text-lg" onClick={()=>{setShowInjectedContent(true)}}>Login/Signup</button>
                        {/* {showInjectedContent && (<div>
                            
                        </div>)} */}
                        
                        {showInjectedContent && <LoginPage setShowInjectedContent={setShowInjectedContent} />}
                    </div>
                </div>)
}
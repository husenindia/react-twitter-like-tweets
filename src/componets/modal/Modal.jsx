import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
function Modal({children}) {
    const navigate = useNavigate();
    function modalCloseHandler() {
        navigate('..');
    }

    return (
        <>
            <div 
            onClick={modalCloseHandler}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />

            <div 
            onClick={modalCloseHandler}
            className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

                    <div                     
                    className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                        <button
                            onClick={modalCloseHandler}
                            type="button"
                            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                        >
                            ✕
                        </button>

                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {children}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Modal;
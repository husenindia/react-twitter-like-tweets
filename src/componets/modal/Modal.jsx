import classes from './Modal.module.css';

function Modal({children, onCloseModalFunc}) {
    return (
        <>
            <div 
            onClick={onCloseModalFunc}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />

            <div 
            onClick={onCloseModalFunc}
            className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div 
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

                    <div                     
                    className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                        <button
                            onClick={onCloseModalFunc}
                            type="button"
                            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                        >
                            ✕
                        </button>

                        <button
                            type="submit"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-full transition"
                        >
                            Post
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
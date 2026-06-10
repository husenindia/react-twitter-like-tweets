import classes from './NewPost.module.css';
import Modal from '../../componets/modal/Modal';
import { Link, Form, redirect } from 'react-router-dom';
function NewPost({onAddPostFunc}) {
    return (
        <Modal>
        <Form      
        method='post'  
        className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm max-w-xl mx-auto">
            <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold shrink-0">
                    ?
                </div>

                <div className="flex-1 space-y-4">

                    {/* Tweet Content */}
                    <div>
                        <textarea
                            name="content"
                            rows="3"
                            placeholder="What's happening?"
                            className="w-full resize-none border-none outline-none text-lg placeholder-gray-500 focus:ring-0"
                        />
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 pt-4">

                        {/* Author Input */}
                        <input
                            type="text"
                            name="author"
                            placeholder="Your name"
                            className="w-full rounded-xl border border-gray-200 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition"
                        />

                        {/* Actions + Post Button */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex gap-4 text-sky-500 text-xl">
                                <button type="button">🖼️</button>
                                <button type="button">😊</button>
                                <button type="button">📍</button>
                            </div>

                            <div>
                                <Link
                                to=".."
                                className="bg-gray-300 text-black font-semibold px-5 py-2 rounded-full mr-3"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"                                                                
                                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-full transition"
                            >
                                Post
                            </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Form>
        </Modal>
    );
}
export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    console.log(postData);
    const response = await fetch(
    "https://starpi-api-production.up.railway.app/api/posts",
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                title: "Title yet to be configure",
                content: postData.content,
                author: postData.author
            }
        })
    });
    return redirect('/');
}
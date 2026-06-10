import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post({ id, postAuthor, postContent }) {

    return (
        <>
            <Link to={id}>

                <div className="max-w-xl mx-auto p-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:bg-gray-50 transition">

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                                {postAuthor?.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900">
                                    {postAuthor}
                                </p>
                                <p className="text-sm text-gray-500">
                                    @user
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed text-left">
                            {postContent}
                        </p>

                        <div className="flex items-center gap-8 mt-4 text-gray-500 text-sm">
                            <button className="hover:text-blue-500 transition">
                                💬 Comment
                            </button>

                            <button className="hover:text-green-500 transition">
                                🔁 Repost
                            </button>

                            <button className="hover:text-red-500 transition">
                                ❤️ Like
                            </button>

                            <button className="hover:text-blue-600 transition">
                                📤 Share
                            </button>
                        </div>

                    </div>
                </div>
            </Link>

        </>
    )
}
export default Post;
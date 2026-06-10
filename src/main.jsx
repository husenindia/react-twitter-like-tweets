import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Posts from './routes/Posts.jsx';
import { loader as postLoader} from './routes/Posts.jsx';
import PostDetails, { loader as postDetails} from './componets/post-details/PostDetails.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './routes/new-post/NewPost.jsx';
import { action as newPostAction } from './routes/new-post/NewPost.jsx';
import RouteLayout from './routes/RootLayout';

const router = createBrowserRouter([
  { path: '/', element: <RouteLayout/>, children: 
    [
      { path: '/', 
        element: <Posts/>, 
        loader: postLoader,
        children: [
          { 
            path: '/create-post', 
            element: <NewPost/>,
            action: newPostAction
          },
          { 
            path: ':id', 
            element: <PostDetails/>,
            loader: postDetails
          }
        ]
      },
      
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

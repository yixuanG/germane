import { createHashRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import ArticleList from '@/pages/ArticleList'
import Practice from '@/pages/Practice'
import MistakeNotebook from '@/pages/MistakeNotebook'
import Vocabulary from '@/pages/Vocabulary'
import Settings from '@/pages/Settings'

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'practice',
        element: <ArticleList />,
      },
      {
        path: 'practice/:id',
        element: <Practice />,
      },
      {
        path: 'mistakes',
        element: <MistakeNotebook />,
      },
      {
        path: 'vocabulary',
        element: <Vocabulary />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
])

import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from './../components/home/Home';
import Timeline from './../components/timeline/timeline';
import {Layout}  from './../components/common/layout/Layout';
import Projects from './../components/projects/Projects';
import Skills from './../components/skills/skills';

export const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: '/timeline',
          element: <Timeline />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/skills',
          element: <Skills />
        }
      ],
    },
  ]);
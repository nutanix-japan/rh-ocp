import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3b7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd72'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '62f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '03c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '670'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ff5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ab6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '84e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4f5'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd97'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '047'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b25'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '343'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '922'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'abe'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '9dc'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4ce'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '94e'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '864'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/diyfoundation/',
        component: ComponentCreator('/diyfoundation/', '4f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ipi_install/',
        component: ComponentCreator('/ocp_ipi_install/', '2ec'),
        exact: true
      },
      {
        path: '/ocp_ipi_install/ocp_ipi_config_file',
        component: ComponentCreator('/ocp_ipi_install/ocp_ipi_config_file', 'fc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ipi_install/ocp_ipi_install_cleanup',
        component: ComponentCreator('/ocp_ipi_install/ocp_ipi_install_cleanup', '15e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ipi_install/ocp_ipi_intro',
        component: ComponentCreator('/ocp_ipi_install/ocp_ipi_intro', '3b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ipi_install/ocp_ipi_pre_reqs',
        component: ComponentCreator('/ocp_ipi_install/ocp_ipi_pre_reqs', '986'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ndb/',
        component: ComponentCreator('/ocp_ndb/', 'cd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ocp_ntnx_hci/ocp_csi',
        component: ComponentCreator('/ocp_ntnx_hci/ocp_csi', '9f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/pcdeploy/',
        component: ComponentCreator('/pcdeploy/', 'cff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolsvms/linux_tools_vm',
        component: ComponentCreator('/toolsvms/linux_tools_vm', 'be7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/toolsvms/windows_tools_vm',
        component: ComponentCreator('/toolsvms/windows_tools_vm', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rh-ocp/__docusaurus/debug',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug', '31d'),
    exact: true
  },
  {
    path: '/rh-ocp/__docusaurus/debug/config',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug/config', 'a19'),
    exact: true
  },
  {
    path: '/rh-ocp/__docusaurus/debug/content',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug/content', 'c0d'),
    exact: true
  },
  {
    path: '/rh-ocp/__docusaurus/debug/globalData',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug/globalData', '916'),
    exact: true
  },
  {
    path: '/rh-ocp/__docusaurus/debug/metadata',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug/metadata', 'fdf'),
    exact: true
  },
  {
    path: '/rh-ocp/__docusaurus/debug/registry',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug/registry', '576'),
    exact: true
  },
  {
    path: '/rh-ocp/__docusaurus/debug/routes',
    component: ComponentCreator('/rh-ocp/__docusaurus/debug/routes', '14f'),
    exact: true
  },
  {
    path: '/rh-ocp/blog',
    component: ComponentCreator('/rh-ocp/blog', '951'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/archive',
    component: ComponentCreator('/rh-ocp/blog/archive', '2ee'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/first-blog-post',
    component: ComponentCreator('/rh-ocp/blog/first-blog-post', '3aa'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/long-blog-post',
    component: ComponentCreator('/rh-ocp/blog/long-blog-post', 'eb1'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/mdx-blog-post',
    component: ComponentCreator('/rh-ocp/blog/mdx-blog-post', '811'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/tags',
    component: ComponentCreator('/rh-ocp/blog/tags', 'dff'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/tags/docusaurus',
    component: ComponentCreator('/rh-ocp/blog/tags/docusaurus', '60c'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/tags/facebook',
    component: ComponentCreator('/rh-ocp/blog/tags/facebook', '753'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/tags/hello',
    component: ComponentCreator('/rh-ocp/blog/tags/hello', '53f'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/tags/hola',
    component: ComponentCreator('/rh-ocp/blog/tags/hola', '27f'),
    exact: true
  },
  {
    path: '/rh-ocp/blog/welcome',
    component: ComponentCreator('/rh-ocp/blog/welcome', '079'),
    exact: true
  },
  {
    path: '/rh-ocp/markdown-page',
    component: ComponentCreator('/rh-ocp/markdown-page', 'bd6'),
    exact: true
  },
  {
    path: '/rh-ocp/',
    component: ComponentCreator('/rh-ocp/', '383'),
    routes: [
      {
        path: '/rh-ocp/',
        component: ComponentCreator('/rh-ocp/', 'bdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/diyfoundation/',
        component: ComponentCreator('/rh-ocp/diyfoundation/', '05f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/ocp_ipi_install/',
        component: ComponentCreator('/rh-ocp/ocp_ipi_install/', '070'),
        exact: true
      },
      {
        path: '/rh-ocp/ocp_ipi_install/ocp_ipi_config_file',
        component: ComponentCreator('/rh-ocp/ocp_ipi_install/ocp_ipi_config_file', '2bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/ocp_ipi_install/ocp_ipi_install_cleanup',
        component: ComponentCreator('/rh-ocp/ocp_ipi_install/ocp_ipi_install_cleanup', 'a09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/ocp_ipi_install/ocp_ipi_intro',
        component: ComponentCreator('/rh-ocp/ocp_ipi_install/ocp_ipi_intro', 'dc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/ocp_ipi_install/ocp_ipi_pre_reqs',
        component: ComponentCreator('/rh-ocp/ocp_ipi_install/ocp_ipi_pre_reqs', 'a5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/ocp_ndb/',
        component: ComponentCreator('/rh-ocp/ocp_ndb/', 'eef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/ocp_ntnx_hci/ocp_csi',
        component: ComponentCreator('/rh-ocp/ocp_ntnx_hci/ocp_csi', '97c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/pcdeploy/',
        component: ComponentCreator('/rh-ocp/pcdeploy/', 'b37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/toolsvms/linux_tools_vm',
        component: ComponentCreator('/rh-ocp/toolsvms/linux_tools_vm', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rh-ocp/toolsvms/windows_tools_vm',
        component: ComponentCreator('/rh-ocp/toolsvms/windows_tools_vm', 'e83'),
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

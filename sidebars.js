module.exports = {
  tutorialSidebar:[
    "intro",
    "diyfoundation/diyfoundation", 
    "pcdeploy/pcdeploy",
    "ocp_ntnx_hci/ocp_csi",
    {
      type: 'category',
      label: 'Nutanix IPI Installation',
      items: ['ocp_ipi_install/ocp_ipi_intro','ocp_ipi_install/ocp_ipi_pre_reqs','ocp_ipi_install/ocp_ipi_config_file','ocp_ipi_install/ocp_ipi_install_cleanup'],
    },
    "ocp_ndb/ocp_ndb",
    {
      type: 'category',
      label: 'Tools VMs',
      items: ['toolsvms/linux_tools_vm','toolsvms/windows_tools_vm'],
    },
    "instructor/instructor"
  ],
};

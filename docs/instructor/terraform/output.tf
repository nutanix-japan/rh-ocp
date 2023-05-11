output "foundationvm_ip_address" {
  value = nutanix_virtual_machine.foundationvm.*.nic_list
  description = "IP address of the foundation vms"
}
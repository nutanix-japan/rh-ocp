terraform {
  required_providers {
    nutanix = {
      source  = "nutanix/nutanix"
      version = "1.3.0"
    }
  }
}

data "nutanix_cluster" "cluster" {
  name = var.cluster_name
}
data "nutanix_subnet" "subnet" {
  subnet_name = var.subnet_name
}

provider "nutanix" {
  username     = var.user
  password     = var.password
  endpoint     = var.endpoint
  insecure     = true
  wait_timeout = 60
}

resource "nutanix_image" "foundationimage" {
  name        = "Foundation52"
  description = "Foundation image 5.2 qcow2"
  source_uri  = var.image_uri
}

resource "nutanix_image" "ndbimage" {
  name        = "ndb251"
  description = "NDB 251"
  source_uri  = var.ndb_image_uri
}


resource "nutanix_virtual_machine" "foundationvm" {
  count                = var.vm_count
  name                 = "${var.vm_foundation_prefix}-${count.index + 1}"
  cluster_uuid         = data.nutanix_cluster.cluster.id
  num_vcpus_per_socket = "4"
  num_sockets          = "1"
  memory_size_mib      = 4096
  disk_list {
    data_source_reference = {
      kind = "image"
      uuid = nutanix_image.foundationimage.id
    }
  }
  nic_list {
    subnet_uuid = data.nutanix_subnet.subnet.id
  }
}

resource "nutanix_virtual_machine" "ndbvm" {
  count                = var.vm_count
  name                 = "ndbvm"
  cluster_uuid         = data.nutanix_cluster.cluster.id
  num_vcpus_per_socket = "8"
  num_sockets          = "1"
  memory_size_mib      = 8192
  disk_list {
    data_source_reference = {
      kind = "image"
      uuid = nutanix_image.ndbimage.id
    }
  }
  nic_list {
    subnet_uuid = data.nutanix_subnet.subnet.id
  }
}
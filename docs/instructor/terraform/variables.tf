variable "cluster_name" {
  type = string
}
variable "subnet_name" {
  type = string
}
variable "password" {
  description = "nutanix cluster password"
  type      = string
  sensitive = true

}
variable "endpoint" {
  type = string
}
variable "user" {
  description = "nutanix cluster username"
  type      = string
  sensitive = true
}

variable "vm_count" {
  type = number
  default = 1
}

variable "vm_foundation_prefix" { 
}

variable "image_uri" {
  type = string
}

variable "ndb_image_uri" {
  type = string
}
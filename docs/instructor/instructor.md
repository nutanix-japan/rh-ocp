---
title: Preparation for Instructor
lastupdate: git
lastupdateauthor: git
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Bootcamp Instructor Preparation

- Get the number of participants
- Two weeks before your workshop: to make sure you can reserve clusters
  - Book a 4 node HPOC (one for each participant or a participant group)
  - Book a Single node HPOC (SPOC) (same datacenter as the 4 node HPOC)
    - Deploy as many number of Foundation VMs on SPOC using Terraform
    - Collect details of Foundation VMs and pass it on to participants

## Deploy Foundation VMs

1. On your workstation install Terraform
  
   <Tabs>
      <TabItem value="Mac" label="Mac" default>

      ``` text
      brew tap hashicorp/tap
      brew install hashicorp/tap/terraform
      ```

      </TabItem>
      <TabItem value="Windows" label="Windows">

      ```PowerShell
      choco install terraform
      ```

      </TabItem>

      <TabItem value="CentOS" label="CentOS">

      ```bash
      yum update -y 
      yum install -y yum-utils
      yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
      yum -y install terraform
      yum -y install git
      ```

      </TabItem>

    </Tabs>
   
2. Create a terraform working directory and initialise terraform 

   ```bash
   mkdir terraform
   cd terraform
   alias tf=terraform
   tf version
   ```

3. Download the following files in terraform directory
   
   ```bash
   curl -OL https://raw.githubusercontent.com/nutanix-japan/rh-ocp/main/docs/instructor/terraform/main.tf
   curl -OL https://raw.githubusercontent.com/nutanix-japan/rh-ocp/main/docs/instructor/terraform/output.tf
   curl -OL https://raw.githubusercontent.com/nutanix-japan/rh-ocp/main/docs/instructor/terraform/variables.tf
   ```

4. Create a tfvars file template
    
   ```bash
   cat << EOF > terraform.tfvars
   cluster_name           = "your HPOC/SPOC name"    # << Change this
   subnet_name            = "Primary"           # << Change this if different
   user                   = "admin"             # << Change this
   password               = "XXXXXXX"           # << Change this
   endpoint               = "SPOC VIP"          # << Change this
   vm_foundation_prefix   = "foundationvm-user" 
   vm_count               = 2                   # << Change this to the number of VMs you would like
   image_uri              = ""                  # << Change this to Foundation QCOW2 URL
   ndb_image_uri          = ""                  # << Change this to NDB QCOW2 URL
   EOF
   ```
        
5. Change values in the tfvars file to suit your environment
   
   ```bash
   vi terraform.tfvars
   ```

6.  Validate your Terraform code

    ```bash
    tf validate
    ```

7.  Apply your Terraform code to create virtual machines and associated resources
  
    ```bash
    tf apply 
    ```
    ```bash  
    # Terraform will show you all resources that it will to create
    # Type yes to confirm 
    Enter a value: yes

    nutanix_image.foundationimage: Creating...
    nutanix_image.foundationimage: Still creating... [10s elapsed]
    nutanix_image.foundationimage: Still creating... [2m0s elapsed]
    nutanix_image.foundationimage: Creation complete after 2m11s [id=2c826a76-6c2d-40f7-8a3d-d2b26154f823]
    nutanix_virtual_machine.foundationvm[0]: Creating...
    nutanix_virtual_machine.foundationvm[0]: Still creating... [10s elapsed]
    nutanix_virtual_machine.foundationvm[0]: Still creating... [2m30s elapsed]
    nutanix_virtual_machine.foundationvm[0]Creation complete after 2m31s 
    ```

1. Confirm the current state of terraform resources
   ```bash
   tf state list 
   ```
   ```bash           
   # output below                                                         
   data.nutanix_cluster.cluster
   data.nutanix_subnet.subnet
   nutanix_image.foundationimage
   nutanix_virtual_machine.foundationvm[0] # >> This is Foundation VM 1
   nutanix_virtual_machine.foundationvm[1] # >> This is Foundation VM 2
   ```

2. You can also confirm the presence of Foundation VMs on the Prism GUI.

3.  Assign each participant a Foundation VM from your Single Node POC cluster.


## Configure NDB VM

The Terraform script would have also created a NDB VM on your Single node cluster.

1. From Prism Element, find the IP of the NDB VM
2. In a browser, enter the IP of the NDB VM
3. The Web UI would prompt to set the password for admin user and login - distribute this to lab users for NDB labs
4. Follow through the prompts to set up Prism Element (Single Node HPOC Connection) for users
5. Follow prompts to setup no SMTP notification
6. Complete the setup wizard
7. Make sure the setup completes without any issues


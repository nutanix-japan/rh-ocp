---
title: Preparation for Instructor
lastupdate: git
lastupdateauthor: git
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Bootcamp Instructor Preparation

- Get the number of participants
- Book a 4 node HPOC (one for each participant or a participant group)
- Book a Single node HPOC (same datacenter as the 4 node HPOC)
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
   curl -OL 
   ```
"use strict";(self.webpackChunkrh_ocp=self.webpackChunkrh_ocp||[]).push([[7339],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(7462),n=a(7294),o=a(6010),i=a(2389),l=a(7392),s=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:d,className:f}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,s.U)(),[N,w]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=O.indexOf(t),r=g[a].value;r!==N&&(_(t),w(r),null!=d&&y(d,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},f)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:x},i,{className:(0,o.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},2623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),i=a(5162);const l={title:"Preparation for Instructor",lastupdate:"git",lastupdateauthor:"git"},s=void 0,u={unversionedId:"instructor/instructor",id:"instructor/instructor",title:"Preparation for Instructor",description:"Bootcamp Instructor Preparation",source:"@site/docs/instructor/instructor.md",sourceDirName:"instructor",slug:"/instructor/",permalink:"/rh-ocp/instructor/",draft:!1,editUrl:"https://github.com/nutanix-japan/rh-ocp/edit/main/docs/instructor/instructor.md",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1682931178,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Preparation for Instructor",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Windows Tools VM",permalink:"/rh-ocp/toolsvms/windows_tools_vm"}},p={},c=[{value:"Bootcamp Instructor Preparation",id:"bootcamp-instructor-preparation",level:2},{value:"Deploy Foundation VMs",id:"deploy-foundation-vms",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"bootcamp-instructor-preparation"},"Bootcamp Instructor Preparation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get the number of participants"),(0,n.kt)("li",{parentName:"ul"},"Two weeks before your workshop: to make sure you can reserve clusters",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Book a 4 node HPOC (one for each participant or a participant group)"),(0,n.kt)("li",{parentName:"ul"},"Book a Single node HPOC (SPOC) (same datacenter as the 4 node HPOC)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Deploy as many number of Foundation VMs on SPOC using Terraform"),(0,n.kt)("li",{parentName:"ul"},"Collect details of Foundation VMs and pass it on to participants")))))),(0,n.kt)("h2",{id:"deploy-foundation-vms"},"Deploy Foundation VMs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On your workstation install Terraform"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-text"},"brew tap hashicorp/tap\nbrew install hashicorp/tap/terraform\n"))),(0,n.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-PowerShell"},"choco install terraform\n"))),(0,n.kt)(i.Z,{value:"CentOS",label:"CentOS",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum update -y \nyum install -y yum-utils\nyum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo\nyum -y install terraform\nyum -y install git\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a terraform working directory and initialise terraform "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir terraform\ncd terraform\nalias tf=terraform\ntf version\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the following files in terraform directory"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OL https://raw.githubusercontent.com/nutanix-japan/rh-ocp/main/docs/instructor/terraform/main.tf\ncurl -OL https://raw.githubusercontent.com/nutanix-japan/rh-ocp/main/docs/instructor/terraform/output.tf\ncurl -OL https://raw.githubusercontent.com/nutanix-japan/rh-ocp/main/docs/instructor/terraform/variables.tf\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a tfvars file template"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF > terraform.tfvars\ncluster_name           = "your HPOC/SPOC name"    # << Change this\nsubnet_name            = "Primary"           # << Change this if different\nuser                   = "admin"             # << Change this\npassword               = "XXXXXXX"           # << Change this\nendpoint               = "Prism Central IP"  # << Change this\nvm_foundation_prefix   = "foundationvm-user" \nvm_count               = 2                   # << Change this to the number of VMs you would like\nimage_uri              = "http://10.42.194.11/workshop_staging/Foundation/Foundation_VM-5.2-disk-0.qcow2"\nEOF\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change values in the tfvars file to suit your environment"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vi terraform.tfvars\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Validate your Terraform code"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tf validate\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Apply your Terraform code to create virtual machines and associated resources"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tf apply \n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Terraform will show you all resources that it will to create\n# Type yes to confirm \nEnter a value: yes\n\nnutanix_image.foundationimage: Creating...\nnutanix_image.foundationimage: Still creating... [10s elapsed]\nnutanix_image.foundationimage: Still creating... [2m0s elapsed]\nnutanix_image.foundationimage: Creation complete after 2m11s [id=2c826a76-6c2d-40f7-8a3d-d2b26154f823]\nnutanix_virtual_machine.foundationvm[0]: Creating...\nnutanix_virtual_machine.foundationvm[0]: Still creating... [10s elapsed]\nnutanix_virtual_machine.foundationvm[0]: Still creating... [2m30s elapsed]\nnutanix_virtual_machine.foundationvm[0]Creation complete after 2m31s \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm the current state of terraform resources"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tf state list \n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# output below                                                         \ndata.nutanix_cluster.cluster\ndata.nutanix_subnet.subnet\nnutanix_image.foundationimage\nnutanix_virtual_machine.foundationvm[0] # >> This is Foundation VM 1\nnutanix_virtual_machine.foundationvm[1] # >> This is Foundation VM 2\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can also confirm the presence of Foundation VMs on the Prism GUI.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assign each participant a Foundation VM from your Single Node POC cluster."))))}d.isMDXComponent=!0}}]);
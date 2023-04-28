"use strict";(self.webpackChunkrh_ocp=self.webpackChunkrh_ocp||[]).push([[3847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),o=a(6010),i=a(2389),l=a(7392),s=a(7094),p=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:i,values:u,groupId:c,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,l.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,s.U)(),[w,v]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=c){const e=y[c];null!=e&&e!==w&&N.some((t=>t.value===e))&&v(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=N[a].value;n!==w&&(S(t),v(n),null!=c&&b(c,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},k)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:I},i,{className:(0,o.Z)("tabs__item",d,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},6791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),i=a(5162);const l={title:"Foundation",lastupdate:"git",lastupdateauthor:"git"},s="Nutanix Foundation",p={unversionedId:"diyfoundation/diyfoundation",id:"diyfoundation/diyfoundation",title:"Foundation",description:"Overview",source:"@site/docs/diyfoundation/diyfoundation.md",sourceDirName:"diyfoundation",slug:"/diyfoundation/",permalink:"/rh-ocp/diyfoundation/",draft:!1,editUrl:"https://github.com/nutanix-japan/rh-ocp/edit/main/docs/diyfoundation/diyfoundation.md",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1682652160,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Foundation",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/rh-ocp/"},next:{title:"PC Deployment",permalink:"/rh-ocp/pcdeploy/"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"DIY Environment",id:"diy-environment",level:2},{value:"Destroy Existing 4 Node Cluster",id:"destroy-existing-4-node-cluster",level:2},{value:"Confirm the Number of SSDs",id:"confirm-the-number-of-ssds",level:2},{value:"Foundation your Nutanix Cluster",id:"foundation-your-nutanix-cluster",level:2}],u={toc:d};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nutanix-foundation"},"Nutanix Foundation"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Estimated time to complete: ",(0,r.kt)("strong",{parentName:"p"},"60 Minutes"))),(0,r.kt)("p",null,"Foundation is used to automate the installation of the hypervisor and\nController VM on one or more nodes. In this exercise you will practice\nimaging a physical cluster with Foundation. In order to keep the lab\nself-contained, you will create a single node cluster on which you\nwill deploy your Foundation VM. That Foundation instance will be used to\nimage and create a cluster from the remaining 3 nodes in the Block."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In following steps, you should replace xx part of the IP octet with your assigned cluster ID")),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"Your instructor will provide you the following details: collect all these details and note them down somewhere before beginning your lab. "),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your 4 node cluster details:"),(0,r.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","4 x CVM IP addresses "),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","4 x Host IP addresses"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","4 x IPMI IP addresses"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Credentials to access CVM "),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Credentials to access IPMI"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","1 x Foundation VM IP address")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Credentials to access to Foundation VM (ssh and Web UI)")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Credentials for your cluster access")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","DNS IP Addresses")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","public NTP hostnames "))),(0,r.kt)("h2",{id:"diy-environment"},"DIY Environment"),(0,r.kt)("p",null,"Your instructor(s) has reserved the following for your use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A 4 node Nutanix Hosted POC (HPOC) cluster for you"),(0,r.kt)("li",{parentName:"ul"},"A Foundation VM ")),(0,r.kt)("p",null,"To get an understanding of the Foundation process, you will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Destroy the existing 4 node cluster "),(0,r.kt)("li",{parentName:"ul"},"Confirm the number of SSDs in your 4 node HPOC cluster "),(0,r.kt)("li",{parentName:"ul"},"Connect to a provisioned Foundation VM (using ssh and Web UI)"),(0,r.kt)("li",{parentName:"ul"},"Initiate Foundation process of the 4 node cluster "),(0,r.kt)("li",{parentName:"ul"},"Manually create the cluster using ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster create")," command")),(0,r.kt)("h2",{id:"destroy-existing-4-node-cluster"},"Destroy Existing 4 Node Cluster"),(0,r.kt)("p",null,"The 4 node cluster that your instructor has provisioned for you is running a Nutanix cluster and all associated services. Since some cluster services (if present) may hinder new cluster deployment, we will destroy the existing cluster."),(0,r.kt)("p",null,"Using an SSH client, connect to any ",(0,r.kt)("strong",{parentName:"p"},"CVM IP")," ",(0,r.kt)("inlineCode",{parentName:"p"},"10.42.xx.32")," in your assigned block using the following credentials: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - nutanix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - ",(0,r.kt)("em",{parentName:"li"},"check password with your instructor"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Login to the console of a CVM"',title:'"Login',to:!0,the:!0,console:!0,of:!0,a:!0,'CVM"':!0},"ssh -l nutanix 10.42.xx.32         # password: <check password in RX>\n")),(0,r.kt)("p",null,"Execute the following commands to power off any running VMs on the cluster, stop cluster services, and destroy the existing cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cluster stop        # Enter 'I agree' when prompted to proceed\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cluster destroy     # Enter 'Y' when prompted to proceed\n")),(0,r.kt)("p",null,"Once you have made sure that all VMs and services are stopped, you can proceed to the next steps."),(0,r.kt)("h2",{id:"confirm-the-number-of-ssds"},"Confirm the Number of SSDs"),(0,r.kt)("p",null,"In this section we will confirm the number of SSDs in your node D. This will determine which command (to create a new Nutanix cluster) we will use in the next section. Based on the output of the following commands, we will determine whether we will use Replication Factor (RF) 1 or RF2. "),(0,r.kt)("admonition",{title:"Replication factor(RF) and Number of SSDs",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Nutanix HCI software mandates requirement of 2 SSDs on a hardware node to persist data on disk for RF2. "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RF3")," - three copies of data on different nodes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RF2")," - two copies of data on different nodes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RF1")," - one copy of data on disk")),(0,r.kt)("p",{parentName:"admonition"},"For more information on RF check ",(0,r.kt)("a",{parentName:"p",href:"https://www.nutanixbible.com/4c-book-of-aos-dsf.html"},"here"),".")),(0,r.kt)("p",null,"Login to the CVM to find out the SSD configuration details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Login to the console of  NodeD CVM"',title:'"Login',to:!0,the:!0,console:!0,of:!0,"":!0,NodeD:!0,'CVM"':!0},"ssh -l nutanix 10.42.xx.32         # password: <check password in RX>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"lsscsi \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",1:!0,className:"language-bash",metastring:'title="Example output with 1 SSD here"',title:'"Example',output:!0,with:!0,SSD:!0,'here"':!0},"[0:0:0:0]    disk    ATA      INTEL SSDSC2BX80 0140  /dev/sda  # << SSD 1\n[0:0:1:0]    disk    ATA      INTEL SSDSC2BX80 0140  /dev/sdb  # << SSD 2\n[0:0:2:0]    disk    ATA      ST91000640NS     SN03  /dev/sdc \n[0:0:3:0]    disk    ATA      ST91000640NS     SN03  /dev/sdd \n[0:0:4:0]    disk    ATA      ST91000640NS     SN03  /dev/sde \n[0:0:5:0]    disk    ATA      ST91000640NS     SN03  /dev/sdf \n[2:0:0:0]    cd/dvd  QEMU     QEMU DVD-ROM     2.5+  /dev/sr0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="Example output with 2 SSDs here"',title:'"Example',output:!0,with:!0,SSDs:!0,'here"':!0},"[0:0:0:0]    disk    ATA      INTEL SSDSC2BX80 0140  /dev/sda  # << SSD 1\n[0:0:2:0]    disk    ATA      ST91000640NS     SN03  /dev/sdc \n[0:0:3:0]    disk    ATA      ST91000640NS     SN03  /dev/sdd \n[0:0:4:0]    disk    ATA      ST91000640NS     SN03  /dev/sde \n[0:0:5:0]    disk    ATA      ST91000640NS     SN03  /dev/sdf \n[2:0:0:0]    cd/dvd  QEMU     QEMU DVD-ROM     2.5+  /dev/sr0\n")),(0,r.kt)("p",null," After confirming the number of SSDs choose the appropriate choices for cluster configuration during the Foundation process. "),(0,r.kt)("h2",{id:"foundation-your-nutanix-cluster"},"Foundation your Nutanix Cluster"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We will do this section of the lab from your remote VDI (Windows) computer. This is the fastest way as remote consoles will be slow.")),(0,r.kt)("p",null,"By default, Foundation does not have any AOS or hypervisor images. You can download your desired AOS package from the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.nutanix.com/#/page/releases/nosDetails"},"Nutanix Portal"),"."),(0,r.kt)("p",null,"If downloading the AOS package within the Foundation VM, the ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz")," package can also be moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/foundation/nos")," rather than uploaded to Foundation through the web UI."),(0,r.kt)("p",null,"To shorten the lab time, we use command line to access foundation VM and download NOS binary to designated folder in it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal in your VDI (Putty) and ssh to ",(0,r.kt)("strong",{parentName:"p"},"Foundation VM")," through foundation IP ",(0,r.kt)("inlineCode",{parentName:"p"},"10.42.xx.45")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Login to the console of Foundation VM"',title:'"Login',to:!0,the:!0,console:!0,of:!0,Foundation:!0,'VM"':!0},"ssh -l nutanix <Foundation VM IP>  \n# provide default password for nutanix user \n# when in doubt ask your instructor for login credentials\n# example\n# ssh -l nutanix 10.42.xx.51     \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd foundation\ncd nos\ncurl -O http://10.42.194.11/workshop_staging/AOS%206.5%20LTS/nutanix_installer_package-release-fraser-6.5-stable-c1cb24df40aaa4aa848f84003a27af28cc058e58-x86_64.tar.gz\n")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you see ",(0,r.kt)("strong",{parentName:"p"},"100%")," finished status to confirm that AOS 6.5 package has been downloaded to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/foundation/nos")," folder."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From you VDI computer, open Google Chrome browser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access Foundation UI via any browser at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<Foundation VM IP>")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cancel")," any prompts to upgrade Foundation software.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill the following fields (with data you have noted in the beginning): "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Select your hardware platform"),": Nutanix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Netmask of Every Host and CVM")," - 255.255.255.128"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gateway of Every Host and CVM")," - 10.42.xx.1 (The ",(0,r.kt)("strong",{parentName:"li"},"xx")," octet will be specific to your cluster)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gateway of Every IPMI")," - 10.42.xx.1 (The ",(0,r.kt)("strong",{parentName:"li"},"xx")," octet will be specific to your cluster)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Netmask of Every IPMI")," - 255.255.255.128"),(0,r.kt)("li",{parentName:"ul"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Double-check this installer's networking step")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Skip this Validation")," - selected")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(9783).Z,width:"619",height:"798"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Next")," at the bottom of the page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In new foundation page, Tools menu choose ",(0,r.kt)("strong",{parentName:"p"},"Remove Unselected Rows")," to clear all auto discovered nodes (if there are any)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(966).Z,width:"992",height:"332"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add nodes manually")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(8869).Z,width:"981",height:"186"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in block information, fill in the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of blocks")," - 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of nodes")," - 4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How should these nodes be reached?")," - choose ",(0,r.kt)("strong",{parentName:"li"},"I have configured their IPMIs to my desireed IP addresses")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(5616).Z,width:"832",height:"1026"})),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Foundation will automatically communicate with the IPMI over the routed IP network and get information to do the installation. "),(0,r.kt)("p",{parentName:"admonition"},"There is also an option to connect to IPMIs using the MAC (hardware) address when you have connectivity to the physical network. But in this lab, we will be using IP addresses as we are in a routed network. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Tools")," and select ",(0,r.kt)("strong",{parentName:"p"},"Range Autofill")," from the drop down list")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replacing the octet(s) that correspond to your HPOC network, fill out the ",(0,r.kt)("strong",{parentName:"p"},"top row")," fields with the following details: this will automatically populate the IP addresses in the node rows."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IPMI IP")," - 10.42.xx.33"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hypervisor IP")," - 10.42.xx.25"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CVM IP")," - 10.42.xx.29"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HOSTNAME OF HOST")," -- POCxx-1")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(6897).Z,width:"1918",height:"572"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Cluster")," page, select ",(0,r.kt)("strong",{parentName:"p"},"Skip automatic cluster formation (e.g. you will use command-line)")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We need to skip cluster creation at this time as we will be using command line to do this. "),(0,r.kt)("p",{parentName:"admonition"},"This allows us to configure our cluster with RF2 or RF1 based on the number of SSDs in the nodes which you determined in this ",(0,r.kt)("a",{parentName:"p",href:"/rh-ocp/diyfoundation/#confirm-the-number-of-ssds"},"step"),".")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(419).Z,width:"557",height:"215"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Select an AOS installer")," - Select your uploaded (through\ncommand line in previous steps)\n",(0,r.kt)("em",{parentName:"li"},"nutanix_installer_package-release-","*",".tar.gz")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Arguments to the AOS Installer (Optional)")," - leave blank")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(624).Z,width:"675",height:"329"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the following fields and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Select a hypervisor installer")," - AHV, AHV installer bundled inside the AOS installer")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(2420).Z,width:"667",height:"229"})),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Every AOS release contains a version of AHV bundle with that release. However, other hypervisor binaries will need to uploaded invidually."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the existing IPMI credentials as ",(0,r.kt)("strong",{parentName:"p"},"ADMIN")," and ",(0,r.kt)("strong",{parentName:"p"},"ADMIN")," for all three nodes. Note that this will be different in the field."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(9345).Z,width:"660",height:"282"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Start"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the installer will be active by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Won't Sleep")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(8060).Z,width:"310",height:"142"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Warning of Data Loss Possibility")," window, click on ",(0,r.kt)("strong",{parentName:"p"},"Ignore and Re-image")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(1673).Z,width:"333",height:"318"})),(0,r.kt)("p",{parentName:"li"},"Foundation will run a couple of tests to make sure all the configuration details you have provided are correct and then direct you the installation progress page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Log")," link to view the realtime log output from your node."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(5752).Z,width:"973",height:"383"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor the foundation process until completion"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(7816).Z,width:"976",height:"379"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once Foundation finishes successfully, logon to any CVM using putty/terminal and execute the following commands to create a cluster "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - nutanix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - collected from your instructor")),(0,r.kt)("p",{parentName:"li"},"If you have at least ",(0,r.kt)("strong",{parentName:"p"},"2 SSDs")," in each of your nodes: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"2 SSDs",label:"2 SSDs",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cluster -s IP_CVM1,IP_CVM2,IP_CVM3,IP_CVM4 create  \n"))),(0,r.kt)(i.Z,{value:"Sample commands",label:"Sample command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cluster -s 10.42.20.29,10.42.20.30,10.42.20.31,10.42.20.32 create\n")))),(0,r.kt)("p",{parentName:"li"},"If you have ",(0,r.kt)("strong",{parentName:"p"},"1 SSD")," in each of your nodes: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1 SSD",label:"1 SSD",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cluster -s IP_CVM1,IP_CVM2,IP_CVM3,IP_CVM4 --redundancy_factor=1 create  \n"))),(0,r.kt)(i.Z,{value:"Sample commands",label:"Sample command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cluster -s 10.42.20.29,10.42.20.30,10.42.20.31,10.42.20.32 --redundancy_factor=1 create\n")))))),(0,r.kt)("ol",{start:24},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the command finishes and successfully creates a cluster. Contact your instructor for troubleshooting help if anything were to fail.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the cluster create step finishes, we need to configure our cluster so we can access it. Execute the following steps in sequence inside the CVM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Use the same cluster password as your cluster reservation"',title:'"Use',the:!0,same:!0,cluster:!0,password:!0,as:!0,your:!0,'reservation"':!0},"ncli user reset-password user-name=admin password=XXXXXX\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ncli cluster set-timezone timezone=UTC\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Use the same cluster name as your cluster reservation "',title:'"Use',the:!0,same:!0,cluster:!0,name:!0,as:!0,your:!0,reservation:!0,'"':!0},"ncli cluster edit-params new-name=POC0xx\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ncli cluster add-to-name-servers servers=10.42.194.10\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ncli cluster add-to-ntp-servers servers=0.pool.ntp.org,1.pool.ntp.org,2.pool.ntp.org\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ncli cluster set-external-ip-address external-ip-address=10.42.xx.37 \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To access your cluster's GUI, browse to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Cluster Virtual IP>:9440")," (10.42.xx.37)in your browser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in with the following credentials:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - admin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - password from previous cluster creation step")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:a(8744).Z,width:"650",height:"364"})))),(0,r.kt)("p",null,"You have now successfully prepared your Nutanix cluster and it is now ready to host workloads. "),(0,r.kt)("p",null,"In the next section we will deploy Prism Central VM which will be used to provide infrastructure services on your cluster."))}c.isMDXComponent=!0},5752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/foundation-progress-2fca612354f4a2960b83d33780c66949.png"},7816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/foundation-success-b3f6663f86112f924327a5ef324c47e3.png"},1673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ignore_warning-21adb47e62ec3e64ddc1920fc882eb42.png"},9783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image014-2b761787eb943054ca592869122ebe33.png"},8869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image0141-b7df8c5e981fdfd6bae43ed90429f754.png"},2420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image020-dbae9f547fb654a4afe216e34550c743.png"},8060:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image021-confirm-2821dd4bb240aaa34e9b03b5e8081f6b.png"},8744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image024-b1428caf3c1f5b91cddcb67ab5ffc453.png"},5616:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image104-275fd5770ffac3181df5c57cc4ccfd89.png"},6897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image105-562bae0689d5d86fe611c554d004dc94.png"},624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image106-2607395ba1624e87a18309588999ba44.png"},9345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ipmi_creds-7666875b9485331a854bc3a77dc372fd.png"},966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-nodes-4e443361f384082ed209e3b17eb87145.png"},419:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/skip_cluster_check-14890b3bc886fc0ab3254d00b17571b5.png"}}]);
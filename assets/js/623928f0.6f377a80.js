"use strict";(self.webpackChunkrh_ocp=self.webpackChunkrh_ocp||[]).push([[3852],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),p=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:d,className:k}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??N.find((e=>e.props.default))?.props.value??N[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[C,w]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=d){const e=b[d];null!=e&&e!==C&&h.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=x.indexOf(t),n=h[a].value;n!==C&&(v(t),w(n),null!=d&&y(d,String(n)))},A=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},k)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:A,onClick:P},l,{className:(0,o.Z)("tabs__item",m,l?.className,{"tabs__item--active":C===t})}),a??t)}))),t?(0,r.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},4770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const o={title:"Pre-requisites"},l=void 0,i={unversionedId:"ocp_ipi_install/ocp_ipi_pre_reqs",id:"ocp_ipi_install/ocp_ipi_pre_reqs",title:"Pre-requisites",description:"Preparing Pre-requisites",source:"@site/docs/ocp_ipi_install/ocp_ipi_pre_reqs.mdx",sourceDirName:"ocp_ipi_install",slug:"/ocp_ipi_install/ocp_ipi_pre_reqs",permalink:"/rh-ocp/ocp_ipi_install/ocp_ipi_pre_reqs",draft:!1,editUrl:"https://github.com/nutanix-japan/rh-ocp/edit/main/docs/ocp_ipi_install/ocp_ipi_pre_reqs.mdx",tags:[],version:"current",lastUpdatedBy:"Nutanix Japan",lastUpdatedAt:1682652160,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{title:"Pre-requisites"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/rh-ocp/ocp_ipi_install/ocp_ipi_intro"},next:{title:"Create Configuration Manifests",permalink:"/rh-ocp/ocp_ipi_install/ocp_ipi_config_file"}},s={},p=[{value:"Preparing Pre-requisites",id:"preparing-pre-requisites",level:2},{value:"Preparing your HPOC cluster",id:"preparing-your-hpoc-cluster",level:3},{value:"AHV Networking",id:"ahv-networking",level:3},{value:"Add DNS Records",id:"add-dns-records",level:3},{value:"Downloading OCP Tools",id:"downloading-ocp-tools",level:3},{value:"Creating and Installing SSL Certificate on Prism Central",id:"creating-and-installing-ssl-certificate-on-prism-central",level:3},{value:"Setting up Cloud Credential Operator Utility (CCOCTL)",id:"setting-up-cloud-credential-operator-utility-ccoctl",level:3}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preparing-pre-requisites"},"Preparing Pre-requisites"),(0,r.kt)("p",null,"We will be deploying OCP cluster using IPI method once the following pre-requisites are met. Be sure to make sure all pre-requisites are prepared."),(0,r.kt)("h3",{id:"preparing-your-hpoc-cluster"},"Preparing your HPOC cluster"),(0,r.kt)("admonition",{title:"Do you have enough compute resources?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are working on a HPOC cluster, make sure there are enough resources available to deploy a new OCP cluster."),(0,r.kt)("p",{parentName:"admonition"},"Remove existing OCP clusters that you don't require anymore."),(0,r.kt)("p",{parentName:"admonition"},"For latest OCP resource requirements refer to OpenShift portal ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/installing/installing_platform_agnostic/installing-platform-agnostic.html#installation-minimum-resource-requirements_installing-platform-agnostic"},"here.")),(0,r.kt)("p",{parentName:"admonition"},"At the time of writing this document the following resources are created by OCP IPI installer."),(0,r.kt)("p",{parentName:"admonition"},"We will create the following minimum amount of resources:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OCP Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"vCPU"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Master"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Worker"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS, RHEL 7.9, or RHEL 8.4"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB")))),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Reserve some additional space for bootstrap vms (deleted after install) and RHCOS image files."))),(0,r.kt)("h3",{id:"ahv-networking"},"AHV Networking"),(0,r.kt)("p",null,"We will first find two IPs for OCP ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apps")," ingress endpoints in our network and add it to the ",(0,r.kt)("strong",{parentName:"p"},"Primary")," IPAM network blacklist. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the CIDR range for your  ",(0,r.kt)("strong",{parentName:"p"},"Primary")," IPAM network either from ",(0,r.kt)("a",{parentName:"p",href:"https://rx.corp.nutanix.com/"},"RX")," or from your instrutor"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="CIDR example for your Nutanix cluster"',title:'"CIDR',example:!0,for:!0,your:!0,Nutanix:!0,'cluster"':!0},"10.38.18.192/26\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to your UserXX-LinuxToolsVM (deployed on the HPOC cluster) using Mac Terminal or Windows Putty "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Username"),": root")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Password"),": default "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the UserXX-LinuxToolsVM "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum update -y\nyum install -y nmap\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find two unused static IP addresses"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -v -sn  <your CIDR>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample command"',title:'"Sample','command"':!0},"nmap -v -sn 10.38.18.192/26\n\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{1,2} title="Sample output - choose the first two consecutive IPs"',"{1,2}":!0,title:'"Sample',output:!0,"-":!0,choose:!0,the:!0,first:!0,two:!0,consecutive:!0,'IPs"':!0},"Nmap scan report for 10.38.18.219 [host down] \nNmap scan report for 10.38.18.220 [host down]\nNmap scan report for 10.38.18.221\nHost is up (-0.098s latency).\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to any CVM in your cluster and execute the following to add chosen static IPs to the ",(0,r.kt)("strong",{parentName:"p"},"Primary")," IPAM network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username: nutanix"),(0,r.kt)("li",{parentName:"ul"},"Password: your cluster password ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"acli net.add_to_ip_blacklist <your-ipam-ahv-network> ip_list=10.38.18.219,10.38.18.220\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample command"',title:'"Sample','command"':!0},"acli net.add_to_ip_blacklist Primary ip_list=10.38.18.219,10.38.18.220\n")))),(0,r.kt)("h3",{id:"add-dns-records"},"Add DNS Records"),(0,r.kt)("p",null,"In this section we will add PC, API and APPS Ingress DNS records for lookup by OCP IPI installer."),(0,r.kt)("p",null,"Your OCP cluster's name becomes a subdomain in your DNS zone ",(0,r.kt)("inlineCode",{parentName:"p"},"ntnxlab.local"),". All OCP cluster related lookups are located within subdomain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Main domain -  ",(0,r.kt)("inlineCode",{parentName:"li"},"ntnxlab.local")," (this gets created with your HPOC reservation)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sub domain - ",(0,r.kt)("inlineCode",{parentName:"li"},"xyz.ntnxlab.local")," (xyz is your OCP cluster's name)")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to the AutoAD windows VM "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Username"),": administrator")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Password"),": default"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will add the following entries to DNS server using the two consecutive IPs you found in the previous section"),(0,r.kt)("admonition",{parentName:"li",title:"Use your HPOC cluster's IP Addresses",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The IP addresses in the following commands are used as an example. You should use IP address details that belong to your HPOC cluster. For information on locating your cluster IP see Getting Started ",(0,r.kt)("a",{parentName:"p",href:"/rh-ocp/#networking"},"Networking")," section. ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"10.38.18.219   api.your_ocp_cluster_subdomain.ntnxlab.local\n10.38.18.220   *.apps.your_ocp_cluster_subdomain.ntnxlab.local\n10.38.18.201   pc.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell as Administrator and create the two A records"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the API A record - use your own subdomain"',title:'"Add',the:!0,API:!0,A:!0,record:!0,"-":!0,use:!0,your:!0,own:!0,'subdomain"':!0},"Add-DnsServerResourceRecordA -Name api.<your_ocp_cluster_subdomain> -IPv4Address <your API IP> -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the apps Ingress A record - use your own subdomain"',title:'"Add',the:!0,apps:!0,Ingress:!0,A:!0,record:!0,"-":!0,use:!0,your:!0,own:!0,'subdomain"':!0},"Add-DnsServerResourceRecordA -Name *.apps.<your_ocp_cluster_subdomain> -IPv4Address <your Ingress IP> -ZoneName ntnxlab.local -ZoneScope ntnxlab.local \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the Prism Central A record"',title:'"Add',the:!0,Prism:!0,Central:!0,A:!0,'record"':!0},"Add-DnsServerResourceRecordA -Name pc -IPv4Address <your PC IP> -ZoneName ntnxlab.local -ZoneScope ntnxlab.local \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:"title=\"Sample commands with 'xyz' as a subdomain and your OCP cluster name\"",title:'"Sample',commands:!0,with:!0,"'xyz'":!0,as:!0,a:!0,subdomain:!0,and:!0,your:!0,OCP:!0,cluster:!0,'name"':!0},"Add-DnsServerResourceRecordA -Name api.xyz -IPv4Address 10.38.18.219 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\nAdd-DnsServerResourceRecordA -Name *.apps.xyz -IPv4Address 10.38.18.220 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local \nAdd-DnsServerResourceRecordA -Name pc -IPv4Address 10.38.18.201 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test name resolution for added entries"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:"{6,13,20}","{6,13,20}":!0},"nslookup api.xyz.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: api.xyz.ntnxlab.local\nAddress: 10.38.18.219 \n#\nnslookup myapp.apps.xyz.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: myapp.apps.xyz.ntnxlab.local\nAddress: 10.38.18.220\n#\nnslookup pc.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: pc.ntnxlab.local\nAddress: 10.38.3.201\n")))),(0,r.kt)("h3",{id:"downloading-ocp-tools"},"Downloading OCP Tools"),(0,r.kt)("p",null,"We will need to the OCP tools mentioned in the pre-requisites section to prepare our environment"),(0,r.kt)("admonition",{title:"OCP Tools information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can get the URLs to download the tools and pull secret from RedHat Console: "),(0,r.kt)("p",{parentName:"admonition"},"Openshift > Clusters > Create Clusters > Datacenter > ",(0,r.kt)("a",{parentName:"p",href:"https://console.redhat.com/openshift/install/nutanix/installer-provisioned"},"Nutanix AOS")),(0,r.kt)("p",{parentName:"admonition"},"In this section please using the download links provided is also ok. ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to UserXX-LinuxToolsVM and download the binaries "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Username"),": root")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Password"),": default ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir xyz\ncd xyz\ncurl -O https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/stable/openshift-install-linux.tar.gz\ncurl -O https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/stable/openshift-client-linux.tar.gz \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the binaries and copy them to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," for pathless access"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvf openshift-install-linux.tar.gz\ntar xvf openshift-client-linux.tar.gz \n# Adding to path \ncp kubectl /usr/local/bin\ncp oc /usr/local/bin\ncp openshift-install /usr/local/bin\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.redhat.com/openshift/install/nutanix/installer-provisioned"},"IPI Installer Web Console")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Copy pull secret")," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now that the pull secret value is in your clipboard, paste the contents string to a pull secret file in the same directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi pull_secret.json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure all the files are in the xyz directory "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="Directory listing"',"{5}":!0,title:'"Directory','listing"':!0},"-rwxr-xr-x 2 root root 123877776 Aug 29 16:30 kubectl\n-rwxr-xr-x 2 root root 123877776 Aug 29 16:30 oc\ndrwxr-x--- 2 root root      4096 Sep 22 06:56 openshift\n-rwxr-xr-x 1 root root 481972224 Sep  1 16:07 openshift-install\n-rw-r--r-- 1 root root      2819 Sep 22 05:27 pull_secret.json\n")))),(0,r.kt)("h3",{id:"creating-and-installing-ssl-certificate-on-prism-central"},"Creating and Installing SSL Certificate on Prism Central"),(0,r.kt)("p",null,"In this section we will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a Root CA on your UserXX-LinuxToolsVM"),(0,r.kt)("li",{parentName:"ul"},"Create a Certificate Signing Request (CSR) for Prism Central "),(0,r.kt)("li",{parentName:"ul"},"Sign the CSR using Root CA's private key")),(0,r.kt)("p",null,"All this will be done on the UserXX-LinuxToolsVM."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the UserXX-LinuxToolsVM, Create a the Root CA certificates"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa -out rootCA.key 2048\nopenssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.crt\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Execution example - make sure to retype the input values as shown here"',title:'"Execution',example:!0,"-":!0,make:!0,sure:!0,to:!0,retype:!0,the:!0,input:!0,values:!0,as:!0,shown:!0,'here"':!0},"openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.crt\n##\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [XX]:JP\nState or Province Name (full name) []:Chiba\nLocality Name (eg, city) [Default City]:Kashiwa\nOrganization Name (eg, company) [Default Company Ltd]:nutanix\nOrganizational Unit Name (eg, section) []:rootca\nCommon Name (eg, your name or your server's hostname) []:rootca.ntnxlab.local\nEmail Address []:first.last@nutanix.com\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a configuration file for Prism Central's certificate parameters "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > pc.conf\n[ req ]\ndefault_bits    = 2048\ndistinguished_name = req_distinguished_name\nreq_extensions   = req_ext\n[ req_distinguished_name ]\ncountryName     = Country Name (2 letter code)\nstateOrProvinceName = State or Province Name\nlocalityName    = Locality Name\norganizationName  = Organization Name\norganizationName_default = pc\ncommonName     = Common Name\ncommonName_default     = ntnxlab.local\n[ req_ext ]\nsubjectAltName = @alt_names\n[alt_names]\nDNS.1  = pc.ntnxlab.local\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the private key and CSR for Prism Central"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa -out pc.key 2048\nopenssl req -new -sha256  -key pc.key -config ./pc.conf -out pc.csr\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Execution example - make sure to retype the input values as shown here"',title:'"Execution',example:!0,"-":!0,make:!0,sure:!0,to:!0,retype:!0,the:!0,input:!0,values:!0,as:!0,shown:!0,'here"':!0},"openssl req -new -sha256  -key pc.key -config ./pc.conf -out pc.csr\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) []:JP\nState or Province Name []:Chiba\nLocality Name []:Kashiwa\nOrganization Name [pc]:pc\nCommon Name [ntnxlab.local]:ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your Prism Central's  DNS details from the CSR you created"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -noout -text -in pc.csr | grep DNS\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"DNS:pc.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file called pctext to store the DNS/SAN names"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "subjectAltName = DNS:pc.ntnxlab.local" >> pctext\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the CSR using rootCA's private key and produce a certificate for Prism Central"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -req -in pc.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out pc.crt -days 1024 -sha256 -extfile pctext\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List the contents of the directory to make sure pc.crt, pc.key and rootCA.crt files are present"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l *.crt *.key | awk '{print $9}'\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"pc.crt               ## Prism Central's public certificate signed by Root CA\npc.key               ## Prism Central's private key\nrootCA.crt           ## Root CA's public certificate\nrootCA.key           ## Root CA's private key\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cat")," out the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.crt")," and copy them to the UserXX-WindowsToolsPC in separate files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"cat rootCA.crt\ncat pc.key\ncat pc.crt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In UserXX-WindowsToolsPC, use Notepad to create three new files with the same names")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ouput of previous cat command of ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.crt")," files into to your UserXX-WindowsToolsPC VM in any directory"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5870).Z,width:"925",height:"416"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to Prism Central Web GUI on the WindowsToolsVM"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://pc.ntnxlab.local/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > SSL Certificate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Replace Certificate")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Import Key and Certificate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the following:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Private Key Type")," - RSA 2048 bit ")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Private Key")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.key"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Public Certificate")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.crt"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CA Certificate/Chain")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Import Files")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6249).Z,width:"410",height:"525"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prism Central GUI will accept the certificate and restart for the changes to take effect. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3137).Z,width:"441",height:"264"})),(0,r.kt)("p",{parentName:"li"},"You have now successfully installed SSL certificate on Prism Central."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not proceed to the next steps until Prism Central Certificate is installed without errors. "),(0,r.kt)("p",{parentName:"admonition"},"Contact your lab instructors if you need help with troubleshooting SSL certificate issues."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To make sure that the WindowsToolsPC has the rootCA certificate installed in the local, double click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt")," file in windows file explorer and select ",(0,r.kt)("strong",{parentName:"p"},"install Certificate")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5701).Z,width:"622",height:"521"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Local Machine")," as Store Location and click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Place all certificates in the following store")," and click ",(0,r.kt)("strong",{parentName:"p"},"Browse"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Trusted Root Certification Authorities")," and click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Finish"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will notice that the browser has no warning about about an untrusted PC site "),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You may need to restart your browser if this isn't showing as a trusted site.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8470).Z,width:"1071",height:"709"})),(0,r.kt)("p",{parentName:"li"},"You have completed the configuring SSL certificate pre-requisites for IPI installation. "))),(0,r.kt)("h3",{id:"setting-up-cloud-credential-operator-utility-ccoctl"},"Setting up Cloud Credential Operator Utility (CCOCTL)"),(0,r.kt)("p",null,"Setting up of is necessary for Nutanix cluster credentials to be used with OCP cluster. "),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator.html"},"Cloud Credential Operator CCO")," for more information. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the UserXX-LinuxToolsVM, download and setup ",(0,r.kt)("inlineCode",{parentName:"p"},"ccoctl")," using the following commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RELEASE_IMAGE=$(openshift-install version | awk '/release image/ {print $3}')\n\nCCO_IMAGE=$(oc adm release info --image-for='cloud-credential-operator' $RELEASE_IMAGE)\n\noc image extract $CCO_IMAGE --file=\"/usr/bin/ccoctl\" -a pull_secret.json\n\nchmod u+x ccoctl && cp ccoctl /usr/local/bin/ \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ccoctl file is present "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lh ccoctl \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"-rwxr----- 1 root root 69M Sep 13 04:09 ccoctl\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Prism Central credentials file in ",(0,r.kt)("inlineCode",{parentName:"p"},"creds")," directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{8,9}","{8,9}":!0},'mkdir creds\n##\ncat << EOF > creds/pc_credentials.yaml\ncredentials:\n- type: basic_auth\n  data:\n    prismCentral:\n      username: "admin"\n      password: "PC-PASSWORD"\nEOF\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"pc_credentials.yaml")," file to change your Prism Central password"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi pc_credentials.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the CredentialsRequests objects for Nutanix Prism Central and store in a ",(0,r.kt)("inlineCode",{parentName:"p"},"credreqs")," directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm release extract --credentials-requests --cloud=nutanix --to=credreqs -a pull_secret.json $RELEASE_IMAGE\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ccoctl tool to process the CredentialsRequests objects and generate secret manifest files. These manifests file will be used during OCP cluster Certification"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ccoctl nutanix create-shared-secrets --credentials-requests-dir=credreqs --output-dir=. --credentials-source-filepath=creds/pc_credentials.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"2022/09/29 23:53:36 Saved credentials configuration to: manifests/openshift-machine-api-nutanix-credentials-credentials.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests/openshift-machine-api-nutanix-credentials-credentials.yaml")," file to make sure the contents are good"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:"{8}","{8}":!0},"apiVersion: v1\nkind: Secret\nmetadata:\n   name: nutanix-credentials\n   namespace: openshift-machine-api\ntype: Opaque\ndata:\n   credentials: W3sidHlwZSI6ImJhc2ljX2F1dGgiLCJkYXRhIjp7InByaXNtQ2VudHJhbCI6eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJ0ZWNoWDIwMjAhIn0sInByaXNtRWxlbWVudHMiOm51bGx9fV0=\n")))),(0,r.kt)("p",null,"Now that we have all pre-requisites completed, let us move on to creating the OCP cluster IPI installation manifest"))}m.isMDXComponent=!0},5870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/certs-on-wintools-54cacbd7b8f33c645ed9fd8303da6395.png"},6249:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import-certs-c67cb70ddc8ab5c92d0970e0acad1da2.png"},5701:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/install-rootCA-009b58bcaf7e2aa262de0cf422f91314.png"},3137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pc-crt-installed-452f74cbe7f3751ec61f46b6ecd22829.png"},8470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trusted-pc-6662d370eb4ddb64be854cc28db7ca7b.png"}}]);
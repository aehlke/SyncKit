(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[3486],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3737:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],d={},c="DefaultCoreDataAdapterProvider",l={unversionedId:"api/coredata/DefaultCoreDataAdapterProvider",id:"api/coredata/DefaultCoreDataAdapterProvider",isDocsHomePage:!1,title:"DefaultCoreDataAdapterProvider",description:"Default implementation of the AdapterProvider. Creates a CoreDataAdapter for the the given NSManagedObjectContext and record zone ID.",source:"@site/docs/api/coredata/DefaultCoreDataAdapterProvider.md",sourceDirName:"api/coredata",slug:"/api/coredata/DefaultCoreDataAdapterProvider",permalink:"/SyncKit/api/coredata/DefaultCoreDataAdapterProvider",version:"current",frontMatter:{},sidebar:"API",previous:{title:"DefaultCoreDataAdapterDelegate",permalink:"/SyncKit/api/coredata/DefaultCoreDataAdapterDelegate"},next:{title:"DefaultCoreDataStackProvider",permalink:"/SyncKit/api/coredata/DefaultCoreDataStackProvider"}},p=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Initializers",id:"initializers",children:[{value:"<code>init(managedObjectContext:zoneID:appGroup:)</code>",id:"initmanagedobjectcontextzoneidappgroup",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>adapter</code>",id:"adapter",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)</code>",id:"cloudkitsynchronizer_modeladapterforrecordzoneid",children:[]},{value:"<code>cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)</code>",id:"cloudkitsynchronizer_zonewasdeletedwithzoneid",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"defaultcoredataadapterprovider"},"DefaultCoreDataAdapterProvider"),(0,o.kt)("p",null,"Default implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AdapterProvider"),". Creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreDataAdapter")," for the the given ",(0,o.kt)("inlineCode",{parentName:"p"},"NSManagedObjectContext")," and record zone ID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class DefaultCoreDataAdapterProvider: NSObject, AdapterProvider \n")),(0,o.kt)("h2",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../core/AdapterProvider"},(0,o.kt)("inlineCode",{parentName:"a"},"AdapterProvider")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NSObject")),(0,o.kt)("h2",{id:"initializers"},"Initializers"),(0,o.kt)("h3",{id:"initmanagedobjectcontextzoneidappgroup"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(managedObjectContext:zoneID:appGroup:)")),(0,o.kt)("p",null,"Create a new model adapter provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public init(managedObjectContext: NSManagedObjectContext, zoneID: CKRecordZone.ID, appGroup: String? = nil) \n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"managedObjectContext: ",(0,o.kt)("inlineCode",{parentName:"li"},"NSManagedObjectContext")," to be used by the model adapter."),(0,o.kt)("li",{parentName:"ul"},"zoneID: ",(0,o.kt)("inlineCode",{parentName:"li"},"CKRecordZone.ID")," to be used by the model adapter."),(0,o.kt)("li",{parentName:"ul"},"appGroup: Optional app group.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"adapter"},(0,o.kt)("inlineCode",{parentName:"h3"},"adapter")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public private(set) var adapter: CoreDataAdapter!\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"cloudkitsynchronizer_modeladapterforrecordzoneid"},(0,o.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:modelAdapterForRecordZoneID:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, modelAdapterForRecordZoneID recordZoneID: CKRecordZone.ID) -> ModelAdapter? \n")),(0,o.kt)("h3",{id:"cloudkitsynchronizer_zonewasdeletedwithzoneid"},(0,o.kt)("inlineCode",{parentName:"h3"},"cloudKitSynchronizer(_:zoneWasDeletedWithZoneID:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public func cloudKitSynchronizer(_ synchronizer: CloudKitSynchronizer, zoneWasDeletedWithZoneID recordZoneID: CKRecordZone.ID) \n")))}s.isMDXComponent=!0}}]);
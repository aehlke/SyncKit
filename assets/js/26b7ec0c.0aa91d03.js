(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[5526],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return y}});var i=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=i.createContext({}),d=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=d(r),y=t,p=u["".concat(l,".").concat(y)]||u[y]||h[y]||o;return r?i.createElement(p,c(c({ref:n},s),{},{components:r})):i.createElement(p,c({ref:n},s))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var d=2;d<o;d++)c[d]=r[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6122:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var i=r(2122),t=r(9756),o=(r(7294),r(3905)),c=["components"],a={},l="CloudKitSynchronizerDelegate",d={unversionedId:"api/core/CloudKitSynchronizerDelegate",id:"api/core/CloudKitSynchronizerDelegate",isDocsHomePage:!1,title:"CloudKitSynchronizerDelegate",description:"` swift",source:"@site/docs/api/core/CloudKitSynchronizerDelegate.md",sourceDirName:"api/core",slug:"/api/core/CloudKitSynchronizerDelegate",permalink:"/SyncKit/api/core/CloudKitSynchronizerDelegate",version:"current",frontMatter:{},sidebar:"API",previous:{title:"CloudKitSynchronizer",permalink:"/SyncKit/api/core/CloudKitSynchronizer"},next:{title:"CloudKitSynchronizer.SyncError",permalink:"/SyncKit/api/core/CloudKitSynchronizer_SyncError"}},s=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Requirements",id:"requirements",children:[{value:"synchronizerWillStartSyncing(_:\u200b)",id:"synchronizerwillstartsyncing_",children:[]},{value:"synchronizerWillCheckForChanges(_:\u200b)",id:"synchronizerwillcheckforchanges_",children:[]},{value:"synchronizerWillFetchChanges(_:\u200bin:\u200b)",id:"synchronizerwillfetchchanges_in",children:[]},{value:"synchronizerDidFetchChanges(_:\u200bin:\u200b)",id:"synchronizerdidfetchchanges_in",children:[]},{value:"synchronizerWillUploadChanges(_:\u200bto:\u200b)",id:"synchronizerwilluploadchanges_to",children:[]},{value:"synchronizerDidSync(_:\u200b)",id:"synchronizerdidsync_",children:[]},{value:"synchronizerDidfailToSync(_:\u200berror:\u200b)",id:"synchronizerdidfailtosync_error",children:[]},{value:"synchronizer(_:\u200bdidAddAdapter:\u200bforRecordZoneID:\u200b)",id:"synchronizer_didaddadapterforrecordzoneid",children:[]},{value:"synchronizer(_:\u200bzoneIDWasDeleted:\u200b)",id:"synchronizer_zoneidwasdeleted",children:[]}]}],h={toc:s};function u(e){var n=e.components,r=(0,t.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloudkitsynchronizerdelegate"},"CloudKitSynchronizerDelegate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public protocol CloudKitSynchronizerDelegate: AnyObject \n")),(0,o.kt)("h2",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AnyObject")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"synchronizerwillstartsyncing_"},"synchronizerWillStartSyncing(","_",":\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerWillStartSyncing(_ synchronizer: CloudKitSynchronizer)\n")),(0,o.kt)("h3",{id:"synchronizerwillcheckforchanges_"},"synchronizerWillCheckForChanges(","_",":\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerWillCheckForChanges(_ synchronizer: CloudKitSynchronizer)\n")),(0,o.kt)("h3",{id:"synchronizerwillfetchchanges_in"},"synchronizerWillFetchChanges(","_",":\u200bin:\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerWillFetchChanges(_ synchronizer: CloudKitSynchronizer, in recordZone: CKRecordZone.ID)\n")),(0,o.kt)("h3",{id:"synchronizerdidfetchchanges_in"},"synchronizerDidFetchChanges(","_",":\u200bin:\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerDidFetchChanges(_ synchronizer: CloudKitSynchronizer, in recordZone: CKRecordZone.ID)\n")),(0,o.kt)("h3",{id:"synchronizerwilluploadchanges_to"},"synchronizerWillUploadChanges(","_",":\u200bto:\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerWillUploadChanges(_ synchronizer: CloudKitSynchronizer, to recordZone: CKRecordZone.ID)\n")),(0,o.kt)("h3",{id:"synchronizerdidsync_"},"synchronizerDidSync(","_",":\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerDidSync(_ synchronizer: CloudKitSynchronizer)\n")),(0,o.kt)("h3",{id:"synchronizerdidfailtosync_error"},"synchronizerDidfailToSync(","_",":\u200berror:\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizerDidfailToSync(_ synchronizer: CloudKitSynchronizer, error: Error)\n")),(0,o.kt)("h3",{id:"synchronizer_didaddadapterforrecordzoneid"},"synchronizer(","_",":\u200bdidAddAdapter:\u200bforRecordZoneID:\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizer(_ synchronizer: CloudKitSynchronizer, didAddAdapter adapter: ModelAdapter, forRecordZoneID: CKRecordZone.ID)\n")),(0,o.kt)("h3",{id:"synchronizer_zoneidwasdeleted"},"synchronizer(","_",":\u200bzoneIDWasDeleted:\u200b)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func synchronizer(_ synchronizer: CloudKitSynchronizer, zoneIDWasDeleted zoneID: CKRecordZone.ID)\n")))}u.isMDXComponent=!0}}]);
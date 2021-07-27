(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[1616],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9866:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},l="CloudKitDatabaseAdapter",d={unversionedId:"api/core/CloudKitDatabaseAdapter",id:"api/core/CloudKitDatabaseAdapter",isDocsHomePage:!1,title:"CloudKitDatabaseAdapter",description:"` swift",source:"@site/docs/api/core/CloudKitDatabaseAdapter.md",sourceDirName:"api/core",slug:"/api/core/CloudKitDatabaseAdapter",permalink:"/SyncKit/api/core/CloudKitDatabaseAdapter",version:"current",frontMatter:{},sidebar:"API",previous:{title:"AdapterProvider",permalink:"/SyncKit/api/core/AdapterProvider"},next:{title:"CloudKitSynchronizer",permalink:"/SyncKit/api/core/CloudKitSynchronizer"}},p=[{value:"Requirements",id:"requirements",children:[{value:"add(_:\u200b)",id:"add_",children:[]},{value:"save(zone:\u200bcompletionHandler:\u200b)",id:"savezonecompletionhandler",children:[]},{value:"fetch(withRecordZoneID:\u200bcompletionHandler:\u200b)",id:"fetchwithrecordzoneidcompletionhandler",children:[]},{value:"fetch(withRecordID:\u200bcompletionHandler:\u200b)",id:"fetchwithrecordidcompletionhandler",children:[]},{value:"delete(withRecordZoneID:\u200bcompletionHandler:\u200b)",id:"deletewithrecordzoneidcompletionhandler",children:[]},{value:"databaseScope",id:"databasescope",children:[]},{value:"fetchAllSubscriptions(completionHandler:\u200b)",id:"fetchallsubscriptionscompletionhandler",children:[]},{value:"save(subscription:\u200bcompletionHandler:\u200b)",id:"savesubscriptioncompletionhandler",children:[]},{value:"delete(withSubscriptionID:\u200bcompletionHandler:\u200b)",id:"deletewithsubscriptionidcompletionhandler",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloudkitdatabaseadapter"},"CloudKitDatabaseAdapter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public protocol CloudKitDatabaseAdapter \n")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"add_"},"add(","_",":\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449116-add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func add(_ operation: CKDatabaseOperation)\n")),(0,a.kt)("h3",{id:"savezonecompletionhandler"},"save(zone:\u200bcompletionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449114-save"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func save(zone: CKRecordZone, completionHandler: @escaping (CKRecordZone?, Error?) -> Void)\n")),(0,a.kt)("h3",{id:"fetchwithrecordzoneidcompletionhandler"},"fetch(withRecordZoneID:\u200bcompletionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449104-fetch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func fetch(withRecordZoneID zoneID: CKRecordZone.ID, completionHandler: @escaping (CKRecordZone?, Error?) -> Void)\n")),(0,a.kt)("h3",{id:"fetchwithrecordidcompletionhandler"},"fetch(withRecordID:\u200bcompletionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449126-fetch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func fetch(withRecordID recordID: CKRecord.ID, completionHandler: @escaping (CKRecord?, Error?) -> Void)\n")),(0,a.kt)("h3",{id:"deletewithrecordzoneidcompletionhandler"},"delete(withRecordZoneID:\u200bcompletionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449118-delete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func delete(withRecordZoneID zoneID: CKRecordZone.ID, completionHandler: @escaping (CKRecordZone.ID?, Error?) -> Void)\n")),(0,a.kt)("h3",{id:"databasescope"},"databaseScope"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1640398-databasescope"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"var databaseScope: CKDatabase.Scope \n")),(0,a.kt)("h3",{id:"fetchallsubscriptionscompletionhandler"},"fetchAllSubscriptions(completionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449110-fetchallsubscriptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, macOS 10.12, watchOS 6.0, *)\n    func fetchAllSubscriptions(completionHandler: @escaping ([CKSubscription]?, Error?) -> Void)\n")),(0,a.kt)("h3",{id:"savesubscriptioncompletionhandler"},"save(subscription:\u200bcompletionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/1449102-save"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, macOS 10.12, watchOS 6.0, *)\n    func save(subscription: CKSubscription, completionHandler: @escaping (CKSubscription?, Error?) -> Void)\n")),(0,a.kt)("h3",{id:"deletewithsubscriptionidcompletionhandler"},"delete(withSubscriptionID:\u200bcompletionHandler:\u200b)"),(0,a.kt)("p",null,"See https:\u200b//developer.apple.com/documentation/cloudkit/ckdatabase/3003590-delete"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 10.0, macOS 10.12, watchOS 6.0, *)\n    func delete(withSubscriptionID subscriptionID: CKSubscription.ID, completionHandler: @escaping (String?, Error?) -> Void)\n")))}u.isMDXComponent=!0}}]);
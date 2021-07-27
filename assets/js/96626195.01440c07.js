(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[6545],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2048:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={},l="CoreDataStack",s={unversionedId:"api/coredata/CoreDataStack",id:"api/coredata/CoreDataStack",isDocsHomePage:!1,title:"CoreDataStack",description:"Encapsulates a Core Data stack. This predates NSPersistentContainer and it's basically the same.",source:"@site/docs/api/coredata/CoreDataStack.md",sourceDirName:"api/coredata",slug:"/api/coredata/CoreDataStack",permalink:"/SyncKit/api/coredata/CoreDataStack",version:"current",frontMatter:{},sidebar:"API",previous:{title:"CoreDataMultiFetchedResultsControllerDelegate",permalink:"/SyncKit/api/coredata/CoreDataMultiFetchedResultsControllerDelegate"},next:{title:"DefaultCoreDataAdapterDelegate",permalink:"/SyncKit/api/coredata/DefaultCoreDataAdapterDelegate"}},p=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Initializers",id:"initializers",children:[{value:"<code>init(storeType:model:storeURL:concurrencyType:dispatchImmediately:)</code>",id:"initstoretypemodelstoreurlconcurrencytypedispatchimmediately",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>managedObjectContext</code>",id:"managedobjectcontext",children:[]},{value:"<code>persistentStoreCoordinator</code>",id:"persistentstorecoordinator",children:[]},{value:"<code>store</code>",id:"store",children:[]},{value:"<code>storeType</code>",id:"storetype",children:[]},{value:"<code>storeURL</code>",id:"storeurl",children:[]},{value:"<code>useDispatchImmediately</code>",id:"usedispatchimmediately",children:[]},{value:"<code>model</code>",id:"model",children:[]},{value:"<code>concurrencyType</code>",id:"concurrencytype",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>deleteStore()</code>",id:"deletestore",children:[]}]}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coredatastack"},"CoreDataStack"),(0,o.kt)("p",null,"Encapsulates a Core Data stack. This predates ",(0,o.kt)("inlineCode",{parentName:"p"},"NSPersistentContainer")," and it's basically the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class CoreDataStack: NSObject \n")),(0,o.kt)("h2",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NSObject")),(0,o.kt)("h2",{id:"initializers"},"Initializers"),(0,o.kt)("h3",{id:"initstoretypemodelstoreurlconcurrencytypedispatchimmediately"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(storeType:model:storeURL:concurrencyType:dispatchImmediately:)")),(0,o.kt)("p",null,"Create a new Core Data stack."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public init(storeType: String,\n         model: NSManagedObjectModel,\n         storeURL: URL?,\n         concurrencyType: NSManagedObjectContextConcurrencyType = .privateQueueConcurrencyType,\n         dispatchImmediately: Bool = false) \n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"storeType: Store type, such as NSSQLiteStoreType."),(0,o.kt)("li",{parentName:"ul"},"model: model to be used for the stack."),(0,o.kt)("li",{parentName:"ul"},"storeURL: ",(0,o.kt)("inlineCode",{parentName:"li"},"URL")," for the store location. Optional."),(0,o.kt)("li",{parentName:"ul"},"concurrencyType: Default is ",(0,o.kt)("inlineCode",{parentName:"li"},"privateQueueConcurrencyType")),(0,o.kt)("li",{parentName:"ul"},"dispatchImmediately: Used for testing.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"managedobjectcontext"},(0,o.kt)("inlineCode",{parentName:"h3"},"managedObjectContext")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public private(set) var managedObjectContext: NSManagedObjectContext!\n")),(0,o.kt)("h3",{id:"persistentstorecoordinator"},(0,o.kt)("inlineCode",{parentName:"h3"},"persistentStoreCoordinator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public private(set) var persistentStoreCoordinator: NSPersistentStoreCoordinator!\n")),(0,o.kt)("h3",{id:"store"},(0,o.kt)("inlineCode",{parentName:"h3"},"store")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public private(set) var store: NSPersistentStore!\n")),(0,o.kt)("h3",{id:"storetype"},(0,o.kt)("inlineCode",{parentName:"h3"},"storeType")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let storeType: String\n")),(0,o.kt)("h3",{id:"storeurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"storeURL")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let storeURL: URL?\n")),(0,o.kt)("h3",{id:"usedispatchimmediately"},(0,o.kt)("inlineCode",{parentName:"h3"},"useDispatchImmediately")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let useDispatchImmediately: Bool\n")),(0,o.kt)("h3",{id:"model"},(0,o.kt)("inlineCode",{parentName:"h3"},"model")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let model: NSManagedObjectModel\n")),(0,o.kt)("h3",{id:"concurrencytype"},(0,o.kt)("inlineCode",{parentName:"h3"},"concurrencyType")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let concurrencyType: NSManagedObjectContextConcurrencyType\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"deletestore"},(0,o.kt)("inlineCode",{parentName:"h3"},"deleteStore()")),(0,o.kt)("p",null,"Winds down the stack and deletes the store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public func deleteStore() \n")))}u.isMDXComponent=!0}}]);
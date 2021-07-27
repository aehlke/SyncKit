(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[2544],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},164:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={},c="CoreDataMultiFetchedResultsController",s={unversionedId:"api/coredata/CoreDataMultiFetchedResultsController",id:"api/coredata/CoreDataMultiFetchedResultsController",isDocsHomePage:!1,title:"CoreDataMultiFetchedResultsController",description:"` swift",source:"@site/docs/api/coredata/CoreDataMultiFetchedResultsController.md",sourceDirName:"api/coredata",slug:"/api/coredata/CoreDataMultiFetchedResultsController",permalink:"/SyncKit/api/coredata/CoreDataMultiFetchedResultsController",version:"current",frontMatter:{},sidebar:"API",previous:{title:"CoreDataAdapterRecordProcessing",permalink:"/SyncKit/api/coredata/CoreDataAdapterRecordProcessing"},next:{title:"CoreDataMultiFetchedResultsControllerDelegate",permalink:"/SyncKit/api/coredata/CoreDataMultiFetchedResultsControllerDelegate"}},u=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Initializers",id:"initializers",children:[{value:"<code>init(stackProvider:fetchRequest:)</code>",id:"initstackproviderfetchrequest",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>delegate</code>",id:"delegate",children:[]},{value:"<code>fetchedResultsControllers</code>",id:"fetchedresultscontrollers",children:[]},{value:"<code>fetchRequest</code>",id:"fetchrequest",children:[]},{value:"<code>provider</code>",id:"provider",children:[]}]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coredatamultifetchedresultscontroller"},"CoreDataMultiFetchedResultsController"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class CoreDataMultiFetchedResultsController: NSObject \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"CoreDataMultiFetchedResultsController")," allows to fetch objects with a fetch request across multiple ",(0,o.kt)("inlineCode",{parentName:"li"},"NSManagedObjectContext")," instances."),(0,o.kt)("li",{parentName:"ul"},"It can be useful when getting results out of a shared synchronizer, since objects from different record zones will be kept in different Core Data contexts.")),(0,o.kt)("h2",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NSObject")),(0,o.kt)("h2",{id:"initializers"},"Initializers"),(0,o.kt)("h3",{id:"initstackproviderfetchrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"init(stackProvider:fetchRequest:)")),(0,o.kt)("p",null,"Createa a new controller with results from the contexts in the given stack provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public init(stackProvider: DefaultCoreDataStackProvider, fetchRequest: NSFetchRequest<NSFetchRequestResult>) \n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"stackProvider: The Core Data stack provider that contains the contexts to get results from."),(0,o.kt)("li",{parentName:"ul"},"fetchRequest: Fetch request to use to with Core Data to get the objects.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"delegate"},(0,o.kt)("inlineCode",{parentName:"h3"},"delegate")),(0,o.kt)("p",null,"A delegate to be called when the internal controllers change as a result of new shared being accepted/removed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public weak var delegate: CoreDataMultiFetchedResultsControllerDelegate?\n")),(0,o.kt)("h3",{id:"fetchedresultscontrollers"},(0,o.kt)("inlineCode",{parentName:"h3"},"fetchedResultsControllers")),(0,o.kt)("p",null,"List of ",(0,o.kt)("inlineCode",{parentName:"p"},"NSFetchedResultsController")," used to get the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public private(set) var fetchedResultsControllers: [NSFetchedResultsController<NSFetchRequestResult>]!\n")),(0,o.kt)("h3",{id:"fetchrequest"},(0,o.kt)("inlineCode",{parentName:"h3"},"fetchRequest")),(0,o.kt)("p",null,"Fetch request used to get the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let fetchRequest: NSFetchRequest<NSFetchRequestResult>\n")),(0,o.kt)("h3",{id:"provider"},(0,o.kt)("inlineCode",{parentName:"h3"},"provider")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DefaultCoreDataStackProvider")," linked to this controller. This is the object that provides a new Core Data stack to the synchronizer when a new record zone is added to it \u2013user accepted a share, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public let provider: DefaultCoreDataStackProvider\n")))}p.isMDXComponent=!0}}]);
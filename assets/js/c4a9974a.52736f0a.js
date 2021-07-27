(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[7784],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),y=o,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7292:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],c={id:"coredata",title:"SyncKit for Core Data"},s="SyncKit for Core Data",u={unversionedId:"coredata",id:"coredata",isDocsHomePage:!1,title:"SyncKit for Core Data",description:"Import SyncKit and create a synchronizer:",source:"@site/docs/coredata.md",sourceDirName:".",slug:"/coredata",permalink:"/SyncKit/coredata",version:"current",frontMatter:{id:"coredata",title:"SyncKit for Core Data"},sidebar:"docs",previous:{title:"Overview",permalink:"/SyncKit/overview"},next:{title:"Migrating from SyncKit 0.3.0",permalink:"/SyncKit/migrating"}},l=[{value:"Identifying objects",id:"identifying-objects",children:[]},{value:"Previous versions",id:"previous-versions",children:[]},{value:"Limitations",id:"limitations",children:[]}],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"synckit-for-core-data"},"SyncKit for Core Data"),(0,a.kt)("p",null,"Import SyncKit and create a synchronizer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'\nimport SyncKit\n\n...\n\nsynchronizer = CloudKitSynchronizer.privateSynchronizer(containerName: "your-iCloud-container-name",\n                                                                     managedObjectContext: self.coreDataStack.managedObjectContext)\n\n...\n\n// Synchronize\nsynchronizer.synchronize { error in\n    ...\n}\n')),(0,a.kt)("p",null,"This creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," object configured with a ",(0,a.kt)("inlineCode",{parentName:"p"},"CoreDataAdapter")," for your model. The adapter registers changes in your model objects so they can be uploaded next time you synchronize data, and it applies changes from downloaded records to your model."),(0,a.kt)("p",null,"By default, the adapter will save changes to your Core Data context for you during synchronization, but custom logic can be provided by assigning a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"CoreDataAdapterDelegate"),"."),(0,a.kt)("h2",{id:"identifying-objects"},"Identifying objects"),(0,a.kt)("p",null,"In order for SyncKit to be able to map CloudKit records to your objects your Core Data classes should conform to PrimaryKey and implement its"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"static func primaryKey() -> String\n")),(0,a.kt)("p",null,"method to return the name of a stored property that should be used as primary key. Primary keys should have a unique value for each object of the same class, and this value should not change in the lifetime of the object."),(0,a.kt)("p",null,"For example, in the example project we have:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'@objc(QSCompany)\npublic class QSCompany: NSManagedObject, PrimaryKey {\n    public static func primaryKey() -> String {\n        return "identifier"\n    }\n}\n\nextension QSCompany {\n\n    @nonobjc public class func fetchRequest() -> NSFetchRequest<QSCompany> {\n        return NSFetchRequest<QSCompany>(entityName: "QSCompany")\n    }\n\n    @NSManaged public var identifier: String?\n    @NSManaged public var name: String?\n    @NSManaged public var sortIndex: NSNumber?\n    @NSManaged public var employees: NSSet?\n\n}\n\n...\n\nfunc insertCompany(name: String) {\n  let company = NSEntityDescription.insertNewObject(forEntityName: "QSCompany", into: managedObjectContext) as! QSCompany\n  company.identifier = UUID().uuidString\n  company.name = name\n  try? managedObjectContext.save()\n}\n\n')),(0,a.kt)("h2",{id:"previous-versions"},"Previous versions"),(0,a.kt)("p",null,"If you were using SyncKit before version 0.3.0 and you would like to adopt primary keys, check the ",(0,a.kt)("a",{parentName:"p",href:"/SyncKit/migrating"},"migration guide"),"."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"CloudKit doesn't support ordered relations or many-to-many relationships, so those won't work."))}d.isMDXComponent=!0}}]);
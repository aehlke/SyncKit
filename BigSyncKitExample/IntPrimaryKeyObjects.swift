//
//  QSIntKeyObject.swift
//  SyncKitRealmSwiftExampleTests
//
//  Created by Manuel Entrena on 02/05/2021.
//  Copyright © 2021 Manuel Entrena. All rights reserved.
//

import RealmSwift
import BigSyncKit

class QSCompany_Int: Object, PrimaryKey, SyncedDeletable {
    @objc dynamic var name: String? = ""
    @objc dynamic var identifier: Int = 0
    let sortIndex = RealmOptional<Int>()
    
    let employees = LinkingObjects(fromType: QSEmployee_Int.self, property: "company")

    @objc dynamic var isDeleted = false
    
    override class func primaryKey() -> String {
        
        return "identifier"
    }
}

class QSEmployee_Int: Object, PrimaryKey, ParentKey, SyncedDeletable {
    @objc dynamic var name: String? = ""
    let sortIndex = RealmOptional<Int>()
    @objc dynamic var identifier: Int = 0
    @objc dynamic var photo: Data? = nil
    
    @objc dynamic var company: QSCompany_Int?
    
    @objc dynamic var isDeleted = false
    
    override class func primaryKey() -> String {
        return "identifier"
    }
    
    static func parentKey() -> String {
        return "company"
    }
}

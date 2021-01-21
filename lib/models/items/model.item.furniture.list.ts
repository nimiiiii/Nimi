/*
 * Copyright 2019 - 2020 Nathan Alo, Ayane Satomi, et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */
import Furniture from "./model.item.furniture";
import ShareCfgModelList from "../model.sharecfg.list.base";
import { dependsOn } from "../model.helpers";

@dependsOn([ "furniture" ])
export default class FurnitureList extends ShareCfgModelList<Furniture> {
    constructor() {
        super(Furniture);
    }
}
/*
 * Copyright 2019 - 2020 Nathan Alo, Ayane Satomi, et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */
import Post from "./model.post";
import ShareCfgModelList from "../model.sharecfg.list.base";
import { dependsOn } from "../model.helpers";

@dependsOn([ "social" ])
export default class PostList extends ShareCfgModelList<Post> {
    constructor() {
        super(Post);
    }
}
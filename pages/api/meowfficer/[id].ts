/*
 * Copyright 2019 - 2020 Nathan Alo, Ayane Satomi, et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */
import { GetEntryByIdQuery } from "lib/schemas";
import Meowfficer from "lib/models/meowfficer/model.meowfficer";
import createModel from "lib/createModel";

export default createModel(Meowfficer, GetEntryByIdQuery);
/*
 *  From: https://github.com/ClarityCafe/Aya
 *
 *  Copyright (c) 2020 Ayane Satomi, Michael Mitchell, et al.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

import { NextApiHandler } from "next";
import RequestError from "lib/requestError";

function handleError(fn: NextApiHandler) : NextApiHandler {
    return async function (req, res) {
        try {
            return await fn(req, res);
        } catch (error) {
            const code = (error instanceof RequestError) ? error.code : 500;
            const isServerError = code === 500;

            const message = !isServerError ? error.message : "An internal server error has occured.";
            res.status(code).json({ code, message });

            if (process.env.NODE_ENV === "development" && isServerError)
                console.error(error.stack);
        }
    };
}

export default handleError;
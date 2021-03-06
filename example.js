bplist00�_WebMainResource�	
_WebResourceFrameName^WebResourceURL_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingNameP_3http://apidocjs.com/source/example_basic/example.jsOL<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*
 * Basic Example
 *
 * This is a basic example for apiDoc.
 * Documentation blocks without @api (like this block) will be ignored.
 */

/**
 * @api {get} /user/:id Get User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The &lt;code&gt;id&lt;/code&gt; of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
</pre></body></html>_application/javascriptUUTF-8    ( ? N ` v � � �4                           :
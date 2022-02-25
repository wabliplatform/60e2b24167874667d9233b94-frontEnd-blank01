/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Myprojects from '../model/Myprojects';

/**
* Myprojects service.
* @module api/MyprojectsApi
* @version 1.0.0
*/
export default class MyprojectsApi {

    /**
    * Constructs a new MyprojectsApi. 
    * @alias module:api/MyprojectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createmyprojects operation.
     * @callback module:api/MyprojectsApi~createmyprojectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Myprojects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Myprojects} myprojects data to be created
     * @param {module:api/MyprojectsApi~createmyprojectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Myprojects}
     */
    createmyprojects(myprojects, callback) {
      let postBody = myprojects;
      // verify the required parameter 'myprojects' is set
      if (myprojects === undefined || myprojects === null) {
        throw new Error("Missing the required parameter 'myprojects' when calling createmyprojects");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Myprojects;
      return this.apiClient.callApi(
        '/myprojects', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletemyprojects operation.
     * @callback module:api/MyprojectsApi~deletemyprojectsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} myprojectsId the Id parameter
     * @param {module:api/MyprojectsApi~deletemyprojectsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletemyprojects(myprojectsId, callback) {
      let postBody = null;
      // verify the required parameter 'myprojectsId' is set
      if (myprojectsId === undefined || myprojectsId === null) {
        throw new Error("Missing the required parameter 'myprojectsId' when calling deletemyprojects");
      }

      let pathParams = {
        'myprojectsId': myprojectsId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/myprojects/{myprojectsId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllmyprojects operation.
     * @callback module:api/MyprojectsApi~getAllmyprojectsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Myprojects>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/MyprojectsApi~getAllmyprojectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Myprojects>}
     */
    getAllmyprojects(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Myprojects];
      return this.apiClient.callApi(
        '/myprojects/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getmyprojects operation.
     * @callback module:api/MyprojectsApi~getmyprojectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Myprojects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} myprojectsId the Id parameter
     * @param {module:api/MyprojectsApi~getmyprojectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Myprojects}
     */
    getmyprojects(myprojectsId, callback) {
      let postBody = null;
      // verify the required parameter 'myprojectsId' is set
      if (myprojectsId === undefined || myprojectsId === null) {
        throw new Error("Missing the required parameter 'myprojectsId' when calling getmyprojects");
      }

      let pathParams = {
        'myprojectsId': myprojectsId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Myprojects;
      return this.apiClient.callApi(
        '/myprojects/{myprojectsId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatemyprojects operation.
     * @callback module:api/MyprojectsApi~updatemyprojectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Myprojects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} myprojectsId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Myprojects} opts.myprojects data to be updated
     * @param {module:api/MyprojectsApi~updatemyprojectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Myprojects}
     */
    updatemyprojects(myprojectsId, opts, callback) {
      opts = opts || {};
      let postBody = opts['myprojects'];
      // verify the required parameter 'myprojectsId' is set
      if (myprojectsId === undefined || myprojectsId === null) {
        throw new Error("Missing the required parameter 'myprojectsId' when calling updatemyprojects");
      }

      let pathParams = {
        'myprojectsId': myprojectsId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Myprojects;
      return this.apiClient.callApi(
        '/myprojects/{myprojectsId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

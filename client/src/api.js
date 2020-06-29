import axios from "axios";

export default ( { req } ) =>
{
    if ( typeof window === "undefined" )
    {
        return axios.create( {
            baseURL:
                "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
            headers: req.headers,
        } );
    } else
    {
        return axios.create( {} );
    }
};


// Interceptors
const errorInterceptor = ( err ) =>
{
    if ( err.response )
    {
        const {
            response: { status },
        } = err;
        switch ( status )
        {
            case false:
                return Promise.reject( err );
            default:
                return Promise.reject( err );
        }
    } else
    {
        return Promise.reject( err );
    }
};

axios.interceptors.response.use( response => response, errorInterceptor );

const api = ( { method = 'get', endpoint, payload = null, params = null } ) => axios( {
    url: restUrl + endpoint,
    params,
    method,
    data: payload,
} );

// User API
export const createACcount = ( { userForm } ) => api( { method: 'post', endpoint: '/accounts', payload: userForm } );